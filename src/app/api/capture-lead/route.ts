import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, businessName } = body;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Split full name into first and last name
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Get environment variables
    const gcApiKey = process.env.GC_API_KEY;
    const gcBaseUrl = "https://api.globalcontrol.io/api/ai";
    const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const mailgunDomain = process.env.MAILGUN_DOMAIN || "m.wereply.com";
    const glamoriqueTagId = process.env.GLAMORIQUE_TAG_ID;

    const results: {
      globalControl?: { success: boolean; contactId?: string; error?: string };
      mailgun?: { success: boolean; error?: string };
      tag?: { success: boolean; error?: string };
    } = {};

    // 1. Create contact in Global Control
    if (gcApiKey) {
      try {
        const gcResponse = await fetch(`${gcBaseUrl}/contacts`, {
          method: "POST",
          headers: {
            "X-API-KEY": gcApiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            phone,
            customFields: {
              businessName: businessName || "",
              source: "Glamorique Landing Page",
            },
          }),
        });

        if (gcResponse.ok) {
          const gcData = await gcResponse.json();
          results.globalControl = { success: true, contactId: gcData.id };

          // 2. Fire tag for Glamorique Newsletter
          if (glamoriqueTagId && gcData.id) {
            try {
              const tagResponse = await fetch(
                `${gcBaseUrl}/tags/fire-tag/${glamoriqueTagId}`,
                {
                  method: "POST",
                  headers: {
                    "X-API-KEY": gcApiKey,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    contactId: gcData.id,
                  }),
                }
              );

              results.tag = {
                success: tagResponse.ok,
                error: tagResponse.ok ? undefined : `Tag fire failed: ${tagResponse.status}`,
              };
            } catch (tagError) {
              results.tag = {
                success: false,
                error: tagError instanceof Error ? tagError.message : "Tag fire error",
              };
            }
          }
        } else {
          const errorText = await gcResponse.text();
          results.globalControl = {
            success: false,
            error: `GC API error: ${gcResponse.status} - ${errorText}`,
          };
        }
      } catch (gcError) {
        results.globalControl = {
          success: false,
          error: gcError instanceof Error ? gcError.message : "GC API error",
        };
      }
    }

    // 3. Send notification email via Mailgun to the mailing list
    if (mailgunApiKey) {
      try {
        const mailgunAuth = Buffer.from(`api:${mailgunApiKey}`).toString("base64");
        
        // Send to mailing list
        const mailgunData = new URLSearchParams({
          from: `Glamorique <glam@${mailgunDomain}>`,
          to: `glam@${mailgunDomain}`,
          subject: "New Glamorique Lead Capture",
          text: `New lead captured from Glamorique landing page:

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Business: ${businessName || "N/A"}

Submitted at: ${new Date().toISOString()}
`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 30px; border-radius: 10px;">
              <h2 style="color: #c9a96e; margin-bottom: 20px;">✨ New Glamorique Lead</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #333; color: #c9a96e; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #333;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #333; color: #c9a96e; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #333;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #333; color: #c9a96e; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #333;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; color: #c9a96e; font-weight: bold;">Business:</td>
                  <td style="padding: 10px;">${businessName || "N/A"}</td>
                </tr>
              </table>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">
                Submitted at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
              </p>
            </div>
          `,
        });

        const mailgunResponse = await fetch(
          `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
          {
            method: "POST",
            headers: {
              Authorization: `Basic ${mailgunAuth}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: mailgunData.toString(),
          }
        );

        results.mailgun = {
          success: mailgunResponse.ok,
          error: mailgunResponse.ok ? undefined : `Mailgun error: ${mailgunResponse.status}`,
        };
      } catch (mgError) {
        results.mailgun = {
          success: false,
          error: mgError instanceof Error ? mgError.message : "Mailgun error",
        };
      }
    }

    // Return success if at least one service succeeded
    const anySuccess =
      results.globalControl?.success ||
      results.mailgun?.success;

    if (anySuccess) {
      return NextResponse.json({
        success: true,
        message: "Lead captured successfully",
        results,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "All integrations failed",
          results,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

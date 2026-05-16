"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  CheckCircle,
  Star,
  ChevronDown,
  Mail,
  Phone,
  Building2,
  User,
} from "lucide-react";
import { useState } from "react";
import MintBirdButton from "@/components/MintBirdButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    title: "Beauty, Grooming & Finishing Touches",
    image: "https://glamorique.enquiretoday.com.au/assets/beauty-grooming-CF4ky0Ee.jpg",
  },
  {
    title: "Body Contouring & Wellness",
    image: "https://glamorique.enquiretoday.com.au/assets/body-contouring-i3lWecpC.jpg",
  },
  {
    title: "Cosmetic Dentistry & Smile Design",
    image: "https://glamorique.enquiretoday.com.au/assets/cosmetic-dentistry-Bz3k1m4_.jpg",
  },
  {
    title: "Face & Skin Aesthetics",
    image: "https://glamorique.enquiretoday.com.au/assets/face-skin-aesthetics-BS8Om5Ub.jpg",
  },
  {
    title: "Hair, Scalp & Brow Enhancements",
    image: "https://glamorique.enquiretoday.com.au/assets/hair-enhancements-BQml_8-a.jpg",
  },
  {
    title: "Surgical Aesthetic Solutions",
    image: "https://glamorique.enquiretoday.com.au/assets/surgical-aesthetics-ByWUstfg.jpg",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Create Your Profile",
    description:
      "Create your professional business profile in minutes. Add your key details so clients can easily understand who you are and what you offer.",
  },
  {
    step: "Step 2",
    title: "List Your Services",
    description:
      "Select your specialist categories and showcase your services, allowing the right beauty clients to find you quickly and easily.",
  },
  {
    step: "Step 3",
    title: "Start Receiving Enquiries",
    description:
      "Connect with women actively searching for trusted beauty professionals and start receiving direct enquiries through the platform.",
  },
];

const faqs = [
  {
    question: "What are the benefits of being a member of Glamorique?",
    answer:
      "As a Glamorique member, you get premium visibility in Australia's leading luxury beauty directory, direct access to women actively seeking beauty services, professional profile showcasing, enquiry management tools, and exclusive networking opportunities with other beauty professionals.",
  },
  {
    question: "How do I get started and claim my 60-day free trial?",
    answer:
      "Simply fill out the registration form on this page with your business details. Once submitted, you'll receive immediate access to set up your profile and start your 60-day free trial — no credit card required.",
  },
  {
    question: "Do I need to provide a credit card to access the free trial?",
    answer:
      "No credit card is required for the 60-day free trial. You can experience all Gold Membership features risk-free. We'll only ask for payment details if you choose to continue after your trial period.",
  },
  {
    question: "What happens when my free trial ends?",
    answer:
      "After your 60-day free trial, your Gold Membership continues at $245/month. However, if you upgrade to Founder status within your first 30 days, you'll lock in exclusive pricing at $145/month or $1,200/year.",
  },
  {
    question: "Who do I contact for help?",
    answer:
      "Our dedicated support team is available via email at directory.glamorique@gmail.com. We typically respond within 24 hours and are committed to helping you maximize your Glamorique experience.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/capture-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phone: "", businessName: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a96e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#c9a96e]" />
              <span className="text-xl font-bold gold-gradient-text">Glamorique</span>
            </div>
            <a
              href="#join"
              className="gold-gradient-btn text-[#0a0a0a] px-5 py-2 rounded-full text-sm font-semibold"
            >
              Get 2 Months Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a96e] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a96e] rounded-full blur-[150px]" />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-5 h-5 text-[#c9a96e]" />
            <span className="text-[#c9a96e] text-sm font-medium tracking-wider uppercase">
              Over 1,000+ Businesses
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Showcase Your Beauty Brand in{" "}
            <span className="gold-gradient-text">Australia&apos;s Leading Luxury Directory</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Start your free 60-day trial and be discovered by women actively seeking trusted beauty
            services across Australia. Join Glamorique today!
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="gold-gradient-btn text-[#0a0a0a] px-8 py-4 rounded-full text-lg font-bold inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get 2 Months for Free
            </a>
            <a
              href="#how-it-works"
              className="border border-[#c9a96e]/50 text-[#c9a96e] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c9a96e]/10 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#c9a96e]" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Struggling to Stand Out from the Crowd?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Many talented beauty professionals struggle to gain real visibility, often pouring
                time and money into platforms that don&apos;t bring the right clients. It&apos;s
                frustrating when you know your services are exceptional – yet you feel overlooked,
                undervalued, or hidden in the noise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c9a96e]/20 rounded-2xl blur-2xl" />
              <Image
                src="https://glamorique.enquiretoday.com.au/assets/beauty-treatment-updated-AzLjiulo.jpg"
                alt="Beauty professional at work"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#c9a96e]/20 rounded-2xl blur-2xl" />
              <Image
                src="https://glamorique.enquiretoday.com.au/assets/glamorique-connection-BF5W-Zyh.jpg"
                alt="Glamorique platform connecting businesses"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                The Beauty Destination Connecting Your Business to Women Everywhere
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Glamorique was created to help you stand apart. As a trusted luxury beauty and
                wellness platform, we&apos;re here to help businesses like yours showcase your
                brand, connect with women, and attract loyal clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Join Glamorique in 3 Simple Steps
            </h2>
            <p className="text-gray-300 text-lg">
              Help new clients find you in 3 simple steps — without chasing leads.
            </p>
          </motion.div>

          <div className="text-center mb-12">
            <a
              href="#join"
              className="gold-gradient-btn text-[#0a0a0a] px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get 2 Months for Free
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#c9a96e] text-sm font-bold tracking-wider uppercase mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your Service, Our Platform
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Gold Membership – 60-Day Free Trial
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              New members receive 60 days of full access to the Gold Membership, completely free.
              After the 60-day free trial, Gold Membership is $245 per month, unless a Founder
              upgrade option is selected within the first 30 days.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <span className="bg-[#c9a96e]/20 text-[#c9a96e] px-4 py-2 rounded-full text-sm font-semibold">
              Limited Time Offer
            </span>
          </div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Founder&apos;s Upgrade Incentives</h3>
            <p className="text-gray-300">Available only in your first 30 days</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#c9a96e]/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-400 mb-2">Option 1</div>
              <h3 className="text-2xl font-bold mb-4">Monthly Founder Rate</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold gold-gradient-text">$145</span>
                <span className="text-gray-400">per month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a96e]" />
                  <span>Locked in for 12 months</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a96e]" />
                  <span>Save $100 per month off the standard Gold rate</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#1a1a1a] rounded-2xl p-8 border-2 border-[#c9a96e] relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#c9a96e] text-[#0a0a0a] px-4 py-1 rounded-full text-sm font-bold">
                  Best Value
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-2">Option 2</div>
              <h3 className="text-2xl font-bold mb-4">Annual Founder Rate</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold gold-gradient-text">$1,200</span>
                <span className="text-gray-400">for 12 months</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a96e]" />
                  <span>One upfront payment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a96e]" />
                  <span>Save more than 55% compared to the standard Gold rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a96e]" />
                  <span>Maximum savings with priority Founder positioning</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#join"
              className="gold-gradient-btn text-[#0a0a0a] px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Start Your Free 60-Day Trial
            </a>
            <p className="text-gray-400 mt-4 text-sm">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 sm:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose Glamorique?</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Spend your time on your clients — not on advertising",
                desc: "Focus on your clients while we handle the marketing.",
              },
              {
                title: "We bring new clients to your business",
                desc: "Get in front of people actively looking for your services.",
              },
              {
                title: "60-Day Free Trial",
                desc: "Try our premium listing free for 60 days — no commitment.",
              },
              {
                title: "Trusted Premium Directory",
                desc: "Showcase your business on a trusted, high-visibility directory.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#c9a96e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#c9a96e]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/10 via-transparent to-[#c9a96e]/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Unlock 60 Days of Free Exposure to Elevate Your Beauty Brand
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Experience everything Glamorique has to offer with our risk-free trial.
            </p>
            <a
              href="#join"
              className="gold-gradient-btn text-[#0a0a0a] px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get 2 Months for Free
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your Questions, Answered
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0a] rounded-xl border border-[#c9a96e]/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c9a96e] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="join" className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a96e]/5 via-transparent to-[#c9a96e]/5" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 border border-[#c9a96e]/30 gold-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Grow Your Beauty Brand with Glamorique Today
              </h2>
              <p className="text-gray-300">
                Step into Australia&apos;s premier luxury beauty directory and gain the visibility,
                leads, and prestige your business deserves.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2 text-[#c9a96e]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a96e]/30 rounded-lg focus:border-[#c9a96e] focus:outline-none focus:ring-1 focus:ring-[#c9a96e] transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 inline mr-2 text-[#c9a96e]" />
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a96e]/30 rounded-lg focus:border-[#c9a96e] focus:outline-none focus:ring-1 focus:ring-[#c9a96e] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2 text-[#c9a96e]" />
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a96e]/30 rounded-lg focus:border-[#c9a96e] focus:outline-none focus:ring-1 focus:ring-[#c9a96e] transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Building2 className="w-4 h-4 inline mr-2 text-[#c9a96e]" />
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a96e]/30 rounded-lg focus:border-[#c9a96e] focus:outline-none focus:ring-1 focus:ring-[#c9a96e] transition-all"
                  placeholder="Your business name (optional)"
                />
              </div>

              {/* MintBird Titanium Suite Button */}
              <div id="mintbird-button-container" className="pt-4">
                <MintBirdButton isSubmitting={isSubmitting} disabled={isSubmitting} />
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg text-center"
                >
                  ✅ Thank you! Your submission has been received. Check your email for next steps.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-center"
                >
                  ❌ Something went wrong. Please try again or contact us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#c9a96e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#c9a96e]" />
              <span className="text-xl font-bold gold-gradient-text">Glamorique</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">Australia&apos;s Premier Beauty Directory</p>
              <a
                href="mailto:directory.glamorique@gmail.com"
                className="text-[#c9a96e] hover:text-[#e8d5a3] transition-colors text-sm"
              >
                directory.glamorique@gmail.com
              </a>
            </div>
          </div>
          <div className="gold-divider my-8" />
          <p className="text-center text-gray-500 text-sm">
            © 2026 Glamorique. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

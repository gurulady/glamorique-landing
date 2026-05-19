"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Mail, ArrowLeft, Globe, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a96e]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9a96e]/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Success icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-24 h-24 bg-[#c9a96e]/20 rounded-full flex items-center justify-center mx-auto border-2 border-[#c9a96e]/50">
            <CheckCircle className="w-12 h-12 text-[#c9a96e]" />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="gold-gradient-text">Welcome to Glamorique!</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your submission has been received successfully. We&apos;re thrilled to have you join
          Australia&apos;s premier luxury beauty directory.
        </motion.p>

        {/* What happens next */}
        <motion.div
          className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#c9a96e]/20 mb-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#c9a96e]" />
            What Happens Next?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#c9a96e]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#c9a96e] font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Check Your Email</h3>
                <p className="text-gray-400">
                  We&apos;ve sent a welcome email to your inbox with your next steps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#c9a96e]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#c9a96e] font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Profile Setup</h3>
                <p className="text-gray-400">
                  Our team will help you create your professional business profile.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#c9a96e]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#c9a96e] font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Start Your Free Trial</h3>
                <p className="text-gray-400">
                  Enjoy 60 days of full Gold Membership access — completely free.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-2">Questions? Reach out to us:</p>
          <a
            href="mailto:directory.glamorique@gmail.com"
            className="inline-flex items-center gap-2 text-[#c9a96e] hover:text-[#e8d5a3] transition-colors"
          >
            <Mail className="w-5 h-5" />
            directory.glamorique@gmail.com
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#"
            className="w-12 h-12 bg-[#1a1a1a] border border-[#c9a96e]/30 rounded-full flex items-center justify-center hover:bg-[#c9a96e]/20 transition-all"
          >
            <Globe className="w-5 h-5 text-[#c9a96e]" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-[#1a1a1a] border border-[#c9a96e]/30 rounded-full flex items-center justify-center hover:bg-[#c9a96e]/20 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-[#c9a96e]" />
          </a>
        </motion.div>

        {/* Back to home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#c9a96e] hover:text-[#e8d5a3] transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Homepage
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-[#c9a96e]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#c9a96e]" />
            <span className="text-lg font-bold gold-gradient-text">Glamorique</span>
          </div>
          <p className="text-gray-500 text-sm">
            Australia&apos;s Premier Beauty Directory
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2026 Glamorique. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

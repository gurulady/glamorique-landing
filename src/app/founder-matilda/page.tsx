"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function FounderMatilda() {
  return (
    <div className="flex flex-col flex-1 bg-[#0a0a0a] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a96e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#c9a96e]" />
              <span className="text-xl font-bold gold-gradient-text">Glamorique</span>
            </a>
            <a
              href="/"
              className="text-[#c9a96e] hover:text-[#e8d5a3] transition-colors text-sm font-medium flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Founder Section */}
      <section className="pt-24 pb-20 sm:pt-32 sm:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-[#c9a96e]/20 rounded-2xl transform rotate-2" />
                <div className="absolute -inset-4 border border-[#c9a96e]/10 rounded-2xl transform -rotate-1" />

                <div className="relative h-full rounded-2xl overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src="/matilda-portrait.jpg"
                    alt="Matilda Cole — Co-Founder of Glamorique"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Co-Founder & Visionary
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Matilda <span className="gold-gradient-text">Cole</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                For decades, I quietly built businesses, schools, communities, brands, and ideas 
                across different seasons of life. Through beauty, motherhood, reinvention, challenge, 
                technology, and transformation, one thing remained constant:
              </p>

              <p className="text-xl sm:text-2xl text-[#c9a96e] italic leading-relaxed mb-8">
                "The desire to create meaningful things that leave people better than before."
              </p>

              <div className="space-y-4 text-gray-300">
                <p>
                  Glamorique was born from a 35-year friendship with my co-founder Carina deKlerk. 
                  Together, we envisioned a platform where beauty professionals could truly shine — 
                  connecting talented women with the clients who need them.
                </p>
                <p>
                  Our mission is simple: help women feel confident, seen, and beautifully aligned 
                  with who they are. Whether through our curated directory, future makeup line, or 
                  personalized styling services, Glamorique is about empowering women at every step.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-[#c9a96e]/20">
                <p className="text-[#c9a96e] text-sm tracking-wider uppercase mb-4">
                  Connect with Matilda
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://matildacole.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-gradient-btn text-[#0a0a0a] px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2"
                  >
                    Visit matildacole.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-32 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The Glamorique <span className="gold-gradient-text">Vision</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Beauty & Transformation",
                desc: "Helping women discover their unique beauty through curated services and personalized guidance.",
              },
              {
                title: "Community & Connection",
                desc: "Building a trusted network where beauty professionals and clients find each other effortlessly.",
              },
              {
                title: "Innovation & Future",
                desc: "Pioneering AI-powered beauty matching and personalized color analysis for every woman.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0a] rounded-2xl p-8 border border-[#c9a96e]/20 hover:border-[#c9a96e]/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#c9a96e]">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
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
              Join the Glamorique <span className="gold-gradient-text">Journey</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Be part of Australia's leading luxury beauty directory.
            </p>
            <a
              href="/#join"
              className="gold-gradient-btn text-[#0a0a0a] px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Get 2 Months for Free
            </a>
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

"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Shield, Zap, Crown } from "lucide-react";
import { useState } from "react";

interface MintBirdButtonProps {
  onClick?: () => void;
  isSubmitting?: boolean;
  disabled?: boolean;
}

export default function MintBirdButton({ onClick, isSubmitting, disabled }: MintBirdButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Titanium glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#c0c0c0] via-[#e8e8e8] to-[#a0a0a0] rounded-full blur-md opacity-50"
        animate={{
          opacity: isHovered ? 0.8 : 0.5,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main button */}
      <motion.button
        type="submit"
        onClick={onClick}
        disabled={disabled || isSubmitting}
        className="relative w-full bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a] 
                   text-white px-8 py-5 rounded-full text-lg font-bold 
                   border border-[#c0c0c0]/30 shadow-2xl
                   flex items-center justify-center gap-3
                   disabled:opacity-50 disabled:cursor-not-allowed
                   overflow-hidden group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Titanium shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />

        {/* Left icon group */}
        <div className="flex items-center gap-1">
          <Crown className="w-5 h-5 text-[#c9a96e]" />
          <Shield className="w-4 h-4 text-[#c0c0c0]" />
        </div>

        {/* Button text */}
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              Processing...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-[#c9a96e]" />
              Get 2 Months For Free
              <motion.div
                animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </>
          )}
        </span>

        {/* Right badge */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <motion.div
            className="bg-[#c9a96e]/20 text-[#c9a96e] text-xs px-2 py-1 rounded-full border border-[#c9a96e]/30"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
          >
            SECURE
          </motion.div>
        </div>
      </motion.button>

      {/* Trust badges below button */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-400"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
      >
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" /> SSL Secure
        </span>
        <span className="flex items-center gap-1">
          <Zap className="w-3 h-3" /> Instant Access
        </span>
        <span className="flex items-center gap-1">
          <Crown className="w-3 h-3" /> Premium
        </span>
      </motion.div>
    </motion.div>
  );
}

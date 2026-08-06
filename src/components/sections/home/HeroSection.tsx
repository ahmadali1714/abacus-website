"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-60" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-8">
            Enterprise Software Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]"
        >
          We Build Software That{" "}
          <span className="text-brand-gradient">
            Powers Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From cloud infrastructure to AI-driven applications, we partner with enterprises 
          to deliver digital solutions that transform operations and accelerate business outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/contact" size="lg">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-slate-100"
        >
          <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider font-medium">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 items-center">
            {["TechCorp", "GlobalFin", "HealthSync", "RetailMax", "DataPrime"].map((name) => (
              <span
                key={name}
                className="text-slate-300 font-bold text-lg md:text-xl tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

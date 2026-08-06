"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      {tag && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            light
              ? "bg-white/10 text-white/90"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

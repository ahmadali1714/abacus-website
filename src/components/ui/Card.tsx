"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className = "", hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl border border-slate-100 p-8 ${
        hover
          ? "transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1 hover:border-slate-200"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

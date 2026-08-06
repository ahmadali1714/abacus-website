"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { technologies } from "@/constants";

export default function TechnologiesSection() {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Tech Stack"
          title="Technologies We Work With"
          description="We leverage industry-leading technologies to build robust, scalable, and future-proof solutions."
        />

        <div className="space-y-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies
                  .filter((t) => t.category === category)
                  .map((tech) => (
                    <span
                      key={tech.name}
                      className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

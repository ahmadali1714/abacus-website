"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { caseStudies } from "@/constants";

export default function CaseStudiesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Case Studies"
          title="Results That Speak"
          description="See how we've helped businesses transform their operations and achieve measurable results."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-200">
                  {study.industry}
                </span>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium mb-3">
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-500 mb-5 leading-relaxed">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result) => (
                    <div key={result} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-600 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

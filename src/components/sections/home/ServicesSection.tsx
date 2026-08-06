"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ShoppingCart, LayoutDashboard, Cloud, Code2, Brain } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/constants/services";

const iconMap: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
};

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Our Services"
          title="Solutions That Drive Results"
          description="We deliver end-to-end enterprise software solutions tailored to your unique business challenges and growth objectives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1 hover:border-slate-200"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6`}
                >
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </h3>
                <p className="text-slate-500 leading-relaxed">{service.shortDescription}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, HeadphonesIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant development practices with end-to-end encryption and rigorous security audits.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Delivery",
    description: "Agile methodologies and experienced teams ensure we deliver high-quality solutions on time and within budget.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Teams",
    description: "Expert architects, developers, and designers fully dedicated to your project from start to finish.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support to ensure your systems are always running at peak performance.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Why Choose Us"
          title="Your Trusted Technology Partner"
          description="We combine deep technical expertise with a genuine commitment to your business success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 flex gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

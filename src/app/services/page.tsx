"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import { services } from "@/constants/services";

const imageMap: Record<string, string> = {
  "ecommerce-retail-solutions": "/service-images/umbraco-shopify.png",
  "erp-solutions": "/service-images/erp-solutions.png",
  "cloud-solutions": "/service-images/cloud-solutions.png",
  "custom-software-development": "/service-images/custom-software-development.png",
  "ai-machine-learning": "/service-images/ai-machine-learning.png",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Solutions Designed for{" "}
            <span className="text-brand-gradient">
              Enterprise Impact
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            From strategy to execution, we deliver end-to-end software solutions that 
            transform how businesses operate and grow.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50 hover:-translate-y-2 hover:border-slate-200"
                >
                  {/* Image */}
                  <div className="w-full">
                    <img
                      src={imageMap[service.slug] || '/logo.png'}
                      alt={service.title}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed flex-grow">{service.shortDescription}</p>

                    <div className="mt-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-50 text-emerald-600 font-semibold hover:bg-emerald-100 transition-colors">
                        Learn More
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

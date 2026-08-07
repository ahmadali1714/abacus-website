"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/constants/services";

const imageMap: Record<string, string> = {
  "ecommerce-retail-solutions": "/service-images/umbraco-shopify.png",
  "erp-solutions": "/service-images/erp-solutions.png",
  "cloud-solutions": "/service-images/cloud-solutions.png",
  "custom-software-development": "/service-images/custom-software-development.png",
  "ai-machine-learning": "/service-images/ai-machine-learning.png",
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
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1 hover:border-slate-200"
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
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
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
  );
}

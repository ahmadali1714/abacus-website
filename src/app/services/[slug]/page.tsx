"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { serviceDetails } from "@/constants/serviceDetails";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import CTABanner from "@/components/ui/CTABanner";
import Link from "next/link";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-slate-500 mb-8">The service you are looking for does not exist.</p>
        <Button href="/services">View All Services</Button>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6"
          >
            <Link href="/services" className="hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-600">{service.title}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            {service.heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Button href="/contact" size="lg">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="Overview" title="What We Offer" align="left" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            {service.overview}
          </motion.p>
        </div>
      </section>

      {/* Business Challenges */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Challenges"
            title="Business Challenges We Solve"
            description="Common pain points that our solution addresses."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.challenges.map((challenge, i) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{challenge.title}</h3>
                <p className="text-slate-500 leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="Our Solution" title="How We Solve It" align="left" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg leading-relaxed mb-10"
          >
            {service.solution}
          </motion.p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 bg-white rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Features"
            title="Key Features"
            description="Everything you need for a complete solution."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 bg-slate-50 rounded-xl border border-slate-100 text-center"
              >
                <span className="text-slate-700 font-medium text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            tag="Tech Stack"
            title="Technologies We Use"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {service.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Process"
            title="How We Deliver"
            description="A structured approach to ensure your project's success."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-8"
              >
                <div className="text-4xl font-bold text-slate-100 mb-3">0{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            tag="FAQs"
            title="Frequently Asked Questions"
          />
          <FAQ items={service.faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

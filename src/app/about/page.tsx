"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Handshake,
  Shield,
  Eye,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/ui/CTABanner";
import { coreValues, technologies, statistics } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Eye: <Eye className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
};

export default function AboutPage() {
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
            About NexaVion
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Building the Future of{" "}
            <span className="text-brand-gradient">
              Enterprise Software
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of passionate engineers, designers, and strategists dedicated to
            helping businesses thrive in the digital age through innovative software solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.value}
                <span className="text-brand-gradient">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                From a Vision to an Enterprise Partner
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Founded with a clear mission to bridge the gap between business needs and
                  technology capabilities, NexaVion has grown from a small team of dedicated
                  developers into a full-service enterprise software solutions company.
                </p>
                <p>
                  Over the past 15 years, we&apos;ve partnered with businesses across industries—from
                  startups to Fortune 500 companies—helping them navigate digital transformation
                  with confidence. Our approach combines deep technical expertise with a genuine
                  understanding of business challenges.
                </p>
                <p>
                  Today, we continue to push boundaries, investing in cutting-edge technologies
                  like AI, machine learning, and cloud-native architectures to deliver solutions
                  that aren&apos;t just modern, but future-ready.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-10 border border-slate-100"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-500" /> Our Mission
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    To empower businesses with innovative software solutions that drive growth,
                    efficiency, and competitive advantage in an increasingly digital world.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-500" /> Our Vision
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    To be the most trusted technology partner for enterprises worldwide, known
                    for delivering transformative digital solutions with unmatched quality and
                    reliability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every solution we deliver."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <Card key={value.title} delay={i * 0.1}>
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white mb-5">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Why NexaVion"
            title="Why Businesses Choose Us"
            description="We deliver more than software—we deliver business outcomes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "15+ years of enterprise software experience",
              "Full-stack capabilities from strategy to support",
              "Agile delivery with transparent communication",
              "Certified cloud architects and AI engineers",
              "Proven track record across multiple industries",
              "Commitment to long-term partnerships",
              "Enterprise-grade security and compliance",
              "Continuous innovation and technology adoption",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Expertise"
            title="Technology Stack"
            description="We work with the latest and most reliable technologies to build your solutions."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-sm font-medium text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 cursor-default"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

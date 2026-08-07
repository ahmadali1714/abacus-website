"use client";

import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Layers,
  Server,
  Users,
  Zap,
} from "lucide-react";

const clientLogos = [
  {
    src: "/client-logos/displays2go.png",
    alt: "Displays2Go",
    url: "https://displays2go.com.au/",
  },
  {
    src: "/client-logos/swirl-mark.png",
    alt: "SlipperSpot",
    url: "https://slipperspot.com/",
  },
  {
    src: "/client-logos/new-transparent-logo.png",
    alt: "Data Intuitions",
    url: "https://www.dataintuitions.com/",
  },
  {
    src: "/client-logos/fuzzy-feat-transparent.png",
    alt: "Fuzzy Feat",
    url: "https://www.amazon.com/stores/FuzzyFeat/page/1B6BCA9B-6536-4242-BA0C-4441CC5AE728?ref_=ast_bln",
  },
];

const featureHighlights = [
  {
    title: "Integrated ERP",
    description: "Streamline operations with connected systems.",
    icon: Server,
  },
  {
    title: "Smarter CRM",
    description: "Build stronger customer relationships.",
    icon: Users,
  },
  {
    title: "Scalable Growth",
    description: "Future-ready solutions for rapid expansion.",
    icon: Layers,
  },
];

const serviceCards = [
  {
    brand: "Umbraco",
    title: "Umbraco Solutions",
    accent: "#5c6bf0",
    items: [
      "Flexible CMS",
      "Custom Web Solutions",
      "Enterprise Integration",
      "Scalable Architecture",
    ],
    rotation: -6,
  },
  {
    brand: "Shopify",
    title: "Shopify Solutions",
    accent: "#20c997",
    items: [
      "Custom Store Development",
      "ERP Integration",
      "CRM Solutions",
      "Automation & Workflows",
    ],
    rotation: 6,
  },
];

const floatingNodes = [
  { label: "ERP / CRM", icon: Layers, top: "12%", left: "75%" },
  { label: "Database", icon: Database, top: "32%", left: "18%" },
  { label: "API", icon: Zap, top: "70%", left: "28%" },
  { label: "Users", icon: Users, top: "18%", left: "10%" },
  { label: "Cloud", icon: Cloud, top: "78%", left: "72%" },
];

const entrance: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const listVariants: Variants = {
  hover: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { scale: 1 },
  hover: {
    scale: [1, 1.08, 1],
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,rgba(107,140,255,0.16),transparent_40%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,248,255,0.95),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={entrance}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Digital Solutions. Smarter Operations.
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={entrance}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-tight"
            >
              <span className="text-slate-950">Umbraco</span>{" "}
              <span className="text-emerald-700">& Shopify</span>
              <br />ERP & CRM Solutions That Scale With You
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={entrance}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 text-lg leading-8 text-slate-600 max-w-xl"
            >
              We combine the power of Umbraco CMS and Shopify with smart ERP & CRM solutions to streamline operations, enhance customer relationships, and drive sustainable growth.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={entrance}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/services" size="lg" className="min-w-[180px]">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="min-w-[180px]">
                Talk to an Expert
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={entrance}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="grid gap-4 sm:grid-cols-3 mt-12"
            >
              {featureHighlights.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-[1.75rem] border border-slate-200/70 bg-white/85 p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="relative isolate mx-auto max-w-[720px] min-h-[560px]">
            <div className="absolute -left-16 top-8 h-[320px] w-[320px] rounded-full bg-cyan-100/85 blur-3xl" />
            <div className="absolute right-0 bottom-10 h-[260px] w-[260px] rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-slate-200/70 bg-white/90 shadow-[0_30px_120px_-70px_rgba(15,23,42,0.18)]" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 560" fill="none" aria-hidden="true">
              <path d="M 140 120 C 240 20, 360 20, 470 120" stroke="rgba(59,130,246,0.18)" strokeWidth="1.5" strokeDasharray="5 10" />
              <path d="M 90 300 C 170 360, 260 320, 350 380" stroke="rgba(16,185,129,0.16)" strokeWidth="1.5" strokeDasharray="5 10" />
              <path d="M 460 210 C 520 230, 560 255, 600 280" stroke="rgba(148,163,184,0.18)" strokeWidth="1.5" strokeDasharray="5 10" />
            </svg>

            {floatingNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -6, 0] }}
                  transition={{ duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: 0.12 + index * 0.1 }}
                  className="absolute flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/95 px-4 py-3 text-sm text-slate-700 shadow-sm"
                  style={{ top: node.top, left: node.left, transform: "translate(-50%, -50%)" }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-inner shadow-slate-100">
                    <Icon className="h-4 w-4" />
                  </span>
                  {node.label}
                </motion.div>
              );
            })}

            <motion.div
              whileHover={{ y: -10, scale: 1.02, rotate: -3 }}
              initial={{ opacity: 0, y: 28, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="group absolute left-8 top-14 w-[22rem] rounded-[2rem] border border-slate-200/70 bg-white/95 p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.2)] transition-transform duration-500"
            >
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.08, rotate: 6 }} className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#5c6bf0] text-white shadow-lg shadow-[#5c6bf0]/15">
                  U
                </motion.div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Umbraco</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Umbraco Solutions</h3>
                </div>
              </div>

              <motion.ul initial="hidden" whileHover="hover" variants={listVariants} className="mt-6 space-y-4">
                {serviceCards[0].items.map((item) => (
                  <motion.li key={item} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.02, rotate: 3 }}
              initial={{ opacity: 0, y: 28, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group absolute right-8 bottom-16 w-[22rem] rounded-[2rem] border border-slate-200/70 bg-white/95 p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.18)] transition-transform duration-500"
            >
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.08, rotate: -6 }} className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/15">
                  S
                </motion.div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Shopify</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Shopify Solutions</h3>
                </div>
              </div>

              <motion.ul initial="hidden" whileHover="hover" variants={listVariants} className="mt-6 space-y-4">
                {serviceCards[1].items.map((item) => (
                  <motion.li key={item} variants={itemVariants} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="mt-16 border-t border-slate-200/70 pt-12"
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400">
            Trusted by growing businesses
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 items-center">
            {clientLogos.map((logo) => (
              <a
                key={logo.src}
                href={logo.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-3 transition duration-200 hover:opacity-80"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 max-w-[140px] object-contain filter grayscale brightness-0"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

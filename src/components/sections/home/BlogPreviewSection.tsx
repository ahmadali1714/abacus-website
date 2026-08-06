"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const previewBlogs = [
  {
    slug: "digital-transformation-2025",
    title: "The Complete Guide to Digital Transformation in 2025",
    excerpt: "Discover the key strategies and technologies driving successful digital transformation initiatives across industries.",
    category: "Digital Transformation",
    date: "Jan 15, 2025",
    readingTime: 8,
  },
  {
    slug: "ai-enterprise-applications",
    title: "How AI is Revolutionizing Enterprise Applications",
    excerpt: "From predictive analytics to intelligent automation, learn how AI is reshaping the enterprise software landscape.",
    category: "AI / ML",
    date: "Jan 10, 2025",
    readingTime: 6,
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration: Best Practices for Enterprise Success",
    excerpt: "A comprehensive guide to planning and executing a successful cloud migration strategy for your organization.",
    category: "Cloud",
    date: "Jan 5, 2025",
    readingTime: 7,
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Latest Insights"
          title="From Our Blog"
          description="Stay updated with the latest trends, insights, and best practices in enterprise technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {previewBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-200">{blog.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-1 group-hover:text-emerald-600 transition-colors">
                    {blog.title}
                    <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{blog.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/blogs" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}

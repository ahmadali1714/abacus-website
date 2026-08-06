"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import { getBlogBySlug, getRelatedBlogs, blogEntries } from "@/lib/blogData";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-500 mb-8">The article you are looking for does not exist.</p>
        <Button href="/blogs">View All Articles</Button>
      </section>
    );
  }

  const relatedBlogs = getRelatedBlogs(slug, blog.category);
  const otherBlogs =
    relatedBlogs.length > 0
      ? relatedBlogs
      : blogEntries.filter((b) => b.slug !== slug).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
        if (match) {
          elements.push(
            <li key={i} className="text-slate-600 leading-relaxed ml-4 mb-2">
              <strong className="text-slate-800">{match[1]}</strong>
              {match[2] ? `: ${match[2]}` : ""}
            </li>
          );
        }
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <li key={i} className="text-slate-600 leading-relaxed ml-4 mb-2">
            {trimmed.replace("- ", "")}
          </li>
        );
      } else if (/^\d+\.\s\*\*/.test(trimmed)) {
        const match = trimmed.match(/\d+\.\s\*\*(.+?)\*\*\s*(.*)/);
        if (match) {
          elements.push(
            <li key={i} className="text-slate-600 leading-relaxed ml-4 mb-2 list-decimal">
              <strong className="text-slate-800">{match[1]}</strong>
              {match[2] ? ` ${match[2]}` : ""}
            </li>
          );
        }
      } else if (trimmed === "") {
        elements.push(<div key={i} className="h-2" />);
      } else {
        elements.push(
          <p key={i} className="text-slate-600 leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
    });
    return elements;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {blog.author}
                {blog.authorRole && ` · ${blog.authorRole}`}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {blog.readingTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose-custom">{renderContent(blog.content)}</div>
        </motion.div>
      </section>

      {/* Related Articles */}
      {otherBlogs.length > 0 && (
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherBlogs.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blogs/${related.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-100 p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium mb-3">
                      {related.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors flex items-start gap-1">
                      {related.title}
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}

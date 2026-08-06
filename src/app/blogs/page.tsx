"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowUpRight } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import { blogEntries, getAllCategories } from "@/lib/blogData";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...getAllCategories()];

  const filteredBlogs = useMemo(() => {
    return blogEntries.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredBlogs = blogEntries.filter((b) => b.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-white overflow-hidden">
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
            Our Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Insights &{" "}
            <span className="text-brand-gradient">
              Perspectives
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Stay updated with the latest trends, best practices, and expert insights 
            in enterprise technology.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-6 pb-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-xl mx-auto mb-8"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 transition-all"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "All" && searchQuery === "" && featuredBlogs.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="group block bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium mb-4">
                      Featured · {blog.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{blog.author}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readingTime} min read
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
          </h2>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1"
                  >
                    <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-200">{blog.category}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                        <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors flex items-start gap-1">
                        {blog.title}
                        <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                        <span>{blog.author}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {blog.readingTime} min
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Want to Learn More?"
        description="Subscribe to our newsletter for the latest insights in enterprise technology."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}

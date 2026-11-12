"use client";

import Link from "next/link";
import { companyName } from "@/constants";
import { footerLinks } from "@/constants/navigation";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452H17.2V14.7c0-1.366-.025-3.123-1.902-3.123-1.903 0-2.194 1.487-2.194 3.02v5.856H9.02V9h3.108v1.56h.045c.434-.823 1.497-1.69 3.082-1.69 3.296 0 3.902 2.17 3.902 4.99v6.602zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM6.865 20.452H3.807V9h3.058v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .77 23.2 0 22.225 0z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/the-abacus-tech/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <img src="/logo.png" alt={`${companyName} logo`} className="w-9 h-9 rounded-lg object-contain" />
              <span className="text-xl font-bold tracking-tight">{companyName}</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              Enterprise software solutions that drive digital transformation. We partner with
              businesses to build scalable, intelligent, and future-ready technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noreferrer"}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all duration-200 hover:bg-slate-700 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

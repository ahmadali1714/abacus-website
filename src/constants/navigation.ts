import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Umbraco & Shopify Solutions", href: "/services/ecommerce-retail-solutions" },
    { label: "ERP Solutions", href: "/services/erp-solutions" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "AI / Machine Learning", href: "/services/ai-machine-learning" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blogs" },
  ],
};

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  gradient: string;
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  results: string[];
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole?: string;
  category: string;
  coverImage?: string;
  readingTime: number;
  featured: boolean;
  published: boolean;
  publishedAt: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

import { Statistic, Testimonial, ProcessStep, CaseStudy, CoreValue, Technology } from "@/types";

export const companyName = "Abacus";
export const companyTagline = "Enterprise Software Solutions";

export const statistics: Statistic[] = [
  { value: "200", suffix: "+", label: "Projects Delivered" },
  { value: "50", suffix: "+", label: "Enterprise Clients" },
  { value: "15", suffix: "+", label: "Years Experience" },
  { value: "99", suffix: "%", label: "Client Satisfaction" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "RetailMax Inc.",
    content: "NexaVion transformed our legacy systems into a modern, cloud-native platform. Their expertise in enterprise architecture and attention to detail exceeded our expectations. The result was a 40% improvement in operational efficiency.",
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "FinTech Global",
    content: "Working with NexaVion on our AI-powered analytics platform was a game-changer. They understood our vision from day one and delivered a solution that gives us a real competitive edge in the fintech space.",
    avatar: "JR",
  },
  {
    name: "Emily Chen",
    role: "VP of Engineering",
    company: "HealthSync",
    content: "The custom ERP system NexaVion built for us has unified our operations across 12 departments. Their agile approach kept us involved throughout, and the final product was exactly what we needed.",
    avatar: "EC",
  },
];

export const developmentProcess: ProcessStep[] = [
  { step: 1, title: "Discovery", description: "We dive deep into your business goals, challenges, and requirements to create a comprehensive project roadmap." },
  { step: 2, title: "Design", description: "Our designers craft intuitive user experiences and modern interfaces that align with your brand identity." },
  { step: 3, title: "Development", description: "Using agile methodologies, we build robust solutions with clean, maintainable code and regular progress updates." },
  { step: 4, title: "Testing", description: "Rigorous quality assurance ensures every feature works flawlessly across all devices and scenarios." },
  { step: 5, title: "Deployment", description: "Smooth, zero-downtime deployment with automated CI/CD pipelines and infrastructure setup." },
  { step: 6, title: "Support", description: "Ongoing maintenance, monitoring, and optimization to keep your solution performing at its best." },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "E-Commerce Platform Transformation",
    industry: "Retail",
    description: "Built a headless commerce platform for a major retailer, handling 10M+ monthly visitors with sub-second load times.",
    results: ["300% increase in online sales", "60% faster page loads", "99.99% uptime"],
    image: "/images/case-study-1.jpg",
  },
  {
    title: "AI-Powered Supply Chain",
    industry: "Manufacturing",
    description: "Developed an AI-driven demand forecasting system that reduced inventory costs and improved delivery accuracy.",
    results: ["25% reduction in inventory costs", "40% better demand accuracy", "2x faster order fulfillment"],
    image: "/images/case-study-2.jpg",
  },
  {
    title: "Cloud Migration for Finance",
    industry: "Financial Services",
    description: "Migrated a legacy banking platform to AWS with zero downtime, improving performance and reducing infrastructure costs.",
    results: ["50% reduction in IT costs", "3x performance improvement", "SOC 2 compliance achieved"],
    image: "/images/case-study-3.jpg",
  },
];

export const coreValues: CoreValue[] = [
  { title: "Innovation First", description: "We stay at the forefront of technology to deliver cutting-edge solutions.", icon: "Lightbulb" },
  { title: "Client Partnership", description: "We treat every client as a partner, invested in their long-term success.", icon: "Handshake" },
  { title: "Quality Driven", description: "We never compromise on code quality, performance, or user experience.", icon: "Shield" },
  { title: "Transparency", description: "Open communication and honest feedback throughout every project.", icon: "Eye" },
  { title: "Continuous Learning", description: "Our team continuously upskills to bring the latest innovations to your projects.", icon: "BookOpen" },
  { title: "Results Focused", description: "Every decision we make is driven by measurable business outcomes.", icon: "Target" },
];

export const technologies: Technology[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Elasticsearch", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "Terraform", category: "Cloud" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
];

export const contactFAQs = [
  { question: "What is your typical project timeline?", answer: "Project timelines vary based on scope and complexity. A typical web application takes 2-4 months, while enterprise-grade solutions may take 4-8 months. We provide detailed timelines after our discovery phase." },
  { question: "Do you offer ongoing support and maintenance?", answer: "Yes, we offer flexible support and maintenance packages. These include bug fixes, performance optimization, security updates, and feature enhancements to keep your solution running smoothly." },
  { question: "What industries do you serve?", answer: "We serve a wide range of industries including retail, finance, healthcare, manufacturing, logistics, education, and more. Our team adapts to your industry's specific requirements and compliance needs." },
  { question: "How do you handle project communication?", answer: "We use agile methodologies with regular sprint reviews, daily standups, and dedicated project managers. You'll have full visibility into progress through our project management tools." },
  { question: "Can you work with our existing technology stack?", answer: "Absolutely. We're experienced in a wide range of technologies and can integrate with or build upon your existing systems. We also advise on when modernization might be beneficial." },
];

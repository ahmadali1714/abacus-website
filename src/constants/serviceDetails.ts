export interface ServiceDetail {
  slug: string;
  title: string;
  heroSubtitle: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solution: string;
  benefits: string[];
  features: string[];
  technologies: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "ecommerce-retail-solutions": {
    slug: "ecommerce-retail-solutions",
    title: "Umbraco & Shopify Solutions",
    heroSubtitle: "Umbraco & Shopify: ERP-ready commerce and flexible content management",
    overview:
      "We combine Umbraco's flexible content platform with Shopify's robust commerce engine to deliver enterprise-grade storefronts and integrated digital experiences. Our solutions provide headless commerce, CMS-driven product content, and deep ERP/CRM integration so you can sell smarter and scale faster.",
    challenges: [
      { title: "Siloed Content & Commerce", description: "Separated CMS and commerce systems create duplicated effort and inconsistent experiences." },
      { title: "Complex Integrations", description: "Connecting product, inventory, order, and customer systems across platforms is challenging." },
      { title: "Scalability & Performance", description: "High traffic events and catalog growth can expose platform limitations." },
      { title: "Globalization & Compliance", description: "Multi-currency, localization, and regional compliance add complexity to international rollouts." },
    ],
    solution:
      "Our Umbraco + Shopify approach gives you the best of both worlds: editorial flexibility for marketing-led experiences and a battle-tested commerce platform for checkout, payments, and order processing. We design a composable architecture—headless storefronts, API-first integrations, and ERP/CRM connectors—so your commerce ecosystem grows with your business.",
    benefits: [
      "Unified content and commerce workflows",
      "Faster time-to-market for campaigns",
      "Seamless ERP & CRM integration",
      "Improved conversion through tailored product experiences",
      "Scalable infrastructure for peak demand",
      "Global-ready commerce and localization",
    ],
    features: [
      "Headless Shopify storefronts with Next.js",
      "Umbraco-driven product and marketing content",
      "Checkout and payment gateway integrations",
      "Inventory & order synchronization with ERP",
      "Personalization and A/B testing",
      "Multi-currency and multi-language support",
      "Analytics and conversion optimization",
      "Automation for promotions and workflows",
    ],
    technologies: ["Umbraco", "Shopify", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "GraphQL"],
    process: [
      { step: 1, title: "Discovery & Commerce Strategy", description: "Aligning business goals, channels, and platform strategy across Umbraco and Shopify." },
      { step: 2, title: "Content & UX Design", description: "Design content-first experiences driven by the CMS and optimized for conversion." },
      { step: 3, title: "Composable Development", description: "Build headless storefronts and API integrations with extensibility in mind." },
      { step: 4, title: "Systems Integration", description: "Connect Shopify, Umbraco, ERP, CRM, and logistics systems for end-to-end operations." },
      { step: 5, title: "Performance & QA", description: "Load testing, security reviews, and regression testing for enterprise readiness." },
      { step: 6, title: "Launch, Monitor & Iterate", description: "Launch with monitoring, run experiments, and iterate on growth opportunities." },
    ],
    faqs: [
      { question: "Why use Umbraco with Shopify?", answer: "Umbraco provides editorial control for complex content while Shopify handles secure, PCI-compliant commerce — together they enable rich commerce experiences with enterprise integrations." },
      { question: "Can you migrate our existing store to this architecture?", answer: "Yes — we migrate catalog, orders, and customer data and modernize frontends for improved performance and SEO." },
      { question: "How do you handle inventory sync with ERP?", answer: "We build reliable synchronization layers with idempotent APIs, webhooks, and batch reconciliation to keep stock accurate across channels." },
      { question: "Is this approach suitable for B2B and B2C?", answer: "Absolutely. The composable architecture supports both B2B pricing/catalogs and rich B2C experiences." },
    ],
  },
  "erp-solutions": {
    slug: "erp-solutions",
    title: "ERP Solutions",
    heroSubtitle: "Unify your business operations with intelligent ERP systems",
    overview:
      "Our ERP solutions bring together all aspects of your business—finance, HR, procurement, manufacturing, and supply chain—into a single, intelligent platform. We implement, customize, and maintain ERP systems that eliminate data silos, automate workflows, and provide real-time visibility across your organization.",
    challenges: [
      { title: "Data Silos", description: "Disconnected departments lead to duplicated data and inconsistent reporting." },
      { title: "Manual Processes", description: "Time-consuming manual workflows create bottlenecks and increase errors." },
      { title: "Lack of Visibility", description: "Leaders can't make informed decisions without real-time operational data." },
      { title: "Scaling Difficulties", description: "Outdated systems can't keep pace with business growth and new requirements." },
    ],
    solution:
      "We implement modern cloud-based ERP systems tailored to your industry and business processes. Our solutions automate routine tasks, provide real-time dashboards, and scale seamlessly as your organization grows.",
    benefits: [
      "30% reduction in operational costs",
      "Real-time business intelligence",
      "Automated compliance and reporting",
      "Improved cross-department collaboration",
      "Scalable modular architecture",
      "Enhanced data security",
    ],
    features: [
      "Financial management and accounting",
      "Human resource management",
      "Supply chain management",
      "Inventory and warehouse management",
      "Project management",
      "CRM integration",
      "Business intelligence dashboards",
      "Workflow automation",
    ],
    technologies: ["SAP", "Microsoft Dynamics", "Python", "Node.js", "PostgreSQL", "Azure", "Power BI", "Docker"],
    process: [
      { step: 1, title: "Business Analysis", description: "Deep dive into your current processes, pain points, and requirements." },
      { step: 2, title: "Solution Design", description: "Architecting an ERP solution that fits your unique business needs." },
      { step: 3, title: "Configuration", description: "Setting up and customizing the platform to match your workflows." },
      { step: 4, title: "Data Migration", description: "Safely migrating your data from legacy systems with zero downtime." },
      { step: 5, title: "Training", description: "Comprehensive training programs for all user roles and departments." },
      { step: 6, title: "Go-Live & Support", description: "Phased rollout with dedicated support and continuous optimization." },
    ],
    faqs: [
      { question: "How long does an ERP implementation take?", answer: "Typical ERP implementations range from 6-12 months depending on scope and complexity." },
      { question: "Can the ERP integrate with our existing tools?", answer: "Yes, we build custom integrations with your existing software ecosystem." },
      { question: "Do you offer cloud-based ERP solutions?", answer: "We specialize in cloud-first ERP deployments that reduce infrastructure costs and improve accessibility." },
      { question: "What about data migration from legacy systems?", answer: "We have a proven data migration methodology that ensures data integrity and minimal disruption." },
    ],
  },
  "cloud-solutions": {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    heroSubtitle: "Transform your infrastructure with secure, scalable cloud solutions",
    overview:
      "We help businesses migrate to the cloud, optimize their cloud infrastructure, and build cloud-native applications. Our certified cloud architects design solutions across AWS, Azure, and Google Cloud that reduce costs, improve performance, and enhance security.",
    challenges: [
      { title: "High Infrastructure Costs", description: "On-premise servers are expensive to maintain, upgrade, and scale." },
      { title: "Security Concerns", description: "Protecting data and applications across distributed environments is challenging." },
      { title: "Migration Complexity", description: "Moving legacy applications to the cloud requires careful planning and execution." },
      { title: "Performance Optimization", description: "Ensuring consistent performance across global regions and varying loads." },
    ],
    solution:
      "Our cloud solutions provide end-to-end services from migration strategy to ongoing managed services. We design resilient, cost-optimized architectures that leverage the best of cloud computing while ensuring security and compliance.",
    benefits: [
      "Up to 50% reduction in infrastructure costs",
      "99.99% uptime guarantee",
      "Auto-scaling for traffic spikes",
      "Enhanced disaster recovery",
      "Global deployment capabilities",
      "Improved security posture",
    ],
    features: [
      "Cloud migration and modernization",
      "Infrastructure as Code (IaC)",
      "Containerization and orchestration",
      "Serverless architecture",
      "Cloud security and compliance",
      "Cost optimization and monitoring",
      "CI/CD pipeline setup",
      "Multi-cloud strategy",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Jenkins", "Ansible"],
    process: [
      { step: 1, title: "Assessment", description: "Evaluating your current infrastructure and identifying cloud opportunities." },
      { step: 2, title: "Strategy", description: "Creating a detailed migration roadmap and architecture plan." },
      { step: 3, title: "Migration", description: "Executing the migration with minimal disruption to operations." },
      { step: 4, title: "Optimization", description: "Fine-tuning performance, security, and cost configurations." },
      { step: 5, title: "Monitoring", description: "Setting up comprehensive monitoring and alerting systems." },
      { step: 6, title: "Managed Services", description: "Ongoing management, updates, and continuous improvement." },
    ],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "We recommend based on your specific needs. AWS, Azure, and GCP each have strengths for different use cases." },
      { question: "How do you ensure data security during migration?", answer: "We follow industry best practices including encryption, access controls, and compliance frameworks." },
      { question: "Can you manage our cloud infrastructure ongoing?", answer: "Yes, we offer managed cloud services with 24/7 monitoring and support." },
      { question: "What about hybrid cloud setups?", answer: "We design hybrid architectures that combine on-premise and cloud resources for optimal performance." },
    ],
  },
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    heroSubtitle: "Bespoke software solutions engineered for your business",
    overview:
      "We build custom software solutions from the ground up, designed specifically to solve your unique business challenges. Our agile development process ensures rapid delivery of high-quality software that evolves with your business needs.",
    challenges: [
      { title: "Off-the-Shelf Limitations", description: "Generic software doesn't address your specific workflows and processes." },
      { title: "Integration Gaps", description: "Existing tools don't communicate, creating data silos and inefficiencies." },
      { title: "Scalability Concerns", description: "Current solutions can't handle growing data volumes and user counts." },
      { title: "Competitive Pressure", description: "Without custom tools, it's hard to differentiate and gain market advantage." },
    ],
    solution:
      "Our custom software development service delivers tailor-made solutions built with modern technologies and best practices. We follow agile methodologies to ensure transparency, flexibility, and rapid delivery of working software.",
    benefits: [
      "Perfect fit for your business processes",
      "Complete ownership and control",
      "Scalable and maintainable architecture",
      "Competitive advantage through unique features",
      "Seamless integration with existing systems",
      "Long-term cost efficiency",
    ],
    features: [
      "Web application development",
      "Mobile application development",
      "API development and integration",
      "Database design and optimization",
      "Microservices architecture",
      "Real-time applications",
      "Progressive Web Apps (PWA)",
      "Legacy system modernization",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB", "GraphQL"],
    process: [
      { step: 1, title: "Requirements Gathering", description: "Understanding your vision, goals, and technical requirements." },
      { step: 2, title: "Architecture Design", description: "Designing a scalable, maintainable system architecture." },
      { step: 3, title: "Agile Development", description: "Iterative development with regular demos and feedback loops." },
      { step: 4, title: "Quality Assurance", description: "Comprehensive testing including unit, integration, and E2E tests." },
      { step: 5, title: "Deployment", description: "Automated CI/CD pipeline setup and production deployment." },
      { step: 6, title: "Maintenance", description: "Ongoing support, updates, and feature enhancements." },
    ],
    faqs: [
      { question: "How do you estimate project timelines?", answer: "We use story points and velocity-based estimation after an initial discovery phase." },
      { question: "What development methodology do you follow?", answer: "We follow Agile Scrum with 2-week sprints, daily standups, and regular sprint reviews." },
      { question: "Can you work with our existing development team?", answer: "Yes, we offer team augmentation and can seamlessly integrate with your existing workflows." },
      { question: "Do you provide source code ownership?", answer: "Absolutely. You own 100% of the source code and all intellectual property we develop." },
    ],
  },
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI / Machine Learning",
    heroSubtitle: "Intelligent solutions that learn, adapt, and transform your business",
    overview:
      "We develop AI and machine learning solutions that automate complex tasks, uncover hidden patterns in data, and create intelligent experiences. From predictive analytics to natural language processing, we help businesses leverage the power of AI to gain a competitive edge.",
    challenges: [
      { title: "Data Overload", description: "Massive amounts of data but no tools to extract actionable insights." },
      { title: "Manual Decision Making", description: "Critical decisions are slow because they rely on human analysis alone." },
      { title: "Customer Experience", description: "Unable to deliver personalized experiences at scale." },
      { title: "Process Inefficiency", description: "Repetitive tasks consume valuable time that could be spent on innovation." },
    ],
    solution:
      "Our AI/ML solutions combine cutting-edge algorithms with deep domain expertise. We build custom models trained on your data, deploy them in production-ready environments, and continuously improve their accuracy and performance.",
    benefits: [
      "Data-driven decision making",
      "Automated routine processes",
      "Personalized customer experiences",
      "Predictive maintenance and analytics",
      "Fraud detection and prevention",
      "Continuous learning and improvement",
    ],
    features: [
      "Predictive analytics",
      "Natural Language Processing (NLP)",
      "Computer vision",
      "Recommendation engines",
      "Chatbots and virtual assistants",
      "Anomaly detection",
      "Sentiment analysis",
      "Automated data processing",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "LangChain", "AWS SageMaker", "Hugging Face"],
    process: [
      { step: 1, title: "Data Assessment", description: "Evaluating your data quality, quantity, and AI readiness." },
      { step: 2, title: "Use Case Definition", description: "Identifying the highest-impact AI opportunities for your business." },
      { step: 3, title: "Model Development", description: "Building and training custom models on your data." },
      { step: 4, title: "Validation", description: "Rigorous testing and validation to ensure accuracy and reliability." },
      { step: 5, title: "Deployment", description: "Production deployment with monitoring and scaling capabilities." },
      { step: 6, title: "Optimization", description: "Continuous model improvement based on real-world performance." },
    ],
    faqs: [
      { question: "Do we need a large dataset to start with AI?", answer: "Not necessarily. We can work with various data sizes and use techniques like transfer learning for smaller datasets." },
      { question: "How do you ensure AI model accuracy?", answer: "We use cross-validation, A/B testing, and continuous monitoring to maintain high accuracy." },
      { question: "Can AI integrate with our existing systems?", answer: "Yes, we build AI solutions as APIs that integrate seamlessly with your existing infrastructure." },
      { question: "What about data privacy and security?", answer: "We follow strict data privacy protocols and can deploy models on-premise if required." },
    ],
  },
};

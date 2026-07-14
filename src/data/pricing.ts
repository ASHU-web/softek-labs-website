import { Box, Users, Search, ScanLine, LayoutTemplate, Globe, Server, Cloud, Code2, Database, LifeBuoy, Zap } from "lucide-react";

export const individualModules = [
  {
    id: "inventory",
    name: "Inventory Management",
    icon: Box,
    shortDescription: "Manage stock, purchases, sales, transfers, adjustments, warehouses, and inventory reports from one dashboard.",
    setupFee: "50,000",
    isStartingFrom: true,
    monthlyPlan: "4,999",
    annualPlan: "49,999",
    features: [
      "Up to 5 users",
      "1 warehouse",
      "Up to 5,000 products",
      "Purchase and sales management",
      "Stock transfers and adjustments",
      "Low-stock alerts",
    ],
    expandableFeatures: [
      "Standard inventory reports",
      "Cloud hosting and automated backups",
      "Maintenance and technical support",
    ],
    additionalCosts: "Additional warehouse: Starting from ₹1,500/month",
    ctaText: "Get Inventory Software",
    formValue: "Inventory Management"
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users,
    shortDescription: "Manage leads, customers, follow-ups, sales pipelines, tasks, quotations, and team performance.",
    setupFee: "50,000",
    isStartingFrom: true,
    monthlyPlan: "4,999",
    annualPlan: "49,999",
    features: [
      "Up to 5 users",
      "Up to 10,000 leads and customers",
      "Custom sales pipeline",
      "Follow-up reminders",
      "Customer activity history",
      "Task assignment",
    ],
    expandableFeatures: [
      "Basic reports and dashboards",
      "Cloud hosting and automated backups",
      "Maintenance and technical support",
    ],
    additionalCosts: "Additional user: Starting from ₹400/user/month",
    ctaText: "Get CRM Software",
    formValue: "CRM"
  },
  {
    id: "staff",
    name: "Staff Management and Face Attendance",
    icon: ScanLine,
    shortDescription: "Manage employee attendance, shifts, leave, locations, field staff, and face-recognition attendance.",
    setupFee: "1,00,000",
    isStartingFrom: true,
    monthlyPlan: "6,999",
    annualPlan: "69,999",
    features: [
      "Up to 50 employees",
      "1 office or work location",
      "Face-recognition attendance",
      "Employee management",
      "Shift management",
      "Leave management",
    ],
    expandableFeatures: [
      "Late-entry and early-exit records",
      "Attendance reports",
      "Role-based permissions",
      "Cloud hosting and automated backups",
      "Maintenance and technical support",
    ],
    additionalCosts: "Additional employees: Starting from ₹50/employee/month. Note: Hardware is charged separately.",
    ctaText: "Get Attendance Software",
    formValue: "Staff Management and Attendance"
  },
  {
    id: "barcode",
    name: "Barcode and Product Traceability",
    icon: Search,
    shortDescription: "Generate barcodes or QR codes, track products, maintain movement history, and provide public product verification.",
    setupFee: "60,000",
    isStartingFrom: true,
    monthlyPlan: "3,999",
    annualPlan: "39,999",
    features: [
      "Up to 5,000 barcode records per month",
      "Barcode and QR-code generation",
      "Printable barcode labels",
      "Product registration",
      "Public product verification page",
      "Scan history",
    ],
    expandableFeatures: [
      "Dispatch and movement tracking",
      "Standard traceability reports",
      "Cloud hosting and automated backups",
      "Maintenance and technical support",
    ],
    additionalCosts: "",
    ctaText: "Get Traceability Software",
    formValue: "Barcode & QR"
  },
  {
    id: "static_website",
    name: "Static Business Website",
    icon: Globe,
    shortDescription: "A fast, mobile-responsive business website for presenting your company, products, services, projects, and contact information.",
    setupFee: "15,000",
    isStartingFrom: true,
    monthlyPlan: "999", // Added monthly option for uniform pricing
    annualPlan: "9,999",
    features: [
      "Up to 7 standard pages",
      "Mobile-responsive design",
      "Contact form",
      "WhatsApp enquiry button",
      "Basic SEO setup",
      "SSL certificate",
    ],
    expandableFeatures: [
      "Hosting",
      "Security updates",
      "Minor content support",
    ],
    additionalCosts: "",
    ctaText: "Get Business Website",
    formValue: "Static Website"
  },
  {
    id: "dynamic_website",
    name: "Dynamic Website with Admin Panel",
    icon: LayoutTemplate,
    shortDescription: "A dynamic website with an admin panel for managing products, services, blogs, enquiries, projects, and website content.",
    setupFee: "50,000",
    isStartingFrom: true,
    monthlyPlan: "2,499",
    annualPlan: "24,999",
    features: [
      "Admin dashboard",
      "Product or service management",
      "Enquiry management",
      "Content management",
      "Mobile-responsive frontend",
      "Basic SEO setup",
    ],
    expandableFeatures: [
      "Cloud hosting and backups",
      "Maintenance and technical support",
    ],
    additionalCosts: "",
    ctaText: "Get Dynamic Website",
    formValue: "Dynamic Website"
  }
];

export const businessSuite = {
  name: "Complete Business Suite",
  badge: "Best Value",
  shortDescription: "A connected software ecosystem for businesses that want to manage sales, inventory, staff, attendance, traceability, and their website from one platform.",
  setupFee: "3,50,000",
  isStartingFrom: true,
  monthlyPlan: "14,999",
  annualPlan: "1,49,999",
  features: [
    "Inventory Management",
    "CRM",
    "Staff Management & Face Attendance",
    "Barcode and Product Traceability",
    "Dynamic Business Website",
    "Shared customer and product database",
  ],
  expandableFeatures: [
    "Centralised user management",
    "Role-based permissions",
    "Unified reporting dashboard",
    "Cloud hosting",
    "Automated backups",
    "Maintenance and security updates",
    "Priority technical support",
  ],
  comparison: {
    individualValue: "₹4,15,000+",
    bundleSetup: "Starting from ₹3,50,000"
  },
  ctaText: "Book a Suite Consultation",
  secondaryCtaText: "Build My Own Bundle",
  formValue: "Complete Business Suite"
};

export const enterpriseCustom = {
  name: "Enterprise and Fully Custom Software",
  shortDescription: "For businesses requiring complex workflows, multi-company operations, mobile applications, integrations, advanced approvals, or complete source-code ownership.",
  setupFee: "6,00,000",
  isStartingFrom: true,
  monthlyPlan: "25,000",
  features: [
    "Multi-company operations",
    "Multiple warehouses and branches",
    "Custom mobile applications",
    "Advanced role and approval systems",
    "Accounting or ERP integrations",
    "WhatsApp automation",
  ],
  expandableFeatures: [
    "Custom APIs",
    "Advanced reporting and analytics",
    "Dedicated deployment environment",
    "Priority SLA-based support",
    "Source-code ownership options",
    "Client-owned cloud deployment",
  ],
  ctaText: "Discuss Enterprise Requirements",
  formValue: "Completely Custom Requirement"
};

export const managedPlanIncludes = [
  { icon: Cloud, title: "Managed cloud hosting" },
  { icon: Database, title: "Automated database backups" },
  { icon: LifeBuoy, title: "Security & software updates" },
  { icon: Server, title: "Server & uptime monitoring" },
  { icon: Code2, title: "Bug fixing" },
  { icon: Zap, title: "Standard product improvements" },
];

export const additionalCosts = [
  "New modules",
  "Major workflow changes",
  "Mobile application development",
  "Third-party API charges",
  "WhatsApp Business API charges",
  "SMS and email usage",
  "AI model or API usage",
  "Biometric or camera hardware",
  "On-site visits",
  "Bulk data cleaning",
  "Historical data migration",
  "Custom integrations",
  "Custom reports beyond the included scope"
];

export const pricingFaqs = [
  {
    q: "Can I purchase only one module?",
    a: "Yes. Every Softek Labs module can work independently. You can begin with CRM, inventory, attendance, barcode traceability, or a website and add other modules later."
  },
  {
    q: "Is the setup fee paid every year?",
    a: "No. The setup and customisation fee is normally a one-time charge. It covers system configuration, workflow customisation, branding, deployment, and initial training."
  },
  {
    q: "What does the managed software plan include?",
    a: "It includes cloud hosting, automated backups, software maintenance, security updates, bug fixes, monitoring, and standard technical support."
  },
  {
    q: "Can I add more users or warehouses later?",
    a: "Yes. Users, warehouses, locations, employees, and usage limits can be increased according to your business requirements."
  },
  {
    q: "Are custom features included?",
    a: "Standard configuration and agreed customisation are included in the initial scope. Major features, new modules, or additional integrations are quoted separately."
  },
  {
    q: "Do I receive the source code?",
    a: "Source-code ownership is not included in standard managed plans. It can be provided under a separate enterprise or full-custom-development agreement."
  },
  {
    q: "What happens if I discontinue the subscription?",
    a: "We provide an option to export your business data. Access, hosting, maintenance, and support will stop after the agreed subscription period. Reactivation may require a technical audit and upgrade charge depending on the period of inactivity."
  },
  {
    q: "Can I switch from monthly to annual billing?",
    a: "Yes. Customers can upgrade to annual billing at the next billing cycle and receive the applicable annual-plan benefit."
  }
];

import {
  Award,
  BarChart3,
  Brain,
  CheckCircle,
  Cloud,
  Code,
  Coffee,
  Cpu,
  CreditCard,
  Crown,
  Database,
  Globe,
  Headphones,
  Laptop,
  Layers,
  Package,
  Palette,
  Receipt,
  Rocket,
  Settings,
  Shield,
  Shirt,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

// Admin Dashboard Stats

export const stats = [
  {
    name: "Total Users",
    value: "12,847",
    change: "+12%",
    icon: Users,
    color: "from-cosmic-600 to-nebula-600",
  },
  {
    name: "Active Sessions",
    value: "3,421",
    change: "+8%",
    icon: TrendingUp,
    color: "from-nebula-600 to-stardust-600",
  },
  {
    name: "System Health",
    value: "99.9%",
    change: "+0.1%",
    icon: CheckCircle,
    color: "from-stardust-600 to-cosmic-600",
  },
  {
    name: "Revenue",
    value: "$47,329",
    change: "+23%",
    icon: BarChart3,
    color: "from-cosmic-600 to-stardust-600",
  },
];

export const recentUsers = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "User",
    status: "Active",
    joined: "2 hours ago",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    status: "Active",
    joined: "5 hours ago",
  },
  {
    name: "Carol Davis",
    email: "carol@example.com",
    role: "Admin",
    status: "Active",
    joined: "1 day ago",
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    role: "User",
    status: "Inactive",
    joined: "2 days ago",
  },
];

export const systemAlerts = [
  {
    type: "warning",
    message: "High CPU usage detected on server-2",
    time: "5 minutes ago",
  },
  {
    type: "info",
    message: "Database backup completed successfully",
    time: "1 hour ago",
  },
  {
    type: "error",
    message: "Failed login attempts from suspicious IP",
    time: "2 hours ago",
  },
];

// User Dashboard Stats

export const usersStats = [
  {
    name: "Projects",
    value: "12",
    icon: Rocket,
    color: "from-cosmic-600 to-nebula-600",
  },
  {
    name: "Team Members",
    value: "8",
    icon: Users,
    color: "from-nebula-600 to-stardust-600",
  },
  {
    name: "Tasks Completed",
    value: "247",
    icon: Star,
    color: "from-stardust-600 to-cosmic-600",
  },
  {
    name: "Performance",
    value: "98%",
    icon: Zap,
    color: "from-cosmic-600 to-stardust-600",
  },
];

export const recentProjects = [
  { name: "Cosmic Website", status: "Active", progress: 85, team: 4 },
  { name: "Mobile App", status: "In Review", progress: 100, team: 3 },
  { name: "API Integration", status: "Planning", progress: 15, team: 2 },
];

export const currentProducts = [
  {
    id: "1",
    productId: "1",
    name: "Cosmic Explorer T-Shirt",
    description: "Premium cotton tee with holographic cosmic design",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "apparel",
    selectedSize: "L",
    selectedColor: "Black",
    quantity: 2,
    inStock: true,
    maxQuantity: 10,
  },
  {
    id: "2",
    productId: "2",
    name: "Nebula Hoodie",
    description: "Ultra-soft fleece hoodie with embroidered nebula pattern",
    price: 59.99,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
    category: "apparel",
    selectedSize: "M",
    selectedColor: "Purple",
    quantity: 1,
    inStock: true,
    maxQuantity: 5,
  },
  {
    id: "3",
    productId: "3",
    name: "Stardust Coffee Mug",
    description: "Heat-reactive ceramic mug with constellation patterns",
    price: 19.99,
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg",
    category: "accessories",
    selectedSize: "11oz",
    selectedColor: "Black",
    quantity: 3,
    inStock: true,
    maxQuantity: 20,
  },
  {
    id: "4",
    productId: "8",
    name: "Cosmic Phone Case",
    description: "Protective phone case with cosmic design",
    price: 16.99,
    originalPrice: 24.99,
    image: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg",
    category: "tech",
    selectedSize: "iPhone 14/15",
    selectedColor: "Galaxy",
    quantity: 1,
    inStock: false,
    maxQuantity: 0,
  },
];

export const promoCodes = [
  {
    code: "COSMIC20",
    discount: 20,
    type: "percentage",
    description: "20% off your order",
  },
  {
    code: "SPACE10",
    discount: 10,
    type: "fixed",
    description: "$10 off your order",
  },
  {
    code: "NEWUSER",
    discount: 15,
    type: "percentage",
    description: "15% off for new customers",
  },
  {
    code: "FREESHIP",
    discount: 0,
    type: "fixed",
    description: "Free shipping",
  },
];

export const heroFeatures = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description:
      "Experience blazing-fast load times with our optimized infrastructure and global CDN network.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols to keep your data safe and compliant.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamless real-time collaboration tools that bring your team together across the universe.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const coreFeatures = [
  {
    category: "Development",
    icon: Code,
    features: [
      {
        name: "Advanced Code Editor",
        description:
          "Syntax highlighting, auto-completion, and intelligent code suggestions.",
        icon: Code,
      },
      {
        name: "Version Control",
        description:
          "Built-in Git integration with branch management and merge conflict resolution.",
        icon: Layers,
      },
      {
        name: "API Management",
        description:
          "Create, test, and deploy APIs with comprehensive documentation tools.",
        icon: Database,
      },
      {
        name: "Real-time Preview",
        description:
          "See your changes instantly with hot reload and live preview capabilities.",
        icon: Smartphone,
      },
    ],
  },
  {
    category: "Analytics & Insights",
    icon: BarChart3,
    features: [
      {
        name: "Advanced Analytics",
        description:
          "Deep insights into user behavior, performance metrics, and business intelligence.",
        icon: BarChart3,
      },
      {
        name: "Custom Dashboards",
        description:
          "Build personalized dashboards with drag-and-drop widgets and real-time data.",
        icon: Target,
      },
      {
        name: "Performance Monitoring",
        description:
          "Track application performance, uptime, and user experience metrics.",
        icon: Cpu,
      },
      {
        name: "Predictive Analytics",
        description:
          "AI-powered insights to predict trends and optimize your business strategy.",
        icon: Brain,
      },
    ],
  },
  {
    category: "Design & Creativity",
    icon: Palette,
    features: [
      {
        name: "Design System",
        description:
          "Comprehensive component library with customizable themes and styles.",
        icon: Palette,
      },
      {
        name: "Asset Management",
        description:
          "Organize, optimize, and deploy your digital assets with intelligent compression.",
        icon: Globe,
      },
      {
        name: "Template Library",
        description:
          "Access hundreds of professionally designed templates for rapid prototyping.",
        icon: Star,
      },
      {
        name: "Brand Guidelines",
        description:
          "Maintain consistent branding across all your projects and team members.",
        icon: Award,
      },
    ],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    features: [
      {
        name: "Global CDN",
        description:
          "Lightning-fast content delivery with edge locations worldwide.",
        icon: Globe,
      },
      {
        name: "Auto Scaling",
        description:
          "Automatically scale resources based on demand with zero downtime.",
        icon: Infinity,
      },
      {
        name: "Database Management",
        description:
          "Managed databases with automatic backups, scaling, and optimization.",
        icon: Database,
      },
      {
        name: "Workflow Automation",
        description:
          "Automate repetitive tasks with visual workflow builder and triggers.",
        icon: Workflow,
      },
    ],
  },
];

export const enterpriseFeatures = [
  {
    title: "Advanced Security",
    description:
      "SOC 2 compliance, SSO integration, and advanced threat protection.",
    icon: Lock,
    features: [
      "Multi-factor Authentication",
      "Role-based Access Control",
      "Audit Logs",
      "Data Encryption",
    ],
  },
  {
    title: "Priority Support",
    description:
      "24/7 dedicated support with guaranteed response times and expert assistance.",
    icon: Headphones,
    features: [
      "Dedicated Account Manager",
      "Phone Support",
      "Custom Training",
      "SLA Guarantees",
    ],
  },
  {
    title: "Custom Integrations",
    description:
      "Seamlessly connect with your existing tools and enterprise systems.",
    icon: Layers,
    features: [
      "API Webhooks",
      "Custom Connectors",
      "Enterprise SSO",
      "Data Migration",
    ],
  },
];

export const productStats = [
  { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { value: "<100ms", label: "Average Response Time", icon: Zap },
  { value: "150+", label: "Integrations Available", icon: Layers },
  { value: "24/7", label: "Expert Support", icon: Headphones },
];

export const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    icon: Rocket,
    price: {
      monthly: 9,
      yearly: 90,
    },
    popular: false,
    features: [
      { name: "5 Projects", included: true },
      { name: "10GB Storage", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Community Support", included: true },
      { name: "SSL Certificates", included: true },
      { name: "Basic Templates", included: true },
      { name: "API Access", included: false },
      { name: "Custom Domains", included: false },
      { name: "Priority Support", included: false },
      { name: "Advanced Security", included: false },
      { name: "Team Collaboration", included: false },
      { name: "White-label Options", included: false },
    ],
    cta: "Start Free Trial",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Pro",
    description: "Ideal for growing teams and businesses",
    icon: Star,
    price: {
      monthly: 29,
      yearly: 290,
    },
    popular: true,
    features: [
      { name: "Unlimited Projects", included: true },
      { name: "100GB Storage", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Priority Support", included: true },
      { name: "SSL Certificates", included: true },
      { name: "Premium Templates", included: true },
      { name: "API Access", included: true },
      { name: "Custom Domains", included: true },
      { name: "Team Collaboration", included: true },
      { name: "Advanced Security", included: false },
      { name: "White-label Options", included: false },
      { name: "Dedicated Manager", included: false },
    ],
    cta: "Start Pro Trial",
    gradient: "from-cosmic-600 to-nebula-600",
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    icon: Crown,
    price: {
      monthly: 99,
      yearly: 990,
    },
    popular: false,
    features: [
      { name: "Unlimited Everything", included: true },
      { name: "1TB Storage", included: true },
      { name: "Enterprise Analytics", included: true },
      { name: "24/7 Dedicated Support", included: true },
      { name: "SSL Certificates", included: true },
      { name: "Custom Templates", included: true },
      { name: "Full API Access", included: true },
      { name: "Unlimited Domains", included: true },
      { name: "Advanced Collaboration", included: true },
      { name: "Enterprise Security", included: true },
      { name: "White-label Options", included: true },
      { name: "Dedicated Manager", included: true },
    ],
    cta: "Contact Sales",
    gradient: "from-purple-600 to-pink-600",
  },
];

export const addOns = [
  {
    name: "Extra Storage",
    description: "50GB additional storage space",
    price: 19,
    icon: Database,
    features: [
      "50GB Additional Storage",
      "Automatic Backups",
      "CDN Optimization",
    ],
  },
  {
    name: "Premium Support",
    description: "Priority support with faster response times",
    price: 39,
    icon: Headphones,
    features: ["Priority Queue", "Phone Support", "Dedicated Slack Channel"],
  },
  {
    name: "AI Assistant",
    description: "Advanced AI-powered development assistance",
    price: 49,
    icon: Brain,
    features: ["Code Generation", "Smart Suggestions", "Automated Testing"],
  },
  {
    name: "Advanced Security",
    description: "Enhanced security features and compliance",
    price: 59,
    icon: Shield,
    features: ["SOC 2 Compliance", "Advanced Threat Protection", "Audit Logs"],
  },
];

export const pricingEnterpriseFeatures = [
  {
    title: "Custom Integrations",
    description:
      "Seamlessly connect with your existing enterprise tools and workflows.",
    icon: Globe,
  },
  {
    title: "Dedicated Infrastructure",
    description:
      "Private cloud deployment with guaranteed performance and uptime.",
    icon: Cloud,
  },
  {
    title: "Advanced Analytics",
    description:
      "Enterprise-grade analytics with custom reporting and insights.",
    icon: BarChart3,
  },
  {
    title: "Compliance & Security",
    description:
      "Meet industry standards with SOC 2, GDPR, and HIPAA compliance.",
    icon: Lock,
  },
];

export const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and for Enterprise customers, we also support bank transfers and purchase orders.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial period.",
  },
  {
    question: "What happens if I exceed my storage limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional storage add-ons.",
  },
  {
    question:
      "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Contact our sales team for details.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.",
  },
];

export const products = [
  {
    id: "1",
    name: "Cosmic Explorer T-Shirt",
    description:
      "Premium cotton tee with holographic cosmic design that shifts colors in different lighting.",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    category: "apparel",
    rating: 4.8,
    reviews: 124,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#1e3a8a" },
      { name: "Purple", value: "#7c3aed" },
      { name: "White", value: "#ffffff" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
    badge: "Best Seller",
    requiresSize: true,
    requiresColor: true,
  },
  {
    id: "2",
    name: "Nebula Hoodie",
    description:
      "Ultra-soft fleece hoodie with embroidered nebula constellation pattern.",
    price: 59.99,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
    category: "apparel",
    rating: 4.9,
    reviews: 89,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Charcoal", value: "#374151" },
      { name: "Purple", value: "#7c3aed" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
    badge: "New",
    requiresSize: true,
    requiresColor: true,
  },
  {
    id: "3",
    name: "Stardust Coffee Mug",
    description:
      "Heat-reactive ceramic mug that reveals hidden constellation patterns when hot.",
    price: 19.99,
    image: "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg",
    category: "accessories",
    rating: 4.7,
    reviews: 203,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#ffffff" },
      { name: "Blue", value: "#3b82f6" },
    ],
    sizes: ["11oz", "15oz"],
    inStock: true,
    featured: false,
    requiresSize: true,
    requiresColor: true,
  },
  {
    id: "4",
    name: "Cosmic Laptop Sleeve",
    description:
      "Padded laptop sleeve with water-resistant cosmic print design.",
    price: 34.99,
    originalPrice: 44.99,
    image:
      "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg",
    category: "tech",
    rating: 4.6,
    reviews: 67,
    colors: [
      { name: "Galaxy", value: "#4c1d95" },
      { name: "Nebula", value: "#7c3aed" },
      { name: "Stardust", value: "#3b82f6" },
    ],
    sizes: ['13"', '15"', '17"'],
    inStock: true,
    featured: false,
    badge: "Sale",
    requiresSize: true,
    requiresColor: true,
  },
  {
    id: "5",
    name: "Galaxy Snapback Hat",
    description:
      "Adjustable snapback with 3D embroidered galaxy logo and premium materials.",
    price: 24.99,
    image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
    category: "accessories",
    rating: 4.5,
    reviews: 156,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#1e3a8a" },
      { name: "White", value: "#ffffff" },
    ],
    sizes: ["One Size"],
    inStock: true,
    featured: false,
    requiresSize: false, // One size fits all
    requiresColor: true,
  },
  {
    id: "6",
    name: "Cosmic Sticker Pack",
    description:
      "Set of 12 holographic stickers featuring cosmic designs and logos.",
    price: 9.99,
    image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg",
    category: "accessories",
    rating: 4.9,
    reviews: 312,
    colors: [
      {
        name: "Holographic",
        value: "linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)",
      },
    ],
    sizes: ["Standard"],
    inStock: true,
    featured: true,
    badge: "Popular",
    requiresSize: false, // Standard size
    requiresColor: false, // Only one color option
  },
  {
    id: "7",
    name: "Nebula Backpack",
    description:
      "Durable backpack with cosmic print, laptop compartment, and USB charging port.",
    price: 79.99,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    category: "accessories",
    rating: 4.8,
    reviews: 94,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Purple", value: "#7c3aed" },
      { name: "Blue", value: "#3b82f6" },
    ],
    sizes: ["One Size"],
    inStock: false,
    featured: false,
    requiresSize: false, // One size
    requiresColor: true,
  },
  {
    id: "8",
    name: "Cosmic Phone Case",
    description:
      "Protective phone case with cosmic design and wireless charging compatibility.",
    price: 16.99,
    originalPrice: 24.99,
    image: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg",
    category: "tech",
    rating: 4.4,
    reviews: 178,
    colors: [
      { name: "Galaxy", value: "#4c1d95" },
      { name: "Nebula", value: "#7c3aed" },
      { name: "Clear", value: "transparent" },
    ],
    sizes: [
      "iPhone 14/15",
      "iPhone 14/15 Pro",
      "Samsung Galaxy S24",
      "Google Pixel 8",
    ],
    inStock: true,
    featured: false,
    badge: "Sale",
    requiresSize: true,
    requiresColor: true,
  },
];

export const categories = [
  { id: "all", name: "All Products", icon: Package },
  { id: "apparel", name: "Apparel", icon: Shirt },
  { id: "accessories", name: "Accessories", icon: Coffee },
  { id: "tech", name: "Tech", icon: Laptop },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export const currentSubscription = {
  id: "sub_1",
  planName: "Pro Plan",
  planType: "monthly",
  price: 29,
  status: "active",
  nextBillingDate: "2024-02-15",
  startDate: "2024-01-15",
  features: [
    "Unlimited Projects",
    "100GB Storage",
    "Priority Support",
    "Advanced Analytics",
    "Team Collaboration",
  ],
  icon: Crown,
  gradient: "from-cosmic-600 to-nebula-600",
};

export const availablePlans = [
  {
    name: "Starter",
    price: { monthly: 9, yearly: 90 },
    features: ["5 Projects", "10GB Storage", "Basic Support"],
    icon: Zap,
    gradient: "from-blue-600 to-cyan-600",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 290 },
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Priority Support",
      "Advanced Analytics",
    ],
    icon: Crown,
    gradient: "from-cosmic-600 to-nebula-600",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    features: [
      "Everything in Pro",
      "1TB Storage",
      "24/7 Support",
      "Custom Integrations",
    ],
    icon: Star,
    gradient: "from-purple-600 to-pink-600",
    popular: false,
  },
];

export const purchases = [
  {
    id: "inv_001",
    type: "subscription",
    itemName: "Pro Plan - Monthly",
    amount: 29.0,
    date: "2024-01-15",
    status: "completed",
    invoiceUrl: "/invoices/inv_001.pdf",
    description: "Monthly subscription payment",
    paymentMethod: "**** 4242",
    refundable: false,
  },
  {
    id: "inv_002",
    type: "addon",
    itemName: "Extra Storage Pack",
    amount: 19.0,
    date: "2024-01-10",
    status: "completed",
    invoiceUrl: "/invoices/inv_002.pdf",
    description: "50GB additional storage",
    paymentMethod: "**** 4242",
    refundable: true,
  },
  {
    id: "inv_003",
    type: "one-time",
    itemName: "Premium Templates",
    amount: 49.0,
    date: "2024-01-05",
    status: "completed",
    invoiceUrl: "/invoices/inv_003.pdf",
    description: "Access to 100+ premium templates",
    paymentMethod: "PayPal",
    refundable: true,
  },
  {
    id: "inv_004",
    type: "subscription",
    itemName: "Pro Plan - Monthly",
    amount: 29.0,
    date: "2023-12-15",
    status: "completed",
    invoiceUrl: "/invoices/inv_004.pdf",
    description: "Monthly subscription payment",
    paymentMethod: "**** 4242",
    refundable: false,
  },
  {
    id: "inv_005",
    type: "subscription",
    itemName: "Starter Plan - Monthly",
    amount: 9.0,
    date: "2023-11-15",
    status: "refunded",
    description: "Monthly subscription payment (refunded due to upgrade)",
    paymentMethod: "**** 4242",
    refundable: false,
  },
];

export const paymentMethods = [
  {
    id: "pm_1",
    type: "card",
    last4: "4242",
    brand: "Visa",
    expiryMonth: 12,
    expiryYear: 2027,
    isDefault: true,
  },
  {
    id: "pm_2",
    type: "paypal",
    email: "user@example.com",
    isDefault: false,
  },
];

export const subscriptionTabs = [
    { id: 'overview', name: 'Overview', icon: Package },
    { id: 'billing', name: 'Billing History', icon: Receipt },
    { id: 'payment', name: 'Payment Methods', icon: CreditCard },
    { id: 'plans', name: 'Change Plan', icon: Settings }
  ];
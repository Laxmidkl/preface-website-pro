import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Play,
  Download,
  Calendar,
  Users,
  BarChart3,
  Shield,
  Zap,
  Cloud,
  FileText,
  Star,
  Clock,
  Smartphone,
  Database,
  Server,
  Globe,
  Mail,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  KeyboardOff,
} from "lucide-react";
import dashboardImg from "../../assets/college/dashboard.jpg";
import dashboardWatersupplyImg from "../../assets/watersupply/dashboard.jpg";
import dashboardCustomImg from "../../assets/custom/dashboard.jpg";
import dashboardCooperativeImg from "../../assets/cooperative/dashboard.jpg";

// Product data (can be moved to separate file)
const productsData = {
  "school-management": {
    id: "school-management",
    title: "School Management Software",
    subtitle: "Comprehensive educational institution management platform",
    description:
      "Streamline academic operations, student management, and administrative tasks with our all-in-one school management solution designed for modern educational institutions.",
    longDescription:
      "Our School Management Software revolutionizes how educational institutions operate by providing a unified platform that handles everything from student admissions to graduation. With real-time analytics, automated processes, and seamless communication tools, we help schools focus on what matters most - education.",
    image: dashboardImg,
    heroImage: dashboardImg,
    icon: FileText,
    color: "blue",
    features: [
      {
        title: "Student Information System",
        description:
          "Complete student profiles with academic history, attendance, and performance tracking",
        icon: Users,
        details: [
          "Admission Management",
          "Academic Records",
          "Attendance Tracking",
          "Performance Analytics",
        ],
        image: "/images/student-management-feature.jpg",
      },
      {
        title: "Academic Management",
        description:
          "Curriculum planning, timetable management, and examination systems",
        icon: Calendar,
        details: [
          "Timetable Scheduling",
          "Exam Management",
          "Gradebook",
          "Progress Reports",
        ],
        image: "/images/academic-management-feature.jpg",
      },
      {
        title: "Fee Management",
        description:
          "Automated fee collection, invoice generation, and payment tracking",
        icon: BarChart3,
        details: [
          "Online Payments",
          "Fee Structure",
          "Receipt Generation",
          "Due Alerts",
        ],
        image: "/images/fee-management-feature.jpg",
      },
      {
        title: "Communication Portal",
        description:
          "Seamless communication between teachers, students, and parents",
        icon: Shield,
        details: [
          "Announcements",
          "Parent Portal",
          "Teacher Communication",
          "Mobile App",
        ],
        image: "/images/communication-portal-feature.jpg",
      },
    ],
    benefits: [
      "50% reduction in administrative workload",
      "Real-time academic monitoring",
      "Improved parent engagement",
      "Automated reporting and analytics",
      "Mobile access for teachers and parents",
      "Customizable to your institution's needs",
    ],
    specifications: {
      deployment: ["Cloud-based", "On-premise", "Hybrid"],
      support: [
        "24/7 Technical Support",
        "Training Sessions",
        "Dedicated Account Manager",
      ],
      integration: [
        "Payment Gateways",
        "SMS APIs",
        "Email Services",
        "Biometric Systems",
      ],
      technology: [
        "React Frontend",
        "Node.js Backend",
        "MongoDB Database",
        "AWS Hosting",
      ],
    },
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Principal, Green Valley High",
        content:
          "This software transformed how we manage our school. The attendance tracking alone saved us 10 hours per week!",
        avatar: "/avatars/sarah.jpg",
        rating: 5,
      },
      {
        name: "Mike Chen",
        role: "IT Manager, City Academy",
        content:
          "Implementation was smooth and the support team is fantastic. Highly recommended for any educational institution.",
        avatar: "/avatars/mike.jpg",
        rating: 5,
      },
    ],
    cta: {
      primary: "Request Demo",
      secondary: "Download Brochure",
    },
  },
  "campus-solutions": {
    id: "campus-solutions",
    title: "Campus Management Solutions",
    subtitle: "Smart campus infrastructure for universities and colleges",
    description:
      "Transform your educational campus with intelligent management tools that optimize resources, enhance security, and improve student experience.",
    longDescription:
      "Our Campus Solutions provide universities and colleges with a comprehensive ecosystem to manage large-scale educational environments. From facility management to student services, we create smart campuses that are efficient, secure, and future-ready.",
    image: dashboardImg,
    heroImage: dashboardImg,
    icon: Smartphone,
    color: "purple",
    features: [
      {
        title: "Facility Management",
        description:
          "Smart management of classrooms, labs, hostels, and common areas",
        icon: Zap,
        details: [
          "Room Booking",
          "Maintenance Tracking",
          "Resource Allocation",
          "Energy Management",
        ],
        image: "/images/facility-management-feature.jpg",
      },
      {
        title: "Student Lifecycle",
        description: "End-to-end student journey from enrollment to alumni",
        icon: Users,
        details: [
          "Admission Process",
          "Course Registration",
          "Academic Progress",
          "Alumni Network",
        ],
        image: "/images/student-lifecycle-feature.jpg",
      },
    ],
    benefits: [
      "30% better resource utilization",
      "Enhanced campus security",
      "Streamlined administrative processes",
      "Improved student satisfaction",
    ],
    specifications: {
      deployment: ["Cloud", "Hybrid", "On-premise"],
      support: ["Dedicated Account Manager", "24/7 Support"],
      integration: ["Biometric Systems", "Library Management", "ERP Systems"],
    },
    cta: {
      primary: "Schedule Campus Tour",
      secondary: "View Case Studies",
    },
  },
  "water-supply": {
    id: "water-supply",
    title: "Water Supply Management System",
    subtitle: "Intelligent water distribution and monitoring platform",
    description:
      "Monitor, manage, and optimize water supply operations with real-time data analytics and automated control systems for municipalities and communities.",
    longDescription:
      "Our Water Supply Management System provides municipalities and water authorities with a comprehensive solution to manage water distribution networks efficiently. With IoT sensors, predictive analytics, and automated controls, we help ensure sustainable water management and reduce operational costs.",
    image: dashboardWatersupplyImg,
    heroImage: dashboardWatersupplyImg,
    icon: Cloud,
    color: "teal",
    features: [
      {
        title: "Real-time Monitoring",
        description:
          "Live monitoring of water quality, pressure, and flow rates",
        icon: Globe,
        details: [
          "Water Quality Sensors",
          "Pressure Monitoring",
          "Flow Measurement",
          "Leak Detection",
        ],
        image: "/images/water-monitoring-feature.jpg",
      },
    ],
    benefits: [
      "40% reduction in water loss",
      "Real-time operational visibility",
      "Automated billing processes",
      "Predictive maintenance alerts",
    ],
    specifications: {
      deployment: ["Cloud-based", "Municipal Servers"],
      support: ["On-site Training", "24/7 Monitoring Support"],
      integration: ["SCADA Systems", "GIS Mapping", "Payment Gateways"],
    },
    cta: {
      primary: "Request Site Survey",
      secondary: "Technical Specifications",
    },
  },
  "cooperative-software": {
    id: "cooperative-software",
    title: "Cooperative Management Software",
    subtitle: "Complete solution for cooperative societies and organizations",
    description:
      "Streamline cooperative operations with comprehensive member management, financial tracking, and governance tools designed for cooperative success.",
    longDescription:
      "Our Cooperative Software empowers cooperative societies with modern tools to manage members, finances, and operations efficiently. From small community cooperatives to large agricultural societies, we provide scalable solutions that drive growth and member satisfaction.",
    image: dashboardCooperativeImg,
    heroImage: dashboardCooperativeImg,
    icon: Users,
    color: "green",
    features: [
      {
        title: "Member Management",
        description: "Complete member database with share and loan tracking",
        icon: Database,
        details: [
          "Member Registration",
          "Share Management",
          "Loan Tracking",
          "Dividend Calculation",
        ],
        image: "/images/member-management-feature.jpg",
      },
    ],
    benefits: [
      "60% faster member services",
      "Accurate financial reporting",
      "Streamlined governance processes",
      "Enhanced member engagement",
    ],
    specifications: {
      deployment: ["Cloud", "On-premise"],
      support: ["Cooperative Training", "Regular Updates"],
      integration: ["Banking APIs", "Payment Systems", "Government Portals"],
    },
    cta: {
      primary: "Book Demo",
      secondary: "Cooperative Guide",
    },
  },
  "custom-solutions": {
    id: "custom-solutions",
    title: "Custom Software Solutions",
    subtitle: "Tailored software development for unique business needs",
    description:
      "Get bespoke software solutions designed specifically for your business requirements, built with cutting-edge technology and industry best practices.",
    longDescription:
      "Our Custom Solutions service delivers tailor-made software that addresses your specific business challenges. We work closely with you to understand your needs and create scalable, robust applications that drive efficiency and growth.",
    image: dashboardCustomImg,
    heroImage: dashboardCustomImg,
    icon: Server,
    color: "orange",
    features: [
      {
        title: "Requirement Analysis",
        description: "In-depth analysis and planning for your custom solution",
        icon: Users,
        details: [
          "Business Analysis",
          "Technical Planning",
          "Architecture Design",
          "Project Roadmap",
        ],
        image: "/images/requirement-analysis-feature.jpg",
      },
    ],
    benefits: [
      "100% tailored to your needs",
      "Scalable architecture",
      "Ongoing technical support",
      "Competitive advantage",
    ],
    specifications: {
      deployment: ["Custom Deployment Options"],
      support: ["Dedicated Development Team", "Project Management"],
      integration: ["Existing Systems", "Third-party APIs", "Legacy Systems"],
    },
    cta: {
      primary: "Start Your Project",
      secondary: "View Portfolio",
    },
  },
};

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);

  const product = productsData[productId];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [productId]);

  useEffect(() => {
    // Reset states when product changes
    setActiveFeature(0);
    setActiveTab("overview");
    setIsLoading(true);

    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-600 to-purple-700",
      purple: "from-purple-600 to-pink-700",
      teal: "from-teal-600 to-blue-700",
      green: "from-green-600 to-teal-700",
      orange: "from-orange-600 to-red-700",
    };
    return gradients[color] || gradients.blue;
  };

  const getLightGradient = (color) => {
    const gradients = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      teal: "from-teal-500 to-blue-500",
      green: "from-green-500 to-teal-500",
      orange: "from-orange-500 to-red-500",
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${getGradient(
          product.color,
        )} text-white overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <product.icon className="w-5 h-5" />
                <span className="text-green-100 font-medium">Product</span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3">
                {product.title}
              </h1>
              <p className="text-md md:text-md text-white/80 mb-3">
                {product.subtitle}
              </p>
              <p className="text-sm text-white/50 italic mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    alert(
                      "This feature is not available. Please wait a few days.",
                    )
                  }
                  className="group bg-white text-gray-600 hover:bg-gray-50 cursor-pointer font-semibold py-2.5 px-8 rounded-md transition-all duration-300 hover:shadow-xl flex items-center gap-3"
                >
                  {product.cta.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    alert(
                      "This feature is not available. Please wait a few days.",
                    )
                  }
                  className="group border-2 border-white cursor-pointer text-white hover:bg-white/10 font-semibold py-2.5 px-8 rounded-md transition-all duration-300 flex items-center gap-3"
                >
                  {product.cta.secondary}
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 border border-white/20">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  className="rounded-md w-full h-auto"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full blur-xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 mt-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full py-3 pl-4 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
            >
              {["overview", "features", "specifications", "pricing"].map(
                (tab) => (
                  <option key={tab} value={tab}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </option>
                ),
              )}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex">
            <div className="flex space-x-4 rounded-xl backdrop-blur-sm">
              {["overview", "features", "specifications", "pricing"].map(
                (tab) => {
                  const isActive = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 cursor-pointer px-6 text-gray-700 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "scale-105 text-green-500 border-b border-green-500" : "scale-100"}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Mobile Active Tab Indicator */}
          <div className="lg:hidden mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </span>
              <div className="flex space-x-1">
                <button
                  onClick={() => {
                    const tabs = [
                      "overview",
                      "features",
                      "specifications",
                      "pricing",
                    ];
                    const currentIndex = tabs.indexOf(activeTab);
                    const prevIndex =
                      currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                    setActiveTab(tabs[prevIndex]);
                  }}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => {
                    const tabs = [
                      "overview",
                      "features",
                      "specifications",
                      "pricing",
                    ];
                    const currentIndex = tabs.indexOf(activeTab);
                    const nextIndex =
                      currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                    setActiveTab(tabs[nextIndex]);
                  }}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-600 h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ([
                      "overview",
                      "features",
                      "specifications",
                      "pricing",
                    ].indexOf(activeTab) +
                      1) *
                    25
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <OverviewTab
                product={product}
                getLightGradient={getLightGradient}
              />
            )}

            {activeTab === "features" && (
              <FeaturesTab
                product={product}
                activeFeature={activeFeature}
                setActiveFeature={setActiveFeature}
                getLightGradient={getLightGradient}
              />
            )}
            {activeTab === "specifications" && (
              <SpecificationsTab product={product} />
            )}

            {activeTab === "pricing" && (
              <PricingTab
                product={product}
                getLightGradient={getLightGradient}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

// Tab Components
const OverviewTab = ({ product, getLightGradient }) => (
  <motion.div
    key="overview"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="grid lg:grid-cols-2 gap-16 items-center"
  >
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
        About {product.title}
      </h2>
      <p className="text-md text-gray-600 leading-relaxed mb-8">
        {product.longDescription}
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {product.benefits.slice(0, 4).map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 my-auto flex-shrink-0" />
            <span className="text-gray-700 text-sm my-auto">{benefit}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="relative">
      <div className={`p-1 shadow-2xl`}>
        <img
          src={product.image}
          alt={`${product.title} Dashboard`}
          className="rounded-md w-full h-auto"
        />
      </div>
      <div className="absolute -bottom-6 sm:-left-6 -left-2 bg-white rounded-md p-3 border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <Play className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p
              className="font-semibold text-gray-900"
              onClick={() =>
                alert("This feature is not available. Please wait a few days.")
              }
            >
              Watch Demo
            </p>
            <p
              className="text-sm text-gray-500"
              onClick={() =>
                alert("This feature is not available. Please wait a few days.")
              }
            >
              5-minute overview
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const FeaturesTab = ({
  product,
  activeFeature,
  setActiveFeature,
  getLightGradient,
}) => (
  <motion.div
    key="features"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
        Powerful Features
      </h2>
      <p className="text-md text-gray-600">
        Discover how our comprehensive features can transform your operations
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        {product.features.map((feature, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeFeature === index
                ? "bg-white border-2 border-gray-200"
                : "bg-gray-50 border-2 border-gray-200 hover:bg-white border-2 border-transparent"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-xl ${
                  activeFeature === index
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-md mb-3">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="lg:sticky lg:top-24 h-fit">
        <div className="rounded-md p-8 text-gray-800">
          <h3 className="text-2xl font-bold mb-4">
            {product.features[activeFeature].title}
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            {product.features[activeFeature].description}
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <img
              src={product.features[activeFeature].image}
              alt={product.features[activeFeature].title}
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const SpecificationsTab = ({ product }) => (
  <motion.div
    key="specifications"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="max-w-4xl mx-auto"
  >
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">
        Technical Specifications
      </h2>
      <p className="text-md text-gray-600">
        Everything you need to know about implementation and support
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {Object.entries(product.specifications).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-md p-6 border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
            {key.replace("_", " ")}
          </h3>
          <ul className="space-y-3">
            {value.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const PricingTab = ({ product, getLightGradient }) => (
  <motion.div
    key="pricing"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">
        Simple, Transparent Pricing
      </h2>
      <p className="text-md text-gray-600">
        Choose the plan that works best for your organization
      </p>
    </div>

    {product.pricing ? (
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(product.pricing).map(([key, plan], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "border-green-500 bg-green-50 shadow-xl"
                : "border-gray-200 bg-white shadow-lg"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {plan.name}
            </h3>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-gray-600">/{plan.period}</span>
              )}
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                alert("This feature is not available. Please wait a few days.")
              }
              className={`w-full py-2 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    ) : (
      <div className="text-center py-12">
        <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Custom Pricing
        </h3>
        <p className="text-gray-600 mb-6 text-md">
          Contact us for a personalized quote based on your requirements
        </p>
        <button
          onClick={() =>
            alert("This feature is not available. Please wait a few days.")
          }
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-md transition-colors"
        >
          Contact Sales
        </button>
      </div>
    )}
  </motion.div>
);


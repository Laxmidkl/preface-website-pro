import {
  LaptopIcon,
  Building2Icon,
  UsersIcon,
  DropletsIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductsSection() {
  const navigate = useNavigate();

  const products = [
    {
      title: "School Management System",
      description:
        "Manage students, staff, attendance, exams, and reports efficiently in one platform.",
      icon: LaptopIcon,
      features: [
        "Student Management",
        "Attendance Tracking",
        "Exam Scheduling",
        "Report Generation",
      ],
      cta: "See Demo",
      link: "/products/school-management",
    },
    {
      title: "Campus Management System",
      description:
        "Streamline administrative processes for universities and colleges with automation and analytics.",
      icon: Building2Icon,
      features: [
        "Administrative Automation",
        "Analytics Dashboard",
        "Resource Management",
        "Fee Collection",
      ],
      cta: "See Demo",
      link: "/products/campus-solutions",
    },
    {
      title: "Water Supply Billing",
      description:
        "Efficiently monitor, manage, and optimize water supply operations for communities and municipalities.",
      icon: DropletsIcon,
      features: [
        "Real-time Monitoring",
        "Distribution Management",
        "Billing System",
        "Maintenance Tracking",
      ],
      cta: "See Demo",
      link: "/products/water-supply",
    },
    {
      title: "Cooperative System",
      description:
        "Manage members, accounts, transactions, and reports for cooperatives seamlessly.",
      icon: UsersIcon,
      features: [
        "Member Management",
        "Account Tracking",
        "Transaction Processing",
        "Financial Reports",
      ],
      cta: "See Demo",
      link: "/products/cooperative-software",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-green-50 text-green-600 px-4 py-1 mt-20 text-sm font-semibold uppercase tracking-wide">
            Our Products
          </span>

          <h2 className="mt-5 text-4xl md:text-4xl font-bold text-gray-900">
            Innovative Software Solutions
          </h2>

          <p className="mt-5 leading-8 text-gray-500">
            Discover powerful, reliable, and scalable software products designed
            to simplify operations, improve productivity, and accelerate digital
            transformation across schools, campuses, cooperatives, and water
            supply organizations.
          </p>
        </div>

        {/* Only change: grid-cols-1 added */}
        <div className="mt-20 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-green-50/30 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="relative z-10 pb-1">
                <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center">
                  <product.icon className="w-9 h-9 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug truncate">
                  {product.title}
                </h3>

                <p className="mt-4 text-gray-400 font-mono !font-normal text-sm leading-6">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="my-4 space-y-4">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-1 text-sm text-gray-600"
                    >
                      <CheckCircle2Icon className="w-4 h-4 text-gray-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => navigate(product.link)}
                  className="mt-auto flex items-center justify-center cursor-pointer gap-2 rounded-xl border border-gray-200 py-3 font-medium hover:bg-gray-50 transition"
                >
                  {product.cta}
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
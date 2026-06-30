import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Code2,
  Headphones,
  MonitorSmartphone,
  Award,
} from "lucide-react";

import whyImage from "../assets/img/why.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Sector-Specific Design",
      description:
        "Purpose-built software designed specifically for your industry.",
      icon: CheckCircle2,
    },
    {
      title: "Local Understanding",
      description:
        "Nepal-based expertise combined with global development standards.",
      icon: Code2,
    },
    {
      title: "Cloud-Based Solutions",
      description: "Access your system securely from anywhere, anytime.",
      icon: ShieldCheck,
    },
    {
      title: "Improved Productivity",
      description:
        "Automate repetitive work and improve operational efficiency.",
      icon: Headphones,
    },
    {
      title: "Scalable Systems",
      description:
        "Grow from a single branch to multiple locations effortlessly.",
      icon: MonitorSmartphone,
    },
    {
      title: "Dedicated Support",
      description: "Professional onboarding, training, and long-term support.",
      icon: Award,
    },
  ];

  const leftItems = reasons.slice(0, 3);
  const rightItems = reasons.slice(3, 6);

  return (
    <section className="py-20 bg-green-50/30 text-white mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="lg:text-3xl text-xl font-bold mt-3 text-black">
            Why Choose Preface Technology?
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 items-center gap-10">
          {/* Left */}
          <div className="space-y-8">
            {leftItems.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl p-5 shadow-lg"
              >
                <item.icon className="text-green-600 mb-3" size={30} />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full border-[1px] border-green-800 overflow-hidden shadow-2xl">
              <img
                src={whyImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {rightItems.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-xl p-5 shadow-lg"
              >
                <item.icon className="text-green-600 mb-3" size={30} />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

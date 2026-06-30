import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../components/section-title";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState("");

  const faqs = [
    {
      question: "What services does Preface Technology provide?",
      answer:
        "We offer custom software development, web applications, mobile app development, UI/UX design, cloud solutions, system integration, and ongoing technical support tailored to your business needs.",
    },
    {
      question: "Do you build custom software for businesses?",
      answer:
        "Yes. Every business has unique requirements, so we design and develop custom software solutions that improve efficiency, automate workflows, and support long-term growth.",
    },
    {
      question: "How long does it take to complete a software project?",
      answer:
        "The project timeline depends on its size and complexity. Small projects may take a few weeks, while enterprise-level solutions typically require several months. We provide a detailed timeline before development begins.",
    },
    {
      question: "Can you upgrade or redesign our existing software?",
      answer:
        "Absolutely. We modernize legacy systems, improve user experience, add new features, optimize performance, and migrate applications to the latest technologies.",
    },
    {
      question: "Do you provide maintenance and technical support?",
      answer:
        "Yes. We provide continuous maintenance, security updates, bug fixes, performance optimization, backups, and technical support after deployment.",
    },
    {
      question: "How do I get started with Preface Technology?",
      answer:
        "Simply contact our team with your project requirements. We'll discuss your goals, recommend the best solution, prepare a proposal, and guide you through every step of the development process.",
    },
  ];

  return (
    <section>
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our software development services and how we can help your business grow."
          alignment="center"
        />

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left px-6 py-5 cursor-pointer"
              >
                <h3 className="lg:text-lg text-xs font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

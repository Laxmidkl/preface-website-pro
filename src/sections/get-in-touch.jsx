import SectionTitle from "../components/section-title";
import {
  ArrowUpRight,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GetInTouch() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "prefacetechnology@gmail.com",
      subtitle: "Send us an email anytime",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "071-445564, 985-7079054",
      subtitle: "Sun to Fri, 10am to 4pm",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Butwal-13 Rupandehi, Nepal",
      subtitle: "Come say hello at our office",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      subtitle: "We'll get back to you quickly",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    // Handle successful submission here
    console.log("Form submitted!");
  };

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white"
      id="contact"
    >
      {/* Background Elements */}
     

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
            Let's Start a Conversation
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ready to bring your ideas to life? We'd love to hear from you. Send
            us a message and let's create something amazing together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's talk about your project
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're here to help you transform your vision into reality.
                Whether you have a specific project in mind or just want to
                explore possibilities, we're excited to hear from you.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div className="group p-6 bg-white rounded-md border border-gray-200 hover:border-green-500 cursor-pointer transition-all duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-900 font-medium text-sm mb-1">
                    {item.details}
                  </p>
                  <p className="text-gray-500 text-sm italic">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-md border border-gray-200 sm:p-8 p-3 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-medium text-gray-900">
                    Your name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-medium text-gray-900">
                    Email address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-medium text-gray-900">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-medium text-gray-900">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your project, ideas, or questions..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 sm:py-4 py-2 px-8 rounded-sm cursor-pointer font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

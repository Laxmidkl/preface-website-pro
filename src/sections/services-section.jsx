import { ArrowRight, Palette, Smartphone, Layout, Code, Sparkles, Zap, Shield, Users } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      name: "Web Development",
      icon: Code,
      description: "Custom web applications built with modern technologies. We create responsive, scalable, and high-performance websites that drive business growth.",
      features: ["React/Next.js", "Node.js", "Responsive Design", "SEO Optimized"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      name: "Mobile App Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications for iOS and Android. User-centric design with seamless performance.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
      gradient: "from-purple-500 to-pink-500",
      delay: "100"
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Beautiful and intuitive user interfaces that enhance user experience and drive engagement through thoughtful design.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-orange-500 to-red-500",
      delay: "200"
    },
    {
      name: "Graphics Design",
      icon: Layout,
      description: "Creative visual design solutions including branding, marketing materials, and digital assets that tell your story.",
      features: ["Brand Identity", "Print Design", "Social Media Graphics", "Illustration"],
      gradient: "from-green-500 to-teal-500",
      delay: "300"
    },
    {
      name: "Digital Transformation",
      icon: Zap,
      description: "Modernize your business processes with cutting-edge digital solutions that improve efficiency and productivity.",
      features: ["Process Automation", "Cloud Solutions", "Digital Strategy", "System Integration"],
      gradient: "from-yellow-500 to-orange-500",
      delay: "400"
    },
    {
      name: "Consulting & Strategy",
      icon: Users,
      description: "Expert technology consulting to help you make informed decisions and build effective digital strategies.",
      features: ["Tech Audit", "Strategy Planning", "Implementation Guide", "Performance Review"],
      gradient: "from-indigo-500 to-purple-500",
      delay: "500"
    }
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-500/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
            What We Offer
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Preface Technology Pvt. Ltd. builds digital solutions that streamline
            operations and improve efficiency for businesses of all sizes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative bg-white/70 backdrop-blur-sm cursor-pointer rounded-md border border-gray-200/50 p-8 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${service.delay}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-md bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[1px] rounded-md bg-white" />
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-md bg-gradient-to-br ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-700 mb-4 group-hover:text-gray-500">
                {service.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-[14px] mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
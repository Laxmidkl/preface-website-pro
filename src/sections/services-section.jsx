import webImg from "../assets/img/web.jpg";
import mobileImg from "../assets/img/mobile.jpg";
import ecommerceImg from "../assets/img/ecommerce.jpg";
import cloudImg from "../assets/img/cloud.jpg";
import digitalImg from "../assets/img/digital.jpg";
import consultingImg from "../assets/img/consulting.jpg";
import Banner, { bannerData } from "../components/Banner";

export default function OurServices() {
  const services = [
    {
      title: "Web Development",
      image: webImg,
      description:
        "Modern, scalable, and responsive websites tailored to your business.",
      tags: ["React", "Node.js", "Next.js"],
    },
    {
      title: "Mobile App Development",
      image: mobileImg,
      description:
        "Native and cross-platform mobile applications for Android and iOS.",
      tags: ["Flutter", "React Native", "Swift"],
    },
    {
      title: "E-commerce Solutions",
      image: ecommerceImg,
      description:
        "Custom online stores, payment gateways, and marketplace platforms.",
      tags: ["Shopify", "Magento", "Custom"],
    },
    {
      title: "Cloud Solutions",
      image: cloudImg,
      description:
        "AWS, Azure, and Google Cloud architecture, migration, and management.",
      tags: ["AWS", "Azure", "DevOps"],
    },
    {
      title: "Digital Transformation",
      image: digitalImg,
      description:
        "Helping businesses adopt modern technologies and digital solutions.",
      tags: ["Cloud", "AI", "Automation"],
    },
    {
      title: "Consulting & Strategy",
      image: consultingImg,
      description:
        "Technology consulting and strategic planning to accelerate growth.",
      tags: ["Strategy", "Roadmap", "Innovation"],
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Banner */}
      <div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="container text-center w-full">
            <Banner {...bannerData.services} />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            From idea to deployment, we deliver reliable technology solutions
            designed to help your business succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-green-200"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-60 lg:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8">
                <h3 className="text-lg sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-green-600 transition duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-sm ">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium hover:bg-green-100 hover:text-green-700 transition duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className="mt-4 sm:mt-5 flex items-center gap-2 font-semibold text-green-600 hover:text-green-700 transition-all text-sm sm:text-base">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

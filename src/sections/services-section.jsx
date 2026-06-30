import {
  Code2,
  Smartphone,
  Palette,
  PenTool,
  LaptopMinimalCheck,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import banner from "../assets/img/banner.jpg";

export default function OurServices() {
  const services = [
    {
      title: "Web Development",
      icon: Code2,
      description:
        "Modern, scalable, and responsive websites tailored to your business.",
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile applications for Android and iOS.",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description:
        "Beautiful interfaces and seamless user experiences that users love.",
    },
    {
      title: "Graphics Design",
      icon: PenTool,
      description:
        "Creative branding, social media graphics, brochures, and marketing materials.",
    },
    {
      title: "Digital Transformation",
      icon: LaptopMinimalCheck,
      description:
        "Helping businesses adopt modern technologies and digital solutions.",
    },
    {
      title: "Consulting & Strategy",
      icon: BriefcaseBusiness,
      description:
        "Technology consulting and strategic planning to accelerate growth.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="bg-green-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider inline-block">
              OUR SERVICES
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-6 leading-tight">
              Innovative Digital Solutions
            </h1>

            <p className="text-gray-200 max-w-2xl mx-auto mt-3 sm:mt-5 text-sm sm:text-base md:text-lg px-4 sm:px-0">
              We provide end-to-end software solutions that empower businesses
              to innovate, grow, and succeed in the digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            From idea to deployment, we deliver reliable technology solutions
            designed to help your business succeed.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">
                  <Icon
                    size={24}
                    className="text-green-600 group-hover:text-white transition sm:w-[30px] sm:h-[30px]"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mt-5 sm:mt-6 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3 sm:mt-4 leading-6 sm:leading-7 text-sm sm:text-base">
                  {service.description}
                </p>

                <button className="mt-5 sm:mt-6 flex items-center gap-2 font-semibold text-green-600 hover:gap-3 transition-all text-sm sm:text-base">
                  Learn More
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
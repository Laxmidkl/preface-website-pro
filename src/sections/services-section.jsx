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
        className="relative h-[350px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-6">
            <span className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
              OUR SERVICES
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mt-6">
              Innovative Digital Solutions
            </h1>

            <p className="text-gray-200 max-w-2xl mx-auto mt-5 text-lg">
              We provide end-to-end software solutions that empower businesses
              to innovate, grow, and succeed in the digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            From idea to deployment, we deliver reliable technology solutions
            designed to help your business succeed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">
                  <Icon
                    size={30}
                    className="text-green-600 group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-green-600 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

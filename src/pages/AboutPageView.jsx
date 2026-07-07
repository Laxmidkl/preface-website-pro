import {
  Building2,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Handshake,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Banner, { bannerData } from "../components/Banner";
export default function AboutUsPage() {
  const values = [
    {
      title: "Innovation",
      description:
        "Continuously improving our solutions to meet evolving institutional needs.",
      icon: Lightbulb,
    },
    {
      title: "Reliability",
      description:
        "Delivering software that organizations can count on every day.",
      icon: ShieldCheck,
    },
    {
      title: "Simplicity",
      description:
        "Designing user-friendly tools that reduce complexity, not add to it.",
      icon: Sparkles,
    },
    {
      title: "Impact",
      description:
        "Measuring success by the real-world results we create for our clients.",
      icon: TrendingUp,
    },
    {
      title: "Partnership",
      description:
        "Building long-term relationships with the institutions we serve.",
      icon: Handshake,
    },
    {
      title: "Integrity",
      description: "Operating with transparency and trust in every engagement.",
      icon: Building2,
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white ">
        <div className="container  px-4 sm:px-6 lg:px-6 text-center w-full">
          <Banner {...bannerData.about} />
        </div>
      </section>

      {/* Company Story */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
            alt="Team"
            className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-auto"
          />

          <div>
            <span className="text-green-600 font-semibold uppercase text-sm sm:text-base">
              Who We Are
            </span>

            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
              Empowering Organizations Through Technology
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base">
              Preface Technology develops integrated software solutions for the
              education, finance, hospitality, and municipal utility sectors.
              Our products help organizations streamline operations, improve
              productivity, and deliver better services.
            </p>

            <p className="mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base">
              With deep local market knowledge and an engineering-first
              approach, we bridge the gap between everyday institutional
              management and today's digital world by creating secure,
              user-friendly, and scalable software.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
                  100+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Industries Served
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
                  100%
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Custom Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 hover:bg-green-50/40 hover:shadow-lg transition-all">
            <Target className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />

            <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold">
              Our Mission
            </h3>

            <p className="mt-3 sm:mt-4 text-gray-600 leading-7 text-sm sm:text-base">
              To deliver smart, accessible, and reliable software solutions that
              help institutions and businesses across Nepal and beyond operate
              more efficiently, serve their people better, and grow with
              confidence.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 hover:bg-green-50/40 hover:shadow-lg transition-all">
            <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />

            <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold">
              Our Vision
            </h3>

            <p className="mt-3 sm:mt-4 text-gray-600 leading-7 text-sm sm:text-base">
              To become South Asia's most trusted multi-sector software partner,
              recognized for innovation, simplicity, and measurable impact
              across education, finance, hospitality, and public services.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-green-600 font-semibold uppercase text-sm sm:text-base">
              Core Values
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
              Values That Drive Everything We Do
            </h2>

            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Our values define how we work, innovate, and build lasting
              relationships with every client.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:shadow-lg transition"
              >
                <value.icon className="w-8 h-8 sm:w-9 sm:h-9 text-green-800" />

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

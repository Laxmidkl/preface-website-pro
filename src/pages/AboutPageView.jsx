
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
      description:
        "Operating with transparency and trust in every engagement.",
      icon: Building2,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Building Practical Software for a Digital Future
          </h1>

          <p className="mt-6 text-gray-600 leading-8">
            Preface Technology is a Nepal-based software company dedicated to
            building practical, modern software solutions for institutions and
            businesses.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
            alt="Team"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <span className="text-green-600 font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Empowering Organizations Through Technology
            </h2>

            <p className="mt-6 text-gray-600 ">
              Preface Technology develops integrated software solutions for the
              education, finance, hospitality, and municipal utility sectors.
              Our products help organizations streamline operations, improve
              productivity, and deliver better services.
            </p>

            <p className="mt-5 text-gray-600">
              With deep local market knowledge and an engineering-first
              approach, we bridge the gap between everyday institutional
              management and today's digital world by creating secure,
              user-friendly, and scalable software.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-green-600">100+</h3>
                <p className="text-gray-600">Industries Served</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">Custom Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border  border-gray-200">
            <Target className="w-8 h-8 text-green-600" />

            <h3 className="mt-5 text-2xl font-semibold">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              To deliver smart, accessible, and reliable software solutions
              that help institutions and businesses across Nepal and beyond
              operate more efficiently, serve their people better, and grow
              with confidence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border  border-gray-200">
            <Eye className="w-8 h-8 text-green-600" />

            <h3 className="mt-5 text-2xl font-semibold">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              To become South Asia's most trusted multi-sector software
              partner, recognized for innovation, simplicity, and measurable
              impact across education, finance, hospitality, and public
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-green-600 font-semibold uppercase">
              Core Values
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Values That Drive Everything We Do
            </h2>

            <p className="mt-4 text-gray-600">
              Our values define how we work, innovate, and build lasting
              relationships with every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-7 hover:shadow-lg transition"
              >
                <value.icon className="w-9 h-9 text-green-800" />

                <h3 className="mt-5 text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
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

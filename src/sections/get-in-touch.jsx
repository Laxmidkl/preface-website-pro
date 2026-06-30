import {
  CheckCircle,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Send,
  MapPin,
} from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="bg-[#F8FBF8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              Talk to an
              <br />
              <span className="text-green-600 italic font-serif">
                Expert
              </span>{" "}
              Today
            </h2>

            <p className="mt-6 text-gray-600 text-lg  max-w-md">
              Get in touch with our team for software development, web
              applications, mobile apps, and digital solutions.
            </p>

            <div className="mt-12 space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Expert Software Team
                  </h4>

                  <p className="text-gray-500 mt-1">
                    Experienced developers delivering scalable solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Secure & Reliable
                  </h4>

                  <p className="text-gray-500 mt-1">
                    Modern technologies with security as our priority.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Fast Response
                  </h4>

                  <p className="text-gray-500 mt-1">
                    We usually reply within one business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Info Cards */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[30px] p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Please enter your information
            </h3>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 resize-none focus:ring-2 focus:ring-green-500 outline-none"
                ></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-[1.02] transition duration-300">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Email */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <Mail className="w-7 h-7 text-green-600" />
            </div>

            <h4 className="mt-5 font-semibold text-lg text-gray-900">Email</h4>

            <p className="mt-2 text-sm text-gray-500 break-all">
              prefacetechnology@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <Phone className="w-7 h-7 text-green-600" />
            </div>

            <h4 className="mt-5 font-semibold text-lg text-gray-900">Phone</h4>

            <p className="mt-2 text-sm text-gray-500">+977 985-7079054</p>
          </div>

          {/* Location */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-green-600" />
            </div>

            <h4 className="mt-5 font-semibold text-lg text-gray-900">
              Location
            </h4>

            <p className="mt-2 text-sm text-gray-500">Butwal, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
}

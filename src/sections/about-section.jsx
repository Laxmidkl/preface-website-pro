import React from "react";
import SectionTitle from "../components/section-title";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center">
      <SectionTitle
        title="About Us"
        description="Preface Technology Pvt. Ltd. is a Nepal-based software company providing innovative solutions."
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mt-20">
        <div className="relative shadow-2xl shadow-green-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt="Preface Technology"
          />
          <div className="flex items-center gap-1 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="team"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="team"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="team"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-green-600 hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our growing tech community
            </p>
          </div>
        </div>

        {/* Text content */}
        <div className="text-slate-600 max-w-xl">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            What We Do
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-100"></div>
          <p className="mt-8 text-sm">
            We are a software company committed to building innovative digital
            solutions that help businesses grow and succeed. From custom
            software and web applications to mobile apps and enterprise systems,
            we create reliable, scalable, and user-friendly technology tailored
            to our clients' needs.
          </p>
          <p className="mt-4 text-sm">
            Driven by innovation, quality, and collaboration, we work closely
            with businesses to transform ideas into impactful digital products.
            Our mission is to deliver technology that simplifies operations,
            improves efficiency, and creates lasting value.
          </p>

          <button
            onClick={() => navigate("/about-us")}
            className="flex items-center gap-2 mt-8 text-sm cursor-pointer hover:-translate-y-0.5 transition bg-gradient-to-r from-green-600 to-green-400 py-2 px-8 rounded-full text-white"
          >
            <span>Read more</span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

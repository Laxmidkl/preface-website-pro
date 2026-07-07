import aboutBanner from "../assets/bannerimg/about.jpg";
import serviceBanner from "../assets/bannerimg/service.jpg";
import contactBanner from "../assets/bannerimg/contactUs.webp";

export const bannerData = {
 about: {
  image: aboutBanner,
  title: "About Preface Technology",
  subtitle: "Building Digital Solutions for a Smarter Tomorrow",
  description:
    "Preface Technology delivers innovative, secure, and scalable software solutions.\nHelping businesses and organizations achieve digital transformation with confidence.",
},
services: {
  image: serviceBanner,
  title: "Innovative Digital Solutions",
  subtitle: "OUR SERVICES",
  description:
    "We provide end-to-end software solutions that empower businesses to innovate,\ngrow, and succeed in the digital world.",
},

  contact: {
    image: contactBanner,
      title: "Let's Connect",
     subtitle: "Let's Build Something Great Together",
    description:
    "Partner with Preface Technology to build innovative, reliable, and scalable software.\nReach out today and let's turn your ideas into reality.",
},
};

const Banner = ({ image, title, subtitle, description }) => {
  return (
  <section
  className="relative h-[500px] bg-cover bg-center"
  style={{ backgroundImage: `url(${image})` }}
>
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
    <div className="max-w-5xl px-6">
      {/* Subtitle */}
      <p className="text-lg md:text-xl font-medium uppercase tracking-widest text-green-300 mb-4">
        {subtitle}
      </p>

      {/* Title */}
      <h1 className="text-4xl  md:text-6xl font-extrabold leading-tight  mb-6 ">
        {title}
      </h1>

      {/* Description */}
      <p className="text-base md:text-xl text-gray-200 leading-7 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  </div>
</section>
  );
};

export default Banner;
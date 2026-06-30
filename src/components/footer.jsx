import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="px-4 pt-10 text-gray-600 border-t border-gray-200/60 md:px-16 lg:px-24">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <a href="https://prefacetechnology.com">
              <img
                src={logo}
                alt="Preface Technology"
                className="h-8 w-auto"
                width={205}
                height={48}
              />
            </a>
            <span className="text-2xl font-bold text-gray-900 font-metricas leading-none">
              <strong className="font-metricas text-green-600">Preface</strong> Tech
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm/6">
            Preface Technology Pvt. Ltd. provides innovative software solutions
            for schools, campuses, water supply systems, and cooperatives,
            helping organizations operate efficiently and grow smarter.
          </p>
          <div className="mt-2 flex items-center gap-3 text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=61565032785498"
              aria-label="YouTube"
              title="YouTube"
            >
              <FacebookIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.instagram.com/prefacetechnology/"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://twitter.com/prefacetech"
              aria-label="Twitter"
              title="Twitter"
            >
              <TwitterIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/prefacetechnology/"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="size-5 transition duration-200 hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-around gap-8 md:flex-1 md:flex-row md:gap-20">
          <div className="flex flex-col text-sm">
            <h2 className="mb-5 font-semibold text-gray-800">Company</h2>
            <a
              href="/"
              className="py-1 transition duration-200 hover:text-black"
              aria-label="Home"
              title="Home"
            >
              Home
            </a>
            <a
              href="/about"
              className="py-1 transition duration-200 hover:text-black"
              aria-label="About"
              title="About"
            >
              About
            </a>
            <a
              href="/careers"
              className="py-1 transition duration-200 hover:text-black"
              aria-label="Careers"
              title="Careers"
            >
              Careers
            </a>
            <a
              href="/partners"
              className="py-1 transition duration-200 hover:text-black"
              aria-label="Partners"
              title="Partners"
            >
              Partners
            </a>
          </div>
          <div>
            <h2 className="mb-5 font-semibold text-gray-800">
              Subscribe to our newsletter
            </h2>
            <div className="max-w-xs space-y-6 text-sm">
              <p>
                Get updates on our latest software solutions, articles, and
                resources delivered weekly.
              </p>
              <form className="flex items-center justify-center gap-2 rounded-md bg-gray-100 p-1.5">
                <input
                  className="w-full max-w-64 rounded px-2 py-2 outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button className="rounded bg-green-600 px-4 py-2 text-white transition hover:opacity-90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col text-sm items-center justify-between gap-4 border-t border-gray-200 py-4 md:flex-row">
        <p className="text-center">
          Copyright 2025 ©{" "}
          <a href="https://prefacetechnology.com">
            Preface Technology Pvt. Ltd.
          </a>{" "}
          All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/privacy-policy"
            className="transition duration-200 hover:text-black"
            aria-label="Privacy Policy"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="transition duration-200 hover:text-black"
            aria-label="Terms of Service"
            title="Terms of Service"
          >
            Terms of Service
          </a>
          <a
            href="/cookie-policy"
            className="transition duration-200 hover:text-black"
            aria-label="Cookie Policy"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

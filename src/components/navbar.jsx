import {
  MenuIcon,
  XIcon,
  ChevronDown,
  FileTextIcon,
  ImageUpIcon,
  FileVideo,
  AudioLines,
  LightbulbIcon,
} from "lucide-react";
import { useState } from "react";
import logo from "../assets/img/logo.png";
import { CircleArrowRight } from "lucide-react";

import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Products",
      subLinks: [
        {
          name: "School Management",
          href: "/products/school-management",
          icon: FileTextIcon,
          description: "Manage schools efficiently",
        },
        {
          name: "Campus Solutions",
          href: "/products/campus-solutions",
          icon: ImageUpIcon,
          description: "Smart campus management tools",
        },
        {
          name: "Water Supply System",
          href: "/products/water-supply",
          icon: FileVideo,
          description: "Monitor and manage water supply",
        },
        {
          name: "Cooperative Software",
          href: "/products/cooperative-software",
          icon: AudioLines,
          description: "Streamline cooperative operations",
        },
        {
          name: "Custom Solutions",
          href: "/products/custom-solutions",
          icon: LightbulbIcon,
          description: "Tailored software for your needs",
        },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact-us" },
    // { name: "Team ", href: "/team-member" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200/70 bg-white/50 px-4 py-3 backdrop-blur-md md:px-16 lg:px-24">
        <div className="flex items-center gap-3">
          <Link to="https://prefacetechnology.com">
            <img
              src={logo}
              alt="Preface Technology"
              className="sm:h-10 h-9 w-auto"
              width={205}
              height={48}
            />
          </Link>
          <span className="sm:text-2xl text-2xl font-bold font-metricas leading-none text-gray-500">
            <strong className="font-metricas text-green-600">Preface</strong>{" "}
            Tech
          </span>
        </div>

        <div className="hidden items-center space-x-8 text-sm text-gray-700 md:flex">
          {links.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex cursor-pointer items-center gap-1 hover:text-black">
                  {link.name}
                  <ChevronDown
                    className={`mt-px size-4 transition-transform duration-200 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`absolute top-6 left-0 z-40 w-lg rounded-md border border-green-100 bg-white p-3 shadow-lg transition-all duration-200 ease-in-out ${
                    openDropdown === link.name
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <p>Explore our solutions</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        to={sub.href}
                        key={sub.name}
                        className="group/link flex items-center gap-2 rounded-md p-2 transition hover:bg-green-100"
                      >
                        <div className="w-max gap-1 rounded-md bg-green-600 p-2">
                          <sub.icon className="size-4.5 text-white transition duration-300 group-hover/link:scale-110" />
                        </div>
                        <div>
                          <p className="font-medium">{sub.name}</p>
                          <p className="font-light text-gray-500 text-xs">
                            {sub.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-green-600 font-semibold" : " text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ),
          )}
        </div>
        <Link to={"/"}>
          <button className="hidden cursor-pointer rounded-full bg-green-600 px-8 py-2 font-medium text-sm text-white transition hover:opacity-90 md:inline-block">
            Get Started <ArrowRight className="inline-block size-4 ml-2" />
          </button>
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="transition active:scale-90 md:hidden"
        >
          <MenuIcon className="size-6.5" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "bg-black/20 backdrop-blur-md"
            : "pointer-events-none bg-transparent backdrop-blur-0"
        }`}
      >
        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <a href="https://prefacetechnology.com">
                <img
                  src={logo}
                  alt="Preface Technology"
                  className="h-7 w-auto"
                  width={205}
                  height={48}
                />
              </a>
              <span className="text-xl font-bold font-metricas leading-none text-gray-500">
                <strong className="font-metricas text-green-600">
                  Preface
                </strong>{" "}
                Tech
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900 active:scale-95"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-4">
            {links.map((link, index) => (
              <div
                key={link.name}
                className="border-b border-gray-100 last:border-b-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.subLinks ? (
                  <div className="py-2">
                    {/* Dropdown Trigger */}
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name,
                        )
                      }
                      className="flex w-full items-center justify-between pl-3 text-md font-medium text-gray-900 transition-all hover:text-green-600 active:scale-95"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          openDropdown === link.name
                            ? "rotate-180 text-green-600"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    {/* Dropdown Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === link.name
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-3 pl-4">
                        {link.subLinks.map((sub, subIndex) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="group flex items-center py-1.5 text-sm text-gray-600 transition-all hover:text-green-600"
                            onClick={() => setIsOpen(false)}
                            style={{
                              animationDelay: `${subIndex * 50 + 200}ms`,
                            }}
                          >
                            <CircleArrowRight className="mr-3 size-4 text-gray-500" />
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="group flex items-center py-2 text-md font-medium text-gray-900 transition-all hover:text-green-600 active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="h-0.5 w-0 bg-green-600 group-hover:w-3 mr-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="absolute bottom-6 left-0 right-0 border-t border-gray-100 px-6">
            <div className="flex flex-col gap-3">
              <Link to={"/"}>
                <button className="w-full rounded-sm bg-gradient-to-r text-sm from-green-600 to-green-800 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay Close Area */}
        {isOpen && (
          <div className="h-full w-full" onClick={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}

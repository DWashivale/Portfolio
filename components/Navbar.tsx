"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-2 bg-dark-900/85 backdrop-blur-xl border-b border-violet-600/10"
        : "py-4 bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — fire "D" image matching the warm accent palette */}
        <a href="#hero" className="flex items-center ml-4 group" aria-label="Home">
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image
              src="/DattaLogo.png"
              alt="DW Logo"
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(251,146,60,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(251,146,60,0.8)] transition-all duration-300"
              priority
            />
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link font-body text-sm tracking-wide transition-colors ${activeSection === link.href.replace("#", "")
                  ? "!text-violet-400"
                  : ""
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium font-body
            bg-violet-600/20 border border-violet-500/30 text-violet-300
            hover:bg-violet-600/40 hover:border-violet-400/60 hover:text-white
            transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-violet-400 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-dark-800/95 backdrop-blur-xl border-t border-violet-600/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-violet-400 font-body text-sm py-2 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 text-center px-5 py-2.5 rounded-full text-sm font-medium
              bg-violet-600 text-white hover:bg-violet-500 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

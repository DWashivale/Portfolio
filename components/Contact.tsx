"use client";

import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dattatraywashivale23498@gmail.com",
    href: "mailto:dattatraywashivale23498@gmail.com",
    color: "from-rose-600/20 to-pink-600/10",
    border: "border-rose-500/20",
    hoverBorder: "hover:border-rose-400/50",
    iconColor: "text-rose-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dattatray-washivale",
    href: "https://www.linkedin.com/in/dattatraywashivale/",
    color: "from-blue-600/20 to-cyan-600/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/50",
    iconColor: "text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DWashivale",
    href: "https://github.com/DWashivale",
    color: "from-violet-600/20 to-purple-600/10",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/50",
    iconColor: "text-violet-400",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-14 pb-10 md:pt-24 md:pb-10 bg-dark-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="orb w-[500px] h-[500px] bg-violet-700/10 top-0 left-1/2 -translate-x-1/2" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(139,92,246,0.1) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="reveal mb-4">
          {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
            06 / Contact
          </span> */}
        </div>

        <h2 className="reveal font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Build Something{" "}
          <span className="gradient-text glow-text">Great Together</span>
        </h2>

        <p className="reveal text-gray-400 font-body text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          I'm actively seeking new opportunities in Frontend Development.
          Whether you have a project in mind or just want to connect —
          my inbox is always open.
        </p>

        {/* Location badge */}
        <div className="reveal inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 md:mb-10
          glass border border-violet-500/20 text-gray-400 font-body text-sm">
          <MapPin size={15} className="text-violet-400" />
          <span>Based in Airoli, Navi Mumbai · Open to Remote</span>
        </div>

        {/* CTA button */}
        <div className="reveal mb-8 md:mb-14">
          <a
            href="mailto:dattatraywashivale23498@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
              font-display font-semibold text-white text-lg
              bg-gradient-to-r from-violet-600 to-purple-600
              hover:from-violet-500 hover:to-purple-500
              shadow-xl shadow-violet-600/30 hover:shadow-violet-500/50
              transition-all duration-300 hover:-translate-y-1"
          >
            <Send size={18} />
            Say Hello
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Contact cards */}
        <div className="reveal grid md:grid-cols-3 gap-5 mb-16">
          {contactLinks.map(({ icon: Icon, label, value, href, color, border, hoverBorder, iconColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={`group glass rounded-2xl p-6 border ${border} ${hoverBorder}
                bg-gradient-to-br ${color}
                hover:-translate-y-2 transition-all duration-300
                hover:shadow-xl hover:shadow-violet-600/10`}
            >
              <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10
                flex items-center justify-center mx-auto mb-4
                group-hover:border-white/20 transition-colors`}>
                <Icon size={20} className={iconColor} />
              </div>
              <p className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-2">
                {label}
              </p>
              <p className="text-gray-200 font-body text-sm break-all leading-relaxed">
                {value}
              </p>
              <div className="flex items-center justify-center gap-1 mt-3 text-xs font-mono text-gray-600 group-hover:text-violet-400 transition-colors">
                <span>Open</span>
                <ArrowUpRight size={11} />
              </div>
            </a>
          ))}
        </div>

        {/* Footer divider */}
        <div className="reveal border-t border-white/5 pt-10">
          <p className="text-gray-600 font-body text-sm">
            Designed and Developed by{" "}
            <a
              href="https://linkedin.com/in/dattatraywashivale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 font-medium hover:text-violet-300 transition-colors"
            >
              Dattatray Washivale
            </a>

            {/* Desktop line break only */}
            <span className="hidden md:block h-2" />

            <span className="font-mono text-xs">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                Next.js
              </a>
              {" & "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                Tailwind CSS
              </a>
              {" Hosted on "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                Vercel
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

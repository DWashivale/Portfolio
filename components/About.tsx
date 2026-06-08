"use client";

import { useEffect, useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Rocket } from "lucide-react";

const stats = [
  { value: "1+", label: "Year Experience", icon: Briefcase },
  { value: "3+", label: "Production Apps", icon: Rocket },
  { value: "20+", label: "Screens Built", icon: GraduationCap },
  { value: "2", label: "Frameworks Expert", icon: GraduationCap },
];
//Testing for SSH Keys Setup
export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-14 md:py-24 bg-dark-950 relative overflow-hidden"
    >
      {/* BG accent */}
      <div className="orb w-[400px] h-[400px] bg-violet-800/8 top-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
            About Me
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div className="space-y-6">
            <div className="reveal glass rounded-2xl p-7 glass-hover">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                I'm a{" "}
                <span className="text-violet-300 font-medium">
                  Results-driven Front-End Developer
                </span>{" "}
                with over a year of hands-on experience engineering responsive, scalable
                web applications. I specialize in building clean, component-driven code
                with a strong focus on{" "}
                <span className="text-violet-300">performance optimization</span>,{" "}
                <span className="text-violet-300">UI/UX quality</span>, and
                maintainable architecture.
              </p>
            </div>

            <div className="reveal glass rounded-2xl p-7 glass-hover">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                My expertise spans{" "}
                <span className="text-violet-300">React.js, Next.js, and TypeScript</span>.
                I'm proficient in Redux for state management, React i18next for multilingual
                internationalization, and REST API integration. Currently pursuing my{" "}
                <span className="text-violet-300">MCA from DY Patil University</span>,
                sharpening my computer science foundations.
              </p>
            </div>

            <div className="reveal flex items-center gap-3 text-gray-400 font-body text-sm pl-2">
              <MapPin size={16} className="text-violet-400 flex-shrink-0" />
              <span>Airoli, Navi Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className="reveal glass glass-hover rounded-2xl p-6 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <p className="font-display text-3xl font-bold gradient-text mb-1">
                  {value}
                </p>
                <p className="text-gray-500 text-sm font-body">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

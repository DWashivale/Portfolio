"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Software Developer — Frontend",
    company: "Flint Infotech",
    location: "Vashi, Navi Mumbai",
    period: "May 2025 – Present",
    type: "Full-time",
    color: "from-violet-600 to-purple-600",
    highlights: [
      "Engineered 3 production-grade web applications using React.js, Next.js, and TypeScript, delivering responsive and scalable UIs with reusable component architecture.",
      "Architected centralized state management using React Redux, improving data-flow consistency and reducing redundant API calls across 20+ screens.",
      "Integrated React i18next to deliver seamless multilingual support, enhancing accessibility for users across different regions.",
      "Followed company methodology in 2-week sprints, consistently delivering features on schedule with clean, peer-reviewed, modular code.",
      "Collaborated with backend team on REST API integration, ensuring reliable front-end to back-end data communication.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Redux", "i18next", "REST APIs"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
      id="experience"
      ref={sectionRef}
      className="py-14 md:py-24 bg-dark-950 relative overflow-hidden"
    >
      <div className="orb w-[400px] h-[400px] bg-violet-700/8 top-10 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
            03 / Experience
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Work History
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="reveal relative">
              {/* Card */}
              <div className="glass rounded-2xl overflow-hidden glass-hover">
                {/* Top bar */}
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />

                <div className="p-8">
                  {/* Role header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={15} className="text-violet-400" />
                        <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-violet-300 font-body text-base mt-1">
                        @ {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-500 font-body text-sm">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 font-body text-sm">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-7">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 font-body text-sm leading-relaxed">
                        <ChevronRight size={15} className="text-violet-500 flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full font-mono text-xs
                          bg-dark-700 border border-violet-500/15 text-violet-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

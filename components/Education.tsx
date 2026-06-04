"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "DY Patil University",
    location: "Pune, Maharashtra",
    period: "January 2026 – Present",
    status: "In Progress",
    statusColor: "bg-green-500/15 text-green-400 border-green-500/20",
    icon: GraduationCap,
    gradient: "from-violet-600/20 to-purple-600/10",
    border: "border-violet-500/20",
    description:
      "Pursuing advanced studies in computer applications with a focus on software engineering, algorithms, and modern development practices.",
  },
  {
    degree: "Bachelor of Science",
    short: "B.Sc",
    institution: "Shivaji University",
    location: "Wai, Satara",
    period: "July 2017 – March 2020",
    status: "Completed",
    statusColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    icon: BookOpen,
    gradient: "from-blue-600/15 to-indigo-600/10",
    border: "border-blue-500/20",
    description:
      "Completed Bachelor of Science degree, building a strong foundation in mathematics, physics, and computer science fundamentals.",
  },
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-14 md:py-24 bg-dark-950 relative overflow-hidden"
    >
      <div className="orb w-[400px] h-[400px] bg-indigo-800/8 top-10 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
            05 / Education
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Academic Journey
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.degree}
                className={`reveal glass rounded-2xl overflow-hidden border ${edu.border} glass-hover`}
              >
                {/* Top gradient accent */}
                <div className={`h-1 bg-gradient-to-r ${edu.gradient.replace("/20", "").replace("/10", "")}`}
                  style={{ background: "linear-gradient(to right, #8b5cf6, #c084fc)" }}
                />

                <div className={`bg-gradient-to-br ${edu.gradient} p-6 border-b ${edu.border}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={26} className="text-violet-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${edu.statusColor} font-mono`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-gray-400 font-mono text-xs">({edu.short})</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-violet-300 font-body font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-500 text-sm font-body">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-gray-400 font-body text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

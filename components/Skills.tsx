"use client";

import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    category: "Core Languages",
    icon: "⚡",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-500 to-yellow-400" },
      { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-400" },
      { name: "HTML5 / CSS3", level: 92, color: "from-orange-500 to-red-400" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "🚀",
    skills: [
      { name: "React.js", level: 88, color: "from-cyan-500 to-cyan-400" },
      { name: "Next.js", level: 82, color: "from-gray-400 to-white" },
      { name: "Redux / React Redux", level: 80, color: "from-purple-500 to-violet-400" },
      { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-teal-400" },
    ],
  },
  {
    category: "Tools & Integrations",
    icon: "🛠️",
    skills: [
      { name: "REST API Integration", level: 85, color: "from-green-500 to-emerald-400" },
      { name: "Git & GitHub", level: 82, color: "from-rose-500 to-rose-400" },
      { name: "React i18next", level: 78, color: "from-indigo-500 to-indigo-400" },
      { name: "Axios / Bearer Auth", level: 80, color: "from-amber-500 to-yellow-400" },
    ],
  },
];

const techBadges = [
  "React.js", "Next.js", "TypeScript", "Redux",
  "Tailwind CSS", "REST APIs", "Git", "i18next",
  "Postman", "NPM", "Babel", "Axios",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
            // Animate skill bars
            entry.target.querySelectorAll<HTMLElement>(".skill-fill").forEach((bar) => {
              const target = bar.dataset.width || "0";
              setTimeout(() => {
                bar.style.width = target + "%";
              }, 400);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-14 md:py-24 bg-dark-900 relative overflow-hidden"
    >
      <div className="orb w-[500px] h-[500px] bg-purple-900/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
            02 / Skills
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            My Toolkit
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
        </div>

        {/* Skill categories */}
        <div ref={barsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {skillData.map(({ category, icon, skills }) => (
            <div key={category} className="reveal glass rounded-2xl p-7 glass-hover">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-display text-white font-semibold text-base">
                  {category}
                </h3>
              </div>
              <div className="space-y-5">
                {skills.map(({ name, level, color }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-body text-sm">{name}</span>
                      <span className="text-violet-400 font-mono text-xs">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden skill-bar">
                      <div
                        className={`skill-fill h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
                        data-width={level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="reveal text-center">
          <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full font-body text-sm font-medium
                  bg-violet-600/10 border border-violet-500/20 text-violet-300
                  hover:bg-violet-600/25 hover:border-violet-400/50 hover:text-white
                  transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

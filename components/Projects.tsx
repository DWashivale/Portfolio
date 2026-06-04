"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, ChevronRight, Globe, Shield, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "TransBillBook",
    subtitle: "Logistics Management Platform",
    period: "May 2025 – Dec 2025",
    icon: BarChart3,
    gradient: "from-violet-600/20 to-purple-700/10",
    border: "border-violet-500/20",
    accentColor: "text-violet-400",
    description:
      "A comprehensive web application to manage end-to-end logistics operations, including master data, transactions, and automated report generation. Improved efficiency and visibility across transport workflows.",
    highlights: [
      "Integrated React i18next to implement a language switcher, enabling seamless multilingual support across the entire application.",
      "Managed application state efficiently using React Redux, enabling centralized state management for user interactions, form data, and transaction workflows.",
      "Followed best practices in modular component design, state management, and internationalization, making the application scalable and maintainable.",
    ],
    stack: ["React.js", "TypeScript", "Redux", "Java", "MSSQL", "i18next"],
  },
  {
    title: "Spandan Healthcare",
    subtitle: "Hospital Management System",
    period: "May 2025 – Dec 2025",
    icon: Shield,
    gradient: "from-fuchsia-600/20 to-violet-700/10",
    border: "border-fuchsia-500/20",
    accentColor: "text-fuchsia-400",
    description:
      "A hospital management web application designed to streamline operations across multiple user roles — Doctors, Receptionists, and Patients — within a healthcare environment.",
    highlights: [
      "Implemented role-based authentication supporting 3 login types: Doctors (username & password), Receptionists (username & password), and Patients (mobile number + OTP).",
      "Configured a centralized Axios instance with request interceptors to automatically attach Bearer tokens to every authenticated API call.",
      "Implemented automatic logout on token expiry with a global Axios response interceptor to detect HTTP 401 responses, triggering automatic session termination.",
    ],
    stack: ["Next.js", "TypeScript", "Axios", "Java", "SQL Server", "Bearer Auth"],
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-14 md:py-24 bg-dark-900 relative overflow-hidden"
    >
      <div className="orb w-[500px] h-[500px] bg-purple-800/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
            04 / Projects
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            What I've Built
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`reveal glass rounded-2xl overflow-hidden border ${project.border}
                  hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-violet-600/10 flex flex-col`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-7 border-b ${project.border}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className={project.accentColor} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className={`${project.accentColor} font-body text-sm mt-0.5`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-gray-500 self-start sm:self-auto">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 font-body text-sm leading-relaxed">
                        <ChevronRight size={14} className={`${project.accentColor} flex-shrink-0 mt-0.5`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md font-mono text-xs
                          bg-dark-700 text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More work note */}
        <div className="reveal mt-12 text-center">
          <p className="text-gray-500 font-body text-sm">
            More production projects at{" "}
            <a
              href="https://github.com/DWashivale"
              target="_blank"
              rel="noreferrer"
              className="text-violet-400 hover:text-violet-300 animated-underline inline-flex items-center gap-1 transition-colors"
            >
              GitHub <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef } from "react";

// interface Skill {
//   name: string;
//   level: number;
//   color: string;
// }

// interface SkillCategory {
//   category: string;
//   icon: string;
//   skills: Skill[];
// }

// const skillData: SkillCategory[] = [
//   {
//     category: "Core Languages",
//     icon: "⚡",
//     skills: [
//       { name: "JavaScript (ES6+)", level: 70, color: "from-yellow-500 to-yellow-400" },
//       { name: "TypeScript", level: 75, color: "from-blue-500 to-blue-400" },
//       { name: "HTML5 / CSS3", level: 90, color: "from-orange-500 to-red-400" },
//     ],
//   },
//   {
//     category: "Frameworks & Libraries",
//     icon: "🚀",
//     skills: [
//       { name: "React.js", level: 75, color: "from-cyan-500 to-cyan-400" },
//       { name: "Next.js", level: 65, color: "from-gray-400 to-white" },
//       { name: "Redux / React Redux", level: 65, color: "from-purple-500 to-violet-400" },
//       { name: "Tailwind CSS", level: 80, color: "from-teal-500 to-teal-400" },
//     ],
//   },
//   {
//     category: "Tools & Integrations",
//     icon: "🛠️",
//     skills: [
//       { name: "REST API Integration", level: 85, color: "from-green-500 to-emerald-400" },
//       { name: "Git & GitHub", level: 82, color: "from-rose-500 to-rose-400" },
//       { name: "React i18next", level: 78, color: "from-indigo-500 to-indigo-400" },
//       { name: "Axios / Bearer Auth", level: 80, color: "from-amber-500 to-yellow-400" },
//     ],
//   },
// ];

// const techBadges = [
//   "React.js", "Next.js", "TypeScript", "Redux",
//   "Tailwind CSS", "REST APIs", "Git", "i18next",
//   "Postman", "NPM", "Babel", "Axios",
// ];

// export default function Skills() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const barsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => el.classList.add("visible"), i * 100);
//             });
//             // Animate skill bars
//             entry.target.querySelectorAll<HTMLElement>(".skill-fill").forEach((bar) => {
//               const target = bar.dataset.width || "0";
//               setTimeout(() => {
//                 bar.style.width = target + "%";
//               }, 400);
//             });
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="skills"
//       ref={sectionRef}
//       className="py-14 md:py-24 bg-dark-900 relative overflow-hidden"
//     >
//       <div className="orb w-[500px] h-[500px] bg-purple-900/10 bottom-0 left-0" />

//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="reveal mb-16">
//           {/* <span className="font-mono text-xs text-violet-400 tracking-[0.3em] uppercase">
//             02 / Skills
//           </span> */}
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
//             My Toolkit
//           </h2>
//           <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
//         </div>

//         {/* Skill categories */}
//         <div ref={barsRef} className="grid md:grid-cols-3 gap-8 mb-16">
//           {skillData.map(({ category, icon, skills }) => (
//             <div key={category} className="reveal glass rounded-2xl p-7 glass-hover">
//               <div className="flex items-center gap-3 mb-6">
//                 <span className="text-2xl">{icon}</span>
//                 <h3 className="font-display text-white font-semibold text-base">
//                   {category}
//                 </h3>
//               </div>
//               <div className="space-y-5">
//                 {skills.map(({ name, level, color }) => (
//                   <div key={name}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-300 font-body text-sm">{name}</span>
//                       <span className="text-violet-400 font-mono text-xs">{level}%</span>
//                     </div>
//                     <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden skill-bar">
//                       <div
//                         className={`skill-fill h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
//                         data-width={level}
//                         style={{ width: "0%" }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tech badges */}
//         <div className="reveal text-center">
//           <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-6">
//             Technologies I work with
//           </p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {techBadges.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-4 py-2 rounded-full font-body text-sm font-medium
//                   bg-violet-600/10 border border-violet-500/20 text-violet-300
//                   hover:bg-violet-600/25 hover:border-violet-400/50 hover:text-white
//                   transition-all duration-300 cursor-default"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiAxios, SiPostman, SiBabel, SiFormik, SiMui, SiNpm, SiVite } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },

  { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },

  { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },

  { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },

  { icon: <FaReact className="text-[#61DAFB]" />, name: "React.js" },

  { icon: <RiNextjsFill className="text-white" />, name: "Next.js" },

  { icon: <SiRedux className="text-[#764ABC]" />, name: "Redux" },

  { icon: <RiTailwindCssFill className="text-[#06B6D4]" />, name: "Tailwind CSS" },

  { icon: <SiAxios className="text-[#5A29E4]" />, name: "Axios" },

  { icon: <TbApi className="text-[#22C55E]" />, name: "REST APIs" },

  { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },

  { icon: <FaGithub className="text-white" />, name: "GitHub" },

  { icon: <VscVscode className="text-[#007ACC]" />, name: "VS Code" },

  { icon: <SiBabel className="text-[#F9DC3E]" />, name: "Babel" },

  { icon: <SiPostman className="text-[#FF6C37]" />, name: "Postman" },

  { icon: <MdLanguage className="text-[#8B5CF6]" />, name: "React i18next" },
  { icon: <SiFormik className="text-[#2563EB]" />, name: "Formik" },

  { icon: <SiMui className="text-[#007FFF]" />, name: "Material UI" },

  { icon: <SiNpm className="text-[#CB3837]" />, name: "NPM" },

  { icon: <SiVite className="text-[#646CFF]" />, name: "Vite" },
];
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, i * 80);
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
      className={`py-14 md:py-24 relative overflow-hidden ${theme === "dark"
        ? "bg-dark-900"
        : "bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50"
        }`}

    >
      {/* Background Orb */}
      <div className="orb w-[500px] h-[500px] bg-purple-900/10 bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            My Toolkit
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-transparent mt-4" />
          <p className="text-gray-400 mt-5 max-w-2xl leading-relaxed">
            Technologies, frameworks, and tools I use to build modern,
            responsive, and scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
        reveal
        group
        relative
        overflow-hidden
        glass
        rounded-2xl
        p-5 md:p-6
        flex flex-col items-center justify-center text-center
        border border-white/5
        transition-all duration-500
        hover:-translate-y-3
        hover:border-violet-500/40
        hover:bg-violet-500/5
        hover:shadow-[0_15px_40px_rgba(139,92,246,0.2)]
      "
            >
              {/* Top Hover Line */}
              <div
                className="
          absolute top-0 left-0 h-[2px] w-0
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-400
          to-violet-500
          transition-all duration-500
          group-hover:w-full
        "
              />

              {/* Icon Container */}
              <div
                className="
          relative
          flex items-center justify-center
          w-16 h-16 md:w-20 md:h-20
          rounded-2xl
          bg-white/[0.03]
          border border-white/10
          mb-4
          transition-all duration-500
          group-hover:border-violet-500/30
          group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
        "
              >
                {/* Glow Effect */}
                <div
                  className="
            absolute inset-0
            rounded-2xl
            bg-violet-500/10
            blur-xl
            opacity-0
            transition-all duration-500
            group-hover:opacity-100
          "
                />

                {/* Icon */}
                <div
                  className="
            relative
            text-4xl md:text-5xl
            transition-all duration-500
            group-hover:scale-125
            group-hover:-translate-y-1
          "
                >
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3
                className="
          text-sm md:text-base
          font-semibold
          tracking-wide
          text-gray-300
          group-hover:text-white
          transition-all duration-300
        "
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="reveal text-center mt-14">
          <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
            Always Learning • Always Building
          </p>
        </div>
      </div>
    </section>
  );
}
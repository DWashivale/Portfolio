"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown, Code2, Zap } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ["#8b5cf6", "#a78bfa", "#c084fc", "#7c3aed"];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139,92,246,${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-950 pt-20 pb-16 md:pt-0 md:pb-0"
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.55 }} />

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 top-[-80px] left-[-180px] animate-float" />
      <div className="orb w-[350px] h-[350px] bg-purple-500/8 bottom-[-80px] right-[-80px]" style={{ animationDelay: "3s" }} />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5
                bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-body
                opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Zap size={12} className="text-violet-400" />
              Available for opportunities
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Name */}
            <h1
              className="font-display font-bold tracking-tight mb-3
                text-4xl sm:text-5xl md:text-5xl lg:text-7xl
                opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-white">Dattatray</span>
              <br />
              <span className="gradient-text glow-text">Washivale</span>
            </h1>

            {/* Title */}
            <div
              className="flex items-center justify-center md:justify-start gap-3 mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-500 hidden md:block" />
              <p className="font-mono text-xs sm:text-sm text-violet-400 tracking-widest uppercase">
                Software Developer — Frontend
              </p>
            </div>

            {/* Tagline */}
            <p
              className="text-gray-400 text-sm sm:text-base md:text-lg font-body max-w-lg mx-auto md:mx-0 leading-relaxed mb-7
                opacity-0 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              Crafting fast, beautiful & scalable web experiences with{" "}
              <span className="text-violet-300">React</span>,{" "}
              <span className="text-violet-300">Next.js</span> &{" "}
              <span className="text-violet-300">TypeScript</span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-7
                opacity-0 animate-fade-up"
              style={{ animationDelay: "0.85s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium font-body text-sm
                  bg-gradient-to-r from-violet-600 to-purple-600 text-white
                  hover:from-violet-500 hover:to-purple-500
                  shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40
                  transition-all duration-300 hover:-translate-y-1"
              >
                <Code2 size={15} />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium font-body text-sm
                  bg-transparent border border-violet-500/40 text-violet-300
                  hover:bg-violet-600/15 hover:border-violet-400/70 hover:text-white
                  transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={15} />
                Get In Touch
              </a>
            </div>

            {/* Social icons */}
            <div
              className="flex items-center justify-center md:justify-start gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              {[
                { href: "https://github.com/DWashivale", label: "GitHub", icon: <Github size={17} /> },
                { href: "https://linkedin.com/in/dattatraywashivale", label: "LinkedIn", icon: <Linkedin size={17} /> },
                { href: "mailto:dattatraywashivale23498@gmail.com", label: "Email", icon: <Mail size={17} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center
                    text-gray-400 hover:text-violet-400 hover:border-violet-500/50
                    transition-all duration-300 hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Profile photo ── */}
          <div
            className="flex-shrink-0 order-1 md:order-2
              opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Outer glow ring */}
            <div className="relative">
              {/* Spinning gradient border */}
              <div
                className="absolute -inset-[3px] rounded-2xl md:rounded-3xl z-0"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a78bfa, #c084fc, #7c3aed)",
                  backgroundSize: "300% 300%",
                  animation: "borderSpin 4s linear infinite",
                  opacity: 0.7,
                }}
              />

              {/* Glow halo */}
              <div className="absolute -inset-4 rounded-3xl bg-violet-600/15 blur-2xl z-[-1]" />

              {/* Photo container */}
              <div
                className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden
                  w-52 h-64 sm:w-60 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96"
                style={{ background: "linear-gradient(160deg, #1e1b38 0%, #0d0b1e 100%)" }}
              >
                <Image
                  src="/image.png"
                  alt="Dattatray Washivale"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 256px, 320px"
                />

                {/* Bottom gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge on photo */}
                {/* <div className="absolute bottom-3 left-3 right-3">
                  <div className="glass rounded-xl px-3 py-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="font-mono text-[10px] text-gray-300 tracking-wide">
                      Open to Work
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Stats below photo — desktop only */}
            {/* <div className="hidden md:flex items-center justify-center gap-4 mt-4">
              {[
                { val: "1+", lbl: "Yr Exp" },
                { val: "3+", lbl: "Apps" },
                { val: "20+", lbl: "Screens" },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="text-center">
                  <p className="font-display text-lg font-bold gradient-text">{val}</p>
                  <p className="font-mono text-[10px] text-gray-500 tracking-wider">{lbl}</p>
                </div>
              ))}
            </div> */}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5
          text-gray-500 hover:text-violet-400 transition-colors animate-bounce"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}

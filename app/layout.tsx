import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Datta Washivale",
  description:
    "Results-driven Front-End Developer specializing in React.js, Next.js, and TypeScript. Building responsive, scalable web applications.",
  keywords: ["React", "Next.js", "TypeScript", "Frontend Developer", "Dattatray Washivale"],
  openGraph: {
    title: "Dattatray Washivale — Frontend Developer",
    description: "Building fast, beautiful, and scalable web applications.",
    type: "website",
  },
  icons: {
    icon: "/DattaLogo.png", // or "/logo.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

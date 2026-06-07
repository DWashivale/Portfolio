"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/DWashivale",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dattatraywashivale",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/datta_washivale",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://x.com/DattaW55985",
    icon: FaXTwitter,
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div
      className={`flex items-center gap-5 justify-center sm:justify-start ${className}`}
    >
      {SOCIAL_LINKS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-violet-400 transition-all duration-300"
        >
          <item.icon size={30} />
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
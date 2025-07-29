import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithubSquare,
      href: "https://github.com/ksm007",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/kartik-marathe",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/kartikmarathe007",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send/?phone=918088165214&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-200"
                title={social.name}
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">
              <a
                href="mailto:kartiksm007@gmail.com"
                className="hover:text-primary transition-colors"
              >
                kartiksm007@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">Arizona, USA</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span>© {currentYear} Kartik Marathe</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

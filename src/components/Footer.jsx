import React from "react";
import { FaGithubSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <div className="flex flex-row gap-6  400 text-4xl">
          <a href="https://github.com/ksm007" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/kartikmarathe007" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=918088165214&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

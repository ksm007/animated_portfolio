import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import Hero3D from "./Hero3D";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";

const Hero = ({ onViewResume }) => {
  return (
    <div
      className="mt-16 sm:mt-20 md:mt-24 mb-16 md:mb-20 max-w-[1200px] mx-auto relative px-4"
      id="hero"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        <motion.div
          className="order-1 md:order-1"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Backend Developer",
              1000,
              "Data Engineer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold  400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" 200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-primary">KARTIK MARATHE</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className=" 300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I’m a full‑stack engineer with an M.S. in Computer Science from ASU
            (’26) and over two years at Boeing building scalable Spring Boot
            APIs, cloud‑native Angular/React applications, cloud infrastructure
            and end‑to‑end data visualization pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold  200 md:w-auto p-4 border
                                     border-primary rounded-xl"
              onClick={onViewResume || (() => (window.location.href = Resume))}
            >
              View Resume
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl   z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/ksm007"
                target="_blank"
                className="text-primary"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com/in/kartik-marathe-360013168"
                target="_blank"
                className="text-primary"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/kartikmarathe007"
                target="_blank"
                className="text-primary"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="
    order-2 md:order-2 
    w-[280px] h-[280px] md:w-[400px] md:h-[400px] 
    mt-8 md:mt-16 lg:mt-0
    relative
    flex items-center justify-center
  "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Hero3D />
        </motion.div>
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;

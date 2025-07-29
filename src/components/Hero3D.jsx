// components/Hero3D.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { SiSpringboot, SiNextdotjs, SiPostgresql } from "react-icons/si";

const CUBE_SIZE = 300;
const HALF = CUBE_SIZE / 2;

export default function Hero3D() {
  const faces = [
    {
      icon: <FaReact style={{ fontSize: 80 }} className="text-blue-400" />,
      transform: `rotateY(0deg) translateZ(${HALF}px)`,
    },
    {
      icon: <FaNodeJs style={{ fontSize: 80 }} className="text-green-400" />,
      transform: `rotateY(90deg) translateZ(${HALF}px)`,
    },
    {
      icon: <FaAws style={{ fontSize: 80 }} className="text-yellow-400" />,
      transform: `rotateY(180deg) translateZ(${HALF}px)`,
    },
    {
      icon: (
        <SiSpringboot style={{ fontSize: 80 }} className="text-green-400" />
      ),
      transform: `rotateY(-90deg) translateZ(${HALF}px)`,
    },
    {
      icon: <SiNextdotjs style={{ fontSize: 80 }} className="text-white" />,
      transform: `rotateX(90deg) translateZ(${HALF}px)`,
    },
    {
      icon: <SiPostgresql style={{ fontSize: 80 }} className="text-blue-600" />,
      transform: `rotateX(-90deg) translateZ(${HALF}px)`,
    },
  ];

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          width: CUBE_SIZE,
          height: CUBE_SIZE,
          position: "relative",
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {faces.map(({ icon, transform }, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              width: CUBE_SIZE,
              height: CUBE_SIZE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              border: "4px solid var(--primary)",
              backfaceVisibility: "hidden",
              transformOrigin: "center center",
              transform,
            }}
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

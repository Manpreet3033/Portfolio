import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Resume from "../assets/Manpreets_Resume.pdf";
import { wrapper } from "../hoc";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm &nbsp;
            <a
              href={Resume}
              download="Resume"
              className="text-[#915eff] relative z-10 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? "Download CV" : "Manpreet"}
            </a>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop user interfaces,web applications{" "}
            <br className="sm:block hidden" />
            and solve real world problems using Data Structures.
          </p>
        </div>
      </div>
      <ComputersCanvas className="z-[-30]" />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                y: [0, 27, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import profileImage from "../assets/avatar.png";
import { styles } from "../styles";
import React from "react";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`mt-[5rem] absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1 mt-[5rem]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span>Hi, I'm&nbsp;</span>
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-[#915EFF]">Vamshi</span>',
                    '<span class="text-[#915EFF]">Vamshi</span>'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            UIUX Designer | Web Developer <br className="sm:block hidden" />
            Building user-centric designs and digital experiences.
          </p>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="flex justify-center w-full md:w-auto"
        >
          <div className="w-[400px] h-[400px] relative top-[-20px] md:top-[-30px]">
            <div className="absolute inset-0 blue-gradient rounded-full shadow-lg" />
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-contain rounded-full relative z-10 top-[-20px] md:top-[-30px] shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={live}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]'
        >
          Following projects showcase my skills and experience through real-world applications designed and 
          developed.
          Each project is briefly described along with links.
          These projects reflect my ability to build user-friendly designs and deliver efficient, real-time solutions using modern technologies.
        </motion.p>
      </div>

      <motion.div
        className='mt-20 flex flex-wrap gap-7'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={{
              hidden: {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                rotate: index % 2 === 0 ? -5 : 5
              },
              visible: {
                opacity: 1,
                x: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "project");
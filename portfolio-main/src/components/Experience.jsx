import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        className="text-left" // Changed from text-center
      >
        <p className={styles.sectionSubText}>
          My professional journey
        </p>
        <h2 className={styles.sectionHeadText}>
          Education.
        </h2>
      </motion.div>

      <motion.div 
        className='mt-20 flex flex-col'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <VerticalTimeline lineColor="#3e3b4d">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { trainings } from "../constants/Trainings";
import { fadeIn, textVariant } from "../utils/motion";
import { live } from "../assets";

const TrainingCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full sm:w-[360px]"
        >
            <Tilt
                options={{
                    max: 15,
                    scale: 1,
                    speed: 450,
                    glare: true,
                    "max-glare": 0.2,
                }}
                className="bg-tertiary p-5 rounded-2xl h-full shadow-lg hover:shadow-xl transition-shadow"
            >
                <div className="relative w-full h-[230px] group">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                            title="View Certificate"
                        >
                            <img src={live} alt="source code" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]  transition-colors">
                        {name}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px] line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <motion.p
                            key={`${name}-${tag.name}`}
                            whileHover={{ scale: 1.1 }}
                            className={`text-[14px] px-3 py-1 rounded-full ${tag.color} bg-opacity-20`}
                        >
                            #{tag.name}
                        </motion.p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Training = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Learning Journey</p>
                <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]"
            >
                These certifications reflect my commitment to continuous learning. From mastering UX Design, Figma and Frontend Development, each step has enhanced my technical expertise and practical problem-solving capabilities.
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='flex flex-row flex-wrap justify-center gap-10 py-10'
            >
                {trainings.map((training, index) => (
                    <TrainingCard key={`training-${index}`} index={index} {...training} />
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Training, "training");
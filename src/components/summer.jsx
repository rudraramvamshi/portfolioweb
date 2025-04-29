import { summerTrainings } from "../constants/summer";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const SummerCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My experience</p>
        <h2 className={styles.sectionHeadText}>Internships.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px] mb-12"
      >
        These professional experiences showcase my practical skills and industry exposure.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {summerTrainings.map((training, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.1
            }}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 400 }
            }}
            className="bg-tertiary p-6 rounded-2xl shadow-lg hover:shadow-xl"
          >
            <div className="flex items-start mb-4">
              {training.image && (
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-16 h-16 object-contain mr-4 rounded"
                />
              )}
              <div>
                <h3 className="text-white font-bold text-[20px]">{training.title}</h3>
                <p className="text-secondary text-[16px]">{training.company}</p>
                <p className="text-secondary text-[14px]">{training.date}</p>
              </div>
            </div>

            <ul className="mb-4 pl-5 list-disc">
              {training.description.map((item, i) => (
                <li key={i} className="mb-2 text-secondary text-[14px]">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {training.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-[#151030] rounded-lg text-[14px] text-secondary border border-[#2e2b5e]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {training.link && (
              <a
                href={training.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[14px] text-blue-400 hover:text-blue-300"
              >
                View Certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SummerCard;
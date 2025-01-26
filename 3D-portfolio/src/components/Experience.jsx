import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

const ExperienceCard = ({ experience }) => {
  const { language } = useLanguage();
  const exp = experience.translations[language];

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836, #232631)",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={exp.date}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <motion.img
            src={experience.icon}
            alt={exp.company_name}
            className="w-[60%] h-[60%] object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      }
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {exp.company_name}
        </p>
      </motion.div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {exp.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.experience.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{t.experience.title}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
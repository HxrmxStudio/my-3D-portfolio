import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import React from "react"
import { styles } from '../styles'
import { github, demo } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../utils/translations'

const ProjectCard = React.memo(({ index, translations, tags, image, source_code_link1, source_code_link2 }) => {
  const { language } = useLanguage()
  const project = translations[language]

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <motion.div
              onClick={() => window.open(source_code_link2, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              aria-label="View Demo"
            >
              <img src={demo} alt="Demo" className="w-1/2 h-1/2 object-contain" />
            </motion.div>
            <motion.div
              onClick={() => window.open(source_code_link1, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              aria-label="View GitHub Source Code"
            >
              <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
            </motion.div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.works.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{t.works.title}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t.works.description}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");



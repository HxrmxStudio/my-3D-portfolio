import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../utils/translations'

const ServiceCard = React.memo(({ index, title, icon }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt={`${title} icon`}
            aria-hidden="true"
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
});

const About = () => {
  const { language } = useLanguage()

  const t = translations[language]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.about.introduction}</p>
        <h2 className={styles.sectionHeadText}>{t.about.overview}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t.about.description.split('\n').map((text, idx) => (
          <React.Fragment key={idx}>
            {text}
            <br />
          </React.Fragment>
        ))}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');

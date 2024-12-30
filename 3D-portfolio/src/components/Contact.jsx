import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { github, linkedin, discord } from '../assets'
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../utils/translations"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }

    setLoading(true)

    emailjs
      .send(
        'service_0ws3qsd',
        'template_bs9aqbj',
        {
          from_name: form.name,
          to_name: 'Emiliano',
          from_email: form.email,
          to_email: 'emilianorozas@gmail.com',
          message: form.message,
        },
        'aGWJkHMIlLzK1HRoZ'
      )
      .then(() => {
        setLoading(false)
        console.log("Toast success should appear now.") // Depuración
        toast.success('Thank you. I will get back to you as soon as possible!')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        setLoading(false)
        console.error(error.message)
        toast.error('Something went wrong. Please try again later.')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* Contenedor de notificaciones */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-lg'
      >
        <p className={styles.sectionSubText}>{t.contact.get_in_touch}</p>
        <h3 className={styles.sectionHeadText}>{t.contact.title}</h3>
        <div className='mt-4 flex gap-4'>
          <a href='https://www.linkedin.com/in/emilianorozas' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='w-9 h-8' />
          </a>
          <a href='https://github.com/HxrmxStudio' target='_blank' rel='noopener noreferrer'>
            <img src={github} alt='GitHub' className='w-9 h-8' />
          </a>
          <a href='https://discordapp.com/users/hxrmx' target='_blank' rel='noopener noreferrer'>
            <img src={discord} alt='Discord' className='w-9 h-8' />
          </a>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t.contact.your_name}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.placeholder_name}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t.contact.your_email}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t.contact.placeholder_email}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t.contact.your_message}</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.placeholder_message}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')

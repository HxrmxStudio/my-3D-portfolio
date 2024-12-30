import React from 'react'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Footer() {
    const { language } = useLanguage()
    const t = translations[language]

    return (
        <footer className='bg-black '>
            <div className='container mx-auto'>
                <p className='py-5 text-sm text-center text-white'>
                    {t.footer.made_by} |{''}
                    <a
                        href='mailto:emilianorozas@gmail.com'
                        className='underline text-violet-400 hover:text-violet-600'
                    >
                        emilianorozas@gmail.com
                    </a>{' '}
                    | {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}

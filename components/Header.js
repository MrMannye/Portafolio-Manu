import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    const renderThemeChange = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunIcon
                    className='text-black w-7 h-7 transition-all duration-200 ease-in'
                    role='button'
                    onClick={() => setTheme('light')}
                />
            )
        } else {
            return (
                <MoonIcon
                    className='text-white w-7 h-7 transition-all duration-200 ease-in'
                    role='button'
                    onClick={() => setTheme('dark')}
                />
            )
        }
    }

    return (
        <div className='flex justify-between z-50 items-center px-3 sticky top-0 dark:bg-black bg-white'>
            <div className='flex justify-center items-center space-x-4 text-sm'>
                <img src="/Manu.svg" alt="Logo Manu" className=' h-24' />
                <div className='hidden sm:flex justify-center items-center space-x-4 text-sm px-4'>
                    <a href="#about"><p className='cursor-pointer'>About</p></a>
                    <a href="#skills"><p className='cursor-pointer'>Skills</p></a>
                    <a href="#works"><p className='cursor-pointer'>Works</p></a>
                    <a href="#contact"><p className='cursor-pointer'>Contact</p></a>
                </div>
            </div>
            <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                    className='mr-6 p-2 cursor-pointer rounded-lg dark:bg-yellow-500 bg-blue-600'
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {renderThemeChange()}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
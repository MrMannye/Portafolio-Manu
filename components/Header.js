import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'

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
        <div className='flex justify-between z-50 items-center px-3 sticky top-0 dark:bg-black'>
            <div className='flex justify-center items-center space-x-4 text-sm'>
                <Link href="/">
                    <img src="/Manu.svg" alt="Logo Manu" className=' h-24 cursor-pointer' />
                </Link>
                <div className='hidden sm:flex justify-center items-center space-x-4 text-sm px-4'>
                    <Link href="/#about" className='link'><p className='cursor-pointer'>About</p></Link>
                    <Link href="/#skills" className='link'><p className='cursor-pointer'>Skills</p></Link>
                    <Link href="/#works" className='link'><p className='cursor-pointer'>Works</p></Link>
                    <Link href="/#contact" className='link'><p className='cursor-pointer'>Contact</p></Link>
                    <Link href="/galeria" className='link'><p className='cursor-pointer'>Galeria</p></Link>
                </div>
                <div className='dark:hidden'>
                    <form method="get" action='http://www.google.com/search' target='_blank' className='google__form'>
                        <input type="search" className='google__input dark:bg-black' autoComplete='off' name='q' placeholder='B??squeda' required/>
                        <input type='submit' className='btn btn-primary' value="Google"/>
                    </form>
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
import {MoonIcon, SunIcon} from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';

export default function Header(){

    const {systemTheme ,theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChange = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme; 
        if(currentTheme === 'dark'){
            return(
                <SunIcon 
                    className='text-yellow-600 w-7 h-7 transition-all duration-200 ease-in'
                    role='button'
                    onClick={() => setTheme('light')}
                />
            )
        } else {
            return(
                <MoonIcon 
                    className='text-blue-500 w-7 h-7 transition-all duration-200 ease-in'
                    role='button'
                    onClick={() => setTheme('dark')}
                />
            )
        }
    }

    return(
        <div className='flex justify-between items-center px-3 sticky top-0'>
            <div className='flex justify-center items-center space-x-4 text-sm'>
                <img src="/Manu.svg" alt="Logo Manu" className=' h-24'/>
                <div className='hidden sm:flex justify-center items-center space-x-4 text-sm px-4'>
                    <p className='cursor-pointer'>About</p>
                    <p className='cursor-pointer'>Education</p>
                    <p className='cursor-pointer' >Works</p>
                    <p className='cursor-pointer'>Certificades</p>
                </div>
            </div>
            <div className='mr-6 p-2 rounded-full hover:bg-gray-300 transition-all duration-200 ease-in'>
                {renderThemeChange()}
            </div>
        </div>
    )
}
import { AcademicCapIcon } from "@heroicons/react/solid"
import VoxelDog from "./voxel-dog"
import {motion} from 'framer-motion'

function Index() {
    return (
        <div className='flex w-screen sm:h-screen sm:-mb-24'>
            <div className='flex-1 items-center justify-center'>
                <div className='flex flex-col h-2/3 space-y-4 p-12'>
                    <h2 className='text-3xl font-light'>Hello, My name is</h2>
                    <h2 className='text-5xl sm:text-6xl font-bold'>Miguel Aguilera</h2>
                    <div className='h-[50px] overflow-hidden'>
                        <motion.div 
                            className='text-blue-900 h-full dark:text-green-600' 
                            animate={{y:[0, -50, -100, -150, -100, -50, 0]}}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut"}}
                        >
                            <div className='h-[50px] text-2xl font-bold flex items-center'>Frontend Developer</div>
                            <div className='h-[50px] text-2xl font-bold flex items-center'>Backend Developer</div>
                            <div className='h-[50px] text-2xl font-bold flex items-center'>UI/UX Designer</div>
                            <div className='h-[50px] text-2xl font-bold flex items-center'>Spark AR Effects</div>
                        </motion.div>
                    </div>
                    <p className=' hidden sm:inline-block tracking-wider sm:-mr-64 xl:-mr-0'>
                        Mi nombre es Miguel Aguilera y soy un desarrollador Frontend y Backend.
                        Actualmente estoy cursando mi 4to semestre en la Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas
                    </p>
                    <a href="#about" className='hidden xl:flex items-center justify-center space-x-2 text-white dark:bg-green-400 px-2 rounded-lg w-2/5 bg-blue-900 link'>
                        <p className='text-lg font-semibold xl:pt-2'>Scroll Down</p>
                        <i className="uil uil-mouse scroll__icon -mt-2"></i>
                    </a>
                </div>
            </div>
            <div className='sm:flex-1 -mt-20 sm:mt-0 sm:h-2/3 w-full p-12 sm:-ml-14 justify-center items-center'>
                <VoxelDog></VoxelDog>
            </div>
        </div>
    )
}

export default Index

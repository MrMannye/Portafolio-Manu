import { AcademicCapIcon } from "@heroicons/react/solid"
import VoxelDog from "./voxel-dog"
import {motion} from 'framer-motion'

function Index() {
    return (
        <div className='flex h-screen'>
            <div className='flex-1 items-center justify-center'>
                <div className='flex flex-col h-2/3 space-y-4 p-12'>
                    <h2 className='text-3xl font-light'>Hello, My name is</h2>
                    <h2 className='text-6xl font-bold'>Miguel Aguilera</h2>
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
                    <p className='tracking-wider'>
                        Mi nombre es Miguel Aguilera y soy un desarrollador Frontend y Backend.
                        Actualmente estoy cursando mi 4to semestre en la escuela Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas
                    </p>
                </div>
            </div>
            <div className='flex-1 h-2/3 w-full p-12 -ml-20 justify-center items-center'>
                <VoxelDog></VoxelDog>
            </div>
        </div>
    )
}

export default Index

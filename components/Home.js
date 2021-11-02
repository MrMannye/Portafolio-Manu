import { AcademicCapIcon } from "@heroicons/react/solid"
import VoxelDog from "./voxel-dog"

function Index() {
    return (
        <div className='grid grid-cols-3 max-w-6xl'>
            <div className='col-start-1 z-10 col-span-1 space-y-6 flex flex-col justify-center ml-10 -mr-20'>
                <h1 className='text-4xl font-bold'>Hola Tu!</h1>
                <p className='tracking-wider'>
                    Mi nombre es Miguel Aguilera y soy un desarrollador Frontend y Backend.
                    Actualmente estoy cursando mi 4to semestre en la escuela Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas
                </p>
                <div className='flex items-center justify-start'>
                    <button className='flex dark:hover:text-black justify-center px-10 text-white items-center space-x-2 rounded-lg hover:shadow-lg py-1 bg-blue-500 transition-all duration-200 ease-in'>
                        <AcademicCapIcon className='h-5'/>
                        <p className='tracking-wide'>About</p>
                    </button>
                </div>
            </div>
            <div className='col-start-2 col-span-2'>
                <VoxelDog></VoxelDog>
            </div>
        </div>
    )
}

export default Index

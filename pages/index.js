import Head from 'next/head'
import Index from '../components/Home'
import {motion} from 'framer-motion'
import About from '../components/About'

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col justify-center py-2"
      key='home'
      initial={{y: -20, opacity:0}}
      animate={{y:0, opacity:1}}
      exit={{y: 20, opacity:0}}
      transition={{duration: 0.2}} 
    >
      <Head>
        <title>Portafolio Manu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col justify-center items-center ml-10 mt-8'>
        <Index></Index>
      </div>
      <div className='-mt-20'>
        <h1 className='px-12 mb-1 italic text-3xl font-black font bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text'>Works</h1>
        <div className='mx-12 h-2 w-2/6 rounded-full bg-gradient-to-r from-blue-500 to-green-400'>
          <span className='text-transparent'>Hola</span>
        </div>
        <About></About>
      </div>
      
    </motion.div>
  )
}

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
      <About></About>
    </motion.div>
  )
}

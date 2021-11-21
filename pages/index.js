import Head from 'next/head'
import Index from '../components/Home'
import {motion} from 'framer-motion'
import Section from '../components/Section'
import About from '../components/About'
import Skills from '../components/Skills'

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
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </Head>
      <div className='flex flex-col justify-center items-center ml-10 mt-8'>
        <Index></Index>
      </div>

      <Section title='Skills'>
        <Skills/>
      </Section>


      <Section title='Works'>
        <About/>
      </Section>


      
    </motion.div>
  )
}

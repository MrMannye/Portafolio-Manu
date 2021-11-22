import Head from 'next/head'
import Index from '../components/Home'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Works from '../components/Works'
import Skills from '../components/Skills'
import About from '../components/About'

export default function Home() {
  return (
    <motion.div
      className="flex flex-col py-2 overflow-x-hidden"
      key='home'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Head>
        <title>Portafolio Manu</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </Head>
      <div className='flex flex-col justify-center items-center ml-10 sm:mt-8'>
        <Index></Index>
      </div>


      {/* Seccion sobre mi */}
      <Section title='About' id='about'>
        <About/>
      </Section>

      {/* Seccion de Habilidades */}
      <Section title='Skills' id='skills'>
        <Skills />
      </Section>

      {/* Seccion de Trabajos Realizados */}
      <Section title='Works' id='works'>
        <Works />
      </Section>


    </motion.div>
  )
}

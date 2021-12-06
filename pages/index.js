import { useState, useEffect } from 'react';
import Head from 'next/head'
import Index from '../components/Home'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Works from '../components/Works'
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else setScroll(false);
    });
  }, [])

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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
      </Head>
      <div className='flex flex-col justify-center items-center ml-10 sm:mt-8'>
        <Index></Index>
      </div>


      {/* Seccion sobre mi */}
      <Section title='About' id='about'>
        <About />
      </Section>

      {/* Seccion de Habilidades */}
      <Section title='Skills' id='skills'>
        <Skills />
      </Section>

      {/* Seccion de Trabajos Realizados */}
      <Section title='Works' id='works'>
        <Works />
      </Section>

      {/* <Project/> */}

      <Section title='Contact' id='contact'>
        <Contact></Contact>
      </Section>

      {scroll &&
        <a href="#" className='scrollup bg-gradient-to-r from-blue-500 to-green-400 rounded-full p-2 px-3' id='scrollup'>
          <i className='uil uil-arrow-up scrollup__icon'></i>
        </a>
      }
    </motion.div>
  )
}

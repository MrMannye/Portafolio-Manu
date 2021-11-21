import 'tailwindcss/tailwind.css'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/Layout'
import {AnimatePresence} from 'framer-motion'
import '../styles/Skills.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return( 
    <ThemeProvider enableSystem={false} attribute='class'>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps}/>
        </AnimatePresence>
      </Layout>
    </ThemeProvider> 
  )}

export default MyApp

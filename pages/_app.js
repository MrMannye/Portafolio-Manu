import 'tailwindcss/tailwind.css'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return( 
    <ThemeProvider enableSystem={false} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider> 
  )}

export default MyApp

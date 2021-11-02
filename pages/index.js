import Head from 'next/head'
import Index from '../components/Home'

export default function Home() {
  return (
    <div className="flex flex-col justify-center py-2">
      <Head>
        <title>Portafolio Manu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col justify-center items-center min-h-screen -mt-16'>
        <Index></Index>
      </div>
    </div>
  )
}

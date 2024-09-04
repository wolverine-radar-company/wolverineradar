import '@/styles/globals.css'
import Layout from '@/components/layout';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import { Open_Sans, Caveat } from 'next/font/google'


const open_Sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})

export default function App({ Component, pageProps }) {

  return(
    <UserProvider>
       <Head>
        <title>Wolverine Radar.com</title>
      </Head>
      <Layout>
        <div className={`${open_Sans.variable} ${caveat.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </UserProvider>
  )
}

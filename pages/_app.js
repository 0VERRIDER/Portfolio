import '../styles/globals.css'
import './prism.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
  <meta name="theme-color" content="#121212"/>
  </Head>
  <Component {...pageProps} />
  </>
    
    )
}

export default MyApp

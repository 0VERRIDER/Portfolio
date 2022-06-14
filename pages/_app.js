import '../styles/globals.css'
import './prism.css'
import Head from 'next/head'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "./components/Loading";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
const [loading, setLoading] = useState(false);

useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
  <>
    <Loading loading={loading} />  
  <Head>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
  <meta name="theme-color" content="#121212"/>
  <title>Portfolio | ANSHIL P</title>
  </Head>
  <Component {...pageProps} />
  </>
    
    )
}

export default MyApp

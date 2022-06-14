import '../styles/globals.css'
import './prism.css'
import Head from 'next/head'
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader){
          const timer = setTimeout(()=>{
            loader.style.opacity = 0;
            
          },3000);
          const timer2 = setTimeout(()=>{
            loader.style.display = "none";
          },4000);
          
        return () =>{
          clearTimeout(timer);
          clearTimeout(timer2);

        }
      }
    }
}, []);
  return (
  <>
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

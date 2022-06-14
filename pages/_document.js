import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "./components/loading";
import Logo from './components/logo';
class MyDocument extends Document {
    render() {
        return (
            <Html id="main">
                <Head/>
                <head>
                    <style>
                        {loader}
                    </style>
                </head>
                <body>
                <div id={'globalLoader'}>
                
                <div id="logo">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="42"
      fill="none"
      viewBox="0 0 48 42"
    >
      <g fill="#fff" clipPath="url(#clip0_602_2)">
        <rect
          width="6.959"
          height="40.643"
          x="15.541"
          y="0.547"
          rx="3.48"
          transform="rotate(22.482 15.541 .547)"
        ></rect>
        <rect
          width="6.959"
          height="40.643"
          x="41.569"
          y="0.825"
          rx="3.48"
          transform="rotate(22.482 41.57 .825)"
        ></rect>
        <rect
          width="6.959"
          height="6.959"
          x="13.779"
          y="29.776"
          rx="3.48"
          transform="rotate(-90 13.78 29.776)"
        ></rect>
        <rect
          width="6.959"
          height="40.853"
          x="13.362"
          y="3.068"
          rx="3.48"
          transform="rotate(-21.238 13.362 3.068)"
        ></rect>
      </g>
      <defs>
        <clipPath id="clip0_602_2">
          <path fill="#fff" d="M0 0.547H48V41.145999999999994H0z"></path>
        </clipPath>
      </defs>
    </svg>
                </div>

            </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
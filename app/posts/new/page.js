import React from 'react'


// this is page is rendered as /posts/new

const page = () => {
  return (
    <div>
      New Post  
    </div>
  )
}

export default page







import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
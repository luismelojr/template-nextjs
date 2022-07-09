import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'ui/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template - NextJs</title>
        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121214" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJs, Jest, Storybook and Styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

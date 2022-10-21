import Head from "next/head"
import Script from 'next/script'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Art of Mob</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          content="Hollywood brought glory to the mafia. It's time we do the same to the NFT scene."
          name="description"
        />
        <meta content="Art of Mob" property="og:title" />
        <meta
          content="Hollywood brought glory to the mafia. It's time we do the same to the NFT scene."
          property="og:description"
        />
        <meta content="Art of Mob" property="twitter:title" />
        <meta
          content="Hollywood brought glory to the mafia. It's time we do the same to the NFT scene."
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://artofmob.io/" />
        <meta property="og:image" content="/assets/social-image.jpg" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>


      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H71W85W6DF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date())

          gtag('config', 'G-H71W85W6DF')
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

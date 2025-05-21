
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"/>
        {/* Google tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17096797758"></script>
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17096797758');
        `}}/>
      </Head>
      <body className="bg-neutralbg text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

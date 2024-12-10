import Document, { Head, Html, Main, NextScript } from 'next/document' // eslint-disable-line
import MetaFonts from '@/components/meta/MetaFonts'
import MetaManifest from '@/components/meta/MetaManifest'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <Script
        src='https://widget.cloudpayments.ru/bundles/cloudpayments.js'
        strategy='beforeInteractive'
      />
          <MetaFonts />
          <MetaManifest />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

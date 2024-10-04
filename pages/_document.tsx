import Document, { Head, Html, Main, NextScript } from 'next/document' // eslint-disable-line
import MetaFonts from '@/components/meta/MetaFonts'
import MetaManifest from '@/components/meta/MetaManifest'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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

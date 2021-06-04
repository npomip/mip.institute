import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeColor } from '@/config/index'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='theme-color' content={themeColor} />
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

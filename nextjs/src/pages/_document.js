import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render() {
      return <>
        <Html>
          <Head>
            <title>To Do Coodesh</title>
          </Head>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Html>
      </>
  }
}
import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet='utf-8'/>
        <title>Сервис составления шаблона договора на покупку автомобиля</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
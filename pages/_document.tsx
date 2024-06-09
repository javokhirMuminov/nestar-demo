import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta  charSet="UTF-8"/>
      <meta name="title" content="Nestar Demo" />
      <meta name="robots" content="index,follow"  />
      <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
      <meta name="keyword" content="nestar, nestyar.uz, devex mern, mern nestjs fullstack"/>
      {/*SEO*/}
      <meta name="description" content={
        "Buy and sell properties anywhete anytime in South Korea. | " +
        "Покупайте и продавайте недвижимость в Южной Корее в любое время. | "+
        "한국에서 언제든지 부동산을 사고팔 수 있습니다"
      }/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

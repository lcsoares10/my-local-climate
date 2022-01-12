import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>My Local Weather</title>

          <meta
            name="keywords"
            content="Weather,Weather Day,Clima,Previsão do Tempo"
          ></meta>
          <meta name="author" content="Lucas Soares"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Aqui você encontra a previsão do tempo em tempo real da sua localidade."
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

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

import Document, { NextScript, Html, Head, Main } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import React from 'react';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps, styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
    };
  }

  render(): JSX.Element {
    return <Html lang={'en'}>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Noto+Sans&family=Open+Sans:wght@300&display=swap'
              rel='stylesheet' />

        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <meta name={'description'}
              content={'Henry Bersey, a programmer and musician\'s, personal website and digital portfolio.'} />
        <meta name={'keywords'}
              content={'Programming, Developer, Software Development, Musician, Music, Composer, Arranger'} />

        <link rel='manifest' href='/manifest.json' />

        <link
          href='/icons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='icons/apple-touch-icon.png'/>
        <meta name='theme-color' content='#F0544F' />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>;
  }
}




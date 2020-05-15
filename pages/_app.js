import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import Router from 'next/router';

const intlCache = createIntlCache();

const handleRouteChange = (url) => {
  console.log('App is changing to: ', url);
};

Router.events.on('routeChangeError', (err, url) => {
  console.log({ err, url });
});

Router.events.on('routeChangeStart', handleRouteChange);

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { req } = ctx;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const { locale, messages } = req || window.__NEXT_DATA__.props;// eslint-disable-line

    return {
      pageProps,
      locale,
      messages,
    };
  }

  render() {
    const {
      Component,
      pageProps,
      locale,
      messages,
    } = this.props;
    const intl = createIntl(
      {
        locale,
        messages,
      },
      intlCache,
    );
    return (
      <RawIntlProvider value={intl}>
        <Head>
          <title>DJ CSS</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RawIntlProvider>
    )
  }
}

import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";

declare global {
  interface Window {
    kakao: any;
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#FF5D01",
  },
};

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta charSet="utf-8" />
            <title>What a Chad</title>
            <link rel="shortcut icon" href="/images/trident.png" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);

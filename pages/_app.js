import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>DiceDice</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

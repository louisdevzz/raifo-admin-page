import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Phòng Quản Lý Khoa Học và Hợp Tác Quốc Tế</title>
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

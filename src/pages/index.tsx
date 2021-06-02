import React from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globals";
import HomeLogin from "../components/HomeLogin";
import Footer from "../components/Footer";
import api from "../services/api";

export type getLogins = {
  data: {
    id: number;
    password: String;
    drive: string;
    userName: string;
  }[];
};


export default function Home({ data }: getLogins) {
  return (
    <>
      <Head>
        <GlobalStyle />
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1.0"
          />
        <title>Login Premium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeLogin data={data} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
export async function getStaticProps() {
  const { data } = await api.get("/logins");

  return {
    props: { data },
  };
}

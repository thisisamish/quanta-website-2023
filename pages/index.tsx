import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import EventsCarousel from "@/layouts/EventsCarousel";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Quanta | JSSATE, Noida</title>
        <meta
          name="description"
          content="Official website for Quanta - the official technical society of JSSATE, Noida"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
        <EventsCarousel />
      </main>
    </>
  );
}

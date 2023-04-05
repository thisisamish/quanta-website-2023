import Head from "next/head";
import { Montserrat } from "next/font/google";
import EventsCarousel from "@/layouts/EventsCarousel";
import Navbar from "@/components/Navbar";

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
        <link rel="icon" href="/" />
      </Head>
      <main className={montserrat.className}>
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
          {/* <EventsCarousel /> */}
        </div>
      </main>
    </>
  );
}

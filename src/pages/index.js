import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Meet Aditya...</title>
        <link rel="icon" href="/favicon.ico" />
        <metadata name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <main>
        Home
      </main>
    </>
  )
}

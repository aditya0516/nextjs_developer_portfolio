import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Next.js + Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
            body {
                ${inter.variable}: 'Inter', sans-serif;
                font-family: 'Inter', sans-serif;
            }
        `}</style>

    </Head>
      <main>
        Home
      </main>
    </>
  )
}

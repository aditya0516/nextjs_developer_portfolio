import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/landingImageSquare.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";

const Home = () => {
  return (
    <>
      <Head>
        <title>Meet Aditya...</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <TransitionEffect />
      <main className=' flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-0'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-[20rem] h-[20rem] overflow-hidden rounded-full border border-1 border-solid border-dark mb-4 hidden lg:inline-block'>
              {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' /> */}
              <Image
                src={profilePic}
                alt='Created with AI'
                className=' w-full h-auto grayscale 2xl:hidden xl:hidden lg:inline-block md:inline-block sm:inline-block xs:inline-block'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
              />
            </div>
            <div className=' w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <h2 className='text-base font-semibold self-start lg:self-center'>
                Hi! my name is
              </h2>
              <AnimatedText
                text={"Aditya Jadhav"}
                className='!text-6xl !text-left dark:text-light xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                I am a full-stack developer and I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in various frameworks and web
                development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href={"/Resume Aditya Jadhav.pdf"}
                  target={"_blank"}
                  className='dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                  download={true}>
                  Resume <LinkArrow className={"!w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:avj22@njit.edu"}
                  target={"_blank"}
                  className='dark:text-light ml-4 text-lg font-medium capitalize text-dark underline md:text-base'>
                  Contact
                </Link>
              </div>
            </div>
            <div className=' w-[30vw] md:w-full '>
              {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' /> */}
              <Image
                src={profilePic}
                alt='Created with AI'
                className=' w-full h-auto lg:hidden grayscale'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
              />
            </div>
          </div>
        </Layout>
        <HireMe />
        {/* <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image
            src={lightBulb}
            alt='Aditya Jadhav'
            className='w-full h-auto'
          />
        </div> */}
      </main>
    </>
  );
};
export default Home;

/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/aboutImage.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title> About Aditya </title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content="Aditya Jadhav's portfolio showcasing his design and development projects, including web and mobile applications, UI/UX design, and Software Development skills."
        />
        <meta property='og:title' content='About Aditya' />
        <meta
          property='og:description'
          content="Aditya Jadhav's portfolio showcasing his design and development projects, including web and mobile applications, UI/UX design, and Software Development skills."
        />
        <meta property='og:image' content='/portfolioproject.png' />
        <link rel='canonical' href='https://www.adityajadhav.me' />
        <meta property='og:locale' content='en_US' />
        <meta name='robots' content='index, follow' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text={"Passion is the genesis of genius"}
            className='mb-16 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Hi there!&#128075; I'm Aditya, and I'm so excited to share a bit
                about myself with you.
              </p>
              <p className='mt-4 font-medium'>
                I've always had a passion for technology, and that led me to
                pursue a Bachelor's degree in Engineering in Information
                Technology. After that, I knew I wanted to take my education to
                the next level, so I obtained a Master's degree in Business and
                Information Systems.
              </p>

              <p className='mt-4 font-medium'>
                Now, as a Full Stack Engineer, I'm thrilled to be able to
                combine my love of technology with my business expertise. I'm
                always eager to tackle new tech problems and find innovative
                solutions, and I take ownership of my work and lead by example.
              </p>

              <p className='mt-4 font-medium'>
                But there's more to me than just my professional life. I'm also
                a social butterfly who loves to connect with others and make new
                friends. Whether I'm chatting with coworkers over lunch or
                meeting new people at a networking event, I thrive on building
                relationships and learning from others.
              </p>
              <p className='mt-4 font-medium'>
                And when I'm not working or socializing, you can often find me
                indulging in my other passion: music. I love everything from
                classical to rock, and I enjoy attending concerts and playing my
                own instruments &#127928; &#127929;.
              </p>
              <p className='mt-4 font-medium'>
                All in all, I feel so fortunate to be able to do what I love
                every day, and to have so many interests and passions outside of
                work. I'm excited to see what the future holds, and I can't wait
                to continue growing and learning as a Full Stack Engineer and as
                a person.
              </p>
            </div>
            <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' />
              <FramerImage
                src={profilePic}
                alt='Created with AI'
                className='w-full h-auto grayscale rounded-2xl hover:grayscale-0'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Courses Completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects Completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

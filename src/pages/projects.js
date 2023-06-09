import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/iotresized.jpg";
import project2 from "../../public/images/projects/chatbot.png";
import project3 from "../../public/images/projects/unifiedchatapp.png";
import project4 from "../../public/images/projects/portfolioproject.png";
import project5 from "../../public/images/projects/movieApp.webp";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = "#",
  github = "#",
}) => {
  return (
    <article className=' w-full flex items-center relative justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-3 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage
          src={img}
          alt={title}
          className=' w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
        />
      </Link>

      <div className=' w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className=' text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className=' hover:underline underline-offset-2'>
          <h2 className=' mt-2 w-full text-left text-4xl font-bold sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className=' my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className=' mt-2 flex items-center'>
          <Link href={github} target='_blank' className=' w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className=' ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark  bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className=' w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className=' w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
        />
      </Link>

      <div className=' w-full flex flex-col items-start justify-between mt-4'>
        <span className='dark:text-primaryDark text-primary font-medium text-xl lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className=' hover:underline underline-offset-2'>
          <h2 className=' mt-2 w-full text-left text-3xl font-bold lg:text-2xl'>
            {title}
          </h2>
        </Link>
        <div className=' w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline md:text-base'>
            Visit
          </Link>
          <Link href={github} target='_blank' className=' w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content="Aditya Jadhav's portfolio showcasing his design and development projects, including web and mobile applications, UI/UX design, and Software Development skills."
        />
        <meta property='og:title' content='Projects' />
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
      <main className=' w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16 '>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className=' grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                type='Featured Project'
                title='Portfolio Website'
                summary={
                  "A portfolio project is a website or application that showcases a developer's skills, experience, and projects. The goal of this project is to provide an online presence that highlights a developer's abilities and serves as a digital resume to potential employers or clients."
                }
                img={project4}
                link='/'
                github='https://github.com/aditya0516/nextjs_developer_portfolio'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                type='Featured Project'
                title='Movie Review App'
                summary='Movie Review App is an application that allows users to read and write reviews for movies. Users can search for movies by title, browse popular movies, and view ratings and reviews from other users. Users can also leave their own ratings and reviews for movies they have seen, and can also save movies to their watchlist for future viewing. The app provides a platform for movie enthusiasts to connect with each other, share their opinions, and discover new movies to watch.'
                img={project5}
                link='https://github.com/aditya0516/movie_review_backend'
                github='https://github.com/aditya0516/movie_review_backend'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              {" "}
              <Project
                type='Project'
                title='FAQbot'
                summary='FAQbot is a chatbot designed to answer frequently asked questions (FAQs) from users. The aim of the project is to provide an efficient and convenient way for users to access information about a particular topic or product without the need for human intervention. The FAQbot utilizes natural language processing (NLP) and machine learning algorithms to understand user queries and provide relevant responses.'
                img={project2}
                link='https://github.com/aditya0516/'
                github='https://github.com/aditya0516/'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              {" "}
              <Project
                type='Project'
                title='Unified Messaging Platform'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                img={project3}
                link='https://github.com/aditya0516/'
                github='https://github.com/aditya0516/'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                type='Featured Project'
                title='Cloud-based Application - IoD (Internet of Drones Platform), IoT (Internet of Things)'
                summary='This project involved developing a cloud-based business application using React JS, AWS, IoD (Internet of Drones Platform), and IoT (Internet of Things) technologies. The application was designed to help businesses manage and control their drone operations through a single platform.'
                img={project1}
                link='https://github.com/aditya0516/RMS'
                github='https://github.com/aditya0516/RMS'
              />
            </div>

            {/* <div className='col-span-6 sm:col-span-12'>
              <Project
                type='Featured Project'
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                img={project1}
                link='/'
                github='/'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type='Featured Project'
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency.'
                img={project1}
                link='/'
                github='/'
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

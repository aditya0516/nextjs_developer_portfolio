import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/create modal component in react using react portals.png";
import { motion, useMotionValue } from "framer-motion";
import React, { useRef } from "react";

const FramerImage = motion(Image);

const MovingImage = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}>
      <h2 className=' capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt={title}
        className=' z-10 w-96 h-auto hidden rounded-lg absolute'
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, trasiition: { duration: 0.3 } }}
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />

      <Link
        href={link}
        target='_blank'
        className=' inline-block w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className=' w-full h-auto'
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className=' capitalize text-2xl font-bold my-2 my-4 hover:underline '>
          {title}
        </h2>
      </Link>
      <p className=' text-sm mb-2 '>{summary}</p>
      <span className=' text-primary font-semibold'>{time}</span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className=' relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
      <MovingImage img={img} title={title} link={link} />
      <span className=' text-primary font-semibold pl-4'>{date}</span>
    </motion.li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title> Articles </title>
        <meta name='description' content='About Aditya description' />
      </Head>
      <main className=' w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText
            text={"Words Can Change The World!"}
            className='mb-16'
          />
          <ul className=' grid grid-cols-2 gap-16'>
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              }
              time={"10 min read"}
              link={"/"}
              img={article1}
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              }
              time={"10 min read"}
              link={"/"}
              img={article1}
            />
          </ul>
          <h2 className=' font-bold text-4xl w-full text-center my-16 mt-32'>
            All articles
          </h2>
          <ul>
            <Article
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              img={article1}
              date={"May 16th, 2023"}
              link={"/"}
            />
            <Article
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              img={article1}
              date={"May 16th, 2023"}
              link={"/"}
            />
            <Article
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              img={article1}
              date={"May 16th, 2023"}
              link={"/"}
            />
            <Article
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              img={article1}
              date={"May 16th, 2023"}
              link={"/"}
            />
            <Article
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              img={article1}
              date={"May 16th, 2023"}
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;

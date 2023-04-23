import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 bottom:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className=' capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | <span className='text-primary'>{place}</span>
        </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          className=' absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
          style={{ scaleY: scrollYProgress }}
        />
        <ul className=' w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            type={"Master of Science (M.S.) - Business & Information Systems"}
            time={"2018 - 2019"}
            place={"New Jersey Institute of Technology"}
            info={`Completed a master's project on deep learning, developing a new neural network architecture for natural 
            language understanding.`}
          />
          <Details
            type={"Bachelor of Engineering (B.E.) - Information Technology"}
            time={"2013 - 2017"}
            place={"University of Mumbai"}
            info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

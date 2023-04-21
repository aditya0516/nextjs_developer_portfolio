import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcons = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className=' absolute left-0 stroke-dark'>
      <svg
        width='75'
        height='75'
        viewBox='0 0 100 100'
        className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]'>
        <circle
          cx='75'
          cy='50'
          r='20'
          className='stroke-primary stroke-1 fill-none dark:stroke-primaryDark'
        />
        <motion.circle
          cx='75'
          cy='50'
          r='20'
          className='stroke-[5px] fill-light'
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx='75'
          cy='50'
          r='10'
          className=' animate-pulse stroke-1 fill-primary dark:fill-primaryDark'
        />
      </svg>
    </figure>
  );
};

export default LiIcons;

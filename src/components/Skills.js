import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.5 }}
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          whileHover={{ scale: 1.5 }}
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'>
          AJ
        </motion.div>
        {/* Languages */}
        <Skill name='Java' x='5vw' y='3vw' />
        <Skill name='Javascript' x='2vw' y='-4vw' />
        <Skill name='Python' x='-8vw' y='0vw' />
        {/* Frameworks */}
        <Skill name='React.js' x='-5vw' y='-10vw' />
        <Skill name='Next.js' x='6vw' y='-10vw' />
        <Skill name='Redux' x='16vw' y='-5vw' />
        <Skill name='HTML5' x='19vw' y='2vw' />
        <Skill name='CSS3' x='-16vw' y='-5vw' />
        <Skill name='Node.js' x='-18vw' y='4vw' />
        <Skill name='Spring Boot' x='-3vw' y='10vw' />
        <Skill name='Hibernate' x='11vw' y='8.5vw' />
        <Skill name='Serverless' x='20vw' y='-12vw' />
        <Skill name='Laravel' x='0vw' y='-16vw' />
        <Skill name='AWS' x='-18vw' y='-14vw' />

        {/* Databses */}
        <Skill name='Python' x='15vw' y='12vw' />
        <Skill name='Time Management' x='32vw' y='-5vw' />
        <Skill name='Leadership' x='0vw' y='-22.5vw' />
        <Skill name='Communication' x='-33vw' y='-10vw' />
        <Skill name='Team Player' x='18vw' y='18vw' />
        <Skill name='Decision Making' x='-33vw' y='10vw' />
      </div>
    </>
  );
};

export default Skills;

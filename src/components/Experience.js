import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 bottom:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between'>
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a href='' target={"_blank"} className='text-primary capitalize'>
            @{company}
          </a>
        </h3>
        <span className=' capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          className=' absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
          style={{ scaleY: scrollYProgress }}
        />
        <ul className=' w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position={"Full Stack Engineer"}
            company={"Flipt, LLC"}
            companyLink={"https://fliptrx.com/"}
            time={"Jan 2022-Present"}
            address={"Remote"}
            work={`• Led the implementation of cutting-edge CI/CD methodologies and designed a new build process for an existing application, improving the speed and efficiency of software development.
            • Contributed to the transformation of the existing backend using various design patterns like Multi-Service Architecture Pattern, Data Provider Pattern resulting in improved scalability and reliability of the application.
            • Developed multiple modules such as the Price Breakdown Module, Mail Order Confirmation Module, Credit Card Component, and Drug Configuration Module, showcasing expertise in full stack development in JavaScript using React, GraphQL and Couchbase and creating user-friendly experiences for customers.
            • Worked closely with cross-functional teams to gather requirements, design solutions, and resolve complex technical issues, ensuring solutions met both business and technical needs.
            • Mentored junior developers and optimized the existing logic using well-known Data Structures & Algorithms to improve the performance of the app, contributing to a positive team environment through open communication, collaboration, and continuous improvement.`}
          />
          <Details
            position={"Software Developer"}
            company={"Scanbuy, Inc"}
            companyLink={"https://scanbuy.com/"}
            time={"May 2019 - Dec 2021"}
            address={"New York City, New York"}
            work={`• Lead Developer for Centralized Portal (UI & Middleware) allowing all the Clients to access different services offered by the firm using React, Redux, Serverless and GraphQL.
            • Designed & Developed a Dashboard for Monitoring of all Internal Services using Strapi and Serverless REST API's.
            • Incorporated Internal Event Service in all applications offered by the firm using AWS Event Bridge, AWS SQS, AWS S3.
            • Implemented System Redesign by changing core functionality using Java Spring and Java Hibernate Framework.
            • Integrated Spring DAO with Hibernate ORM for performing persistent operations into Databases like MySQL and RedShift.
            • Developed scripts using Java 1.8 and Python 2.7 for automation of user operations.
            • Worked in CI/CD environment using tools like Jenkins, Docker and GIT for version control.
            • Transformed the existing REST APIs into JavaScript Serverless APIs for compatibility with AWS Lambda using NodeJS.
            • Requirement gathering and architectural modeling by working extensively with clients to incorporate change requirements.`}
          />
          <Details
            position={"Research Assistant - Robotics & Data Science Lab"}
            company={"New Jersey Institute of Technology"}
            companyLink={"https://njit.edu/"}
            time={"Dec 2018 - May 2019"}
            address={"Newark, NJ"}
            work={`• Implemented a real-time web-based system for quadcopters and land robots for remote monitoring and operations.
            • Working with peers to provide the end-users various solutions on the dashboard ranging from data wrangling, streaming data-sources,
            data mining, data visualization and later applying Machine learning models for predictive analysis.
            • Optimized the code base to increase the scalability by 100% using modern testing methods and use case modelling.
            • Wrote JavaScript based APIs to interface between software and hardware by using Web-Sockets and Johnny-five framework.`}
          />
          <Details
            position={"Teaching Assistant - Web System Development"}
            company={"New Jersey Institute of Technology"}
            companyLink={"https://njit.edu/"}
            time={"Aug 2018 - May 2019"}
            address={"Newark, NJ"}
            work={`• Assisting students with Laravel framework's queries and grading their weekly assignments for the semester.
            • Contributed to replacing University's educational website with modern advancements of web technologies.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

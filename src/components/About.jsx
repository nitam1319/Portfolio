import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon, num }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 350,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-24 h-24 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <ProgressBar
            completed={num}
            height="12px"
            width="200px"
            borderRadius="100px"
            isLabelVisible={true}
            baseBgColor="#9977ee"
            bgColor="linear-gradient(90deg, rgba(106,106,186,1) 0%, rgba(179,40,73,0.9136904761904762) 100%)"
            labelColor="#fff"
            maxCompleted={100}
            labelSize="10px"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
        <StarsCanvas />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a web application developer proficient in topics such as TypeScript,
        JavaScript, React Js, Next Js and Redux Toolkit. I am a fast learner and
        have the ability to find efficient, scalable and user-friendly solutions
        and I am passionate about teamwork. Let's work together to bring your
        ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

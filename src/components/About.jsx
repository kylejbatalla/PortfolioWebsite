import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-pink-500 to-blue-500 
      p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
          <h2 className={styles.sectionHeadText}
          >Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt=4 text-white text-[17px] max-w-3xl leading-[30px]" >
        I'm a skilled entry level software engineer with a bachelor's degree in computer science from the University of 
        California San Diego. My skills are bolstered by hands-on experience as an Android engineer at Snap Inc. (Snapchat), 
        and full-stack engineering experience throughout my undergraduate career, internship, and personal projects.
        <br></br><br></br>
        Additionally, I am an avid photographer with an emphasis on analog and digital film simulations
        as well as the founder and sole proprietor of Arkipelago Collection™, a modern streetwear clothing brand
        focusing on quality, comfort, and honoring the Filipino heritage.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      
      <motion.div
        variants={textVariant(0)} // Pass 0 as the delay value
        initial="hidden"
        animate="show" // Use "show" as the animation state
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} 
        flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I'm <span className='text-[#bc43d4]'>Kyle</span>. Nice to meet you!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a software engineer, photographer,<br className='sm:block hidden' />
            and owner of Arkipelago Collection™.
          </p>
        </div>
      
      </motion.div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
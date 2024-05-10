import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { motion } from "framer-motion";
import About from './About';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { links } from '../constants';
import { Tilt } from 'react-tilt';
import { myPic } from '../assets';
import { introduction } from "../constants/index";
import { GiBulletBill } from "react-icons/gi";


const LinkCard = ({ title, image, link, index }) => {
  return (
    <Tilt className="xs:w-[40px] w-full">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full rounded-full cursor-pointer' onClick={() => window.open(link, "_blank")}>
        <img src={image} className='w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[3rem]' />
      </motion.div>
    </Tilt>
  )

}

const Hero = () => {
  return (
    <section id="hero" className='w-full mx-auto'>

      <div className='flex flex-center items-center justify-center'>
        <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>Amitav Panda</h1>
      </div>

      <div className='flex flex-col-reverse md:flex-row items-center gap-4'>

        <div className='flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          {introduction.map((item) => (
            <>
              {item.overview.map((description) => (
                <>
                  <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-5 text-secondary text-[15px] max-w-3xl leading-[30px]'>
                    {description}
                  </motion.p>
                </>
              ))}

              {
                item.bulletPoints.map((bulletPoint) => (
                  <>

                    <div className='flex flex-row items-center gap-5 py-3'>
                      <GiBulletBill className='text-[#915EFF]' />
                      <p className='text-white text-[15px]'>{bulletPoint.title}</p>

                    </div>

                    <div className='flex flex-row flex-wrap gap-3 px-10'>
                      {bulletPoint.skills.map((skill) => (
                        <p className='text-secondary text-wrap'>{skill}</p>
                      ))}
                    </div>

                  </>
                ))
              }

            </>
          ))}




          <div className='mt-5 flex flex-row gap-4'>
            {links.map((link, index) => (
              <LinkCard key={link.title} index={index} {...link} />
            ))}
          </div>
          <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className='mt-5 rounded-xl  bg-[#915EFF] text-white font-bold p-2 px-5' onClick={() => window.open("https://drive.google.com/file/d/1Zl8xw5Lo7Gbr8dJZ-UhToJjoFprNgngA/view?usp=sharing")}>See my Resume</motion.button>
        </div>

        <div>
          <img src={myPic} alt='my Profile Pic' width={500} height={500} />
        </div>

      </div>

      <div className='xs:bottom-1 bottom-5 w-full flex justify-center items-center mt-10'>
        <a href='#services'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{
              y: [0, 24, 0],
            }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>

    </section>
  )
}

export default SectionWrapper(Hero, "hero");
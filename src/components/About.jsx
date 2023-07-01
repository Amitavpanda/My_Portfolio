import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { links, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const LinkCard = ({title, image , link, index}) => {
  return(
    <Tilt className="xs:w-[40px] w-full">
      <motion.div  variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full rounded-full cursor-pointer' onClick={() => window.open(link, "_blank")}>
        <img src={image}/>
      </motion.div>
    </Tilt>
  )

}
const About = () => {
  return (
    <> 
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn('','',0.1,1)} className='mt-2i text-secondary text-[15px] max-w-3xl leading-[30px]'>
      I am a Skilled Software Developer with experience coding in a variety of languages and frameworks, including Python, Java, JavaScript, React, Firebase, Redux, and CSS frameworks such as Bootstrap, Material UI, and Tailwind CSS. Additionally, I possess understanding of data structures and algorithms.
      I am confident in my ability to contribute effectively to your projects and meet your desired requirements.
    </motion.p>

    <div className='mt-5 flex flex-row gap-4'>
      {links.map((link, index) => (
        <LinkCard key={link.title} index={index} {...link} />
      ))}
    </div>
    <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className='mt-5 rounded-xl  bg-[#915EFF] text-white font-bold p-2 px-5' onClick={() => window.open("https://drive.google.com/file/d/1OEgOutnsHEk-aAiiDBuiedKaa5sdcdlM/view?usp=sharing")}>See my Resume</motion.button>
    </>
  )
}




export default SectionWrapper(About, "about");
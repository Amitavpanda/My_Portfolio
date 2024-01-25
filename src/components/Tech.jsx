import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
const Skill = ({name ,icon,index,years}) => {
  return(
    <>
    <Tilt className=" p-3 w-full">
      <motion.div  variants={fadeIn("right", "spring", index * 0.5, 0.75)} className=' group relative flex cursor-pointer' >
        <img src={icon} className="rounded-full border p-4 border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out  "/>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full ">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-[15px] text-[#915EFF] font-bold opacity-100">{name}</p>
          <p className="text-3xl  text-[#915EFF] font-bold opacity-100">{years}</p>
        </div>
      </div>
      </motion.div> 
      
    </Tilt>
    </> 
  ) 
}
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} id="skills">
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      <p className={styles.sectionSubText}>Hover over a skill to know my experience</p>
    </motion.div>
    <div className="grid grid-cols-4 gap-1 mt-5">
        {technologies.map((technology,index) => (
          <>
          <Skill key={`skill-${index}`} {...technology}/>
          </>
        ))}

    </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "");

import React from "react";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {AiOutlineLink} from "react-icons/ai";

const ProjectCard = ({index, name, description, tags, image, source_code_link, status, web_link}) => {
  return (
    <>
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt options={{
        max:45,
        scale:1,
        speed: 450
      }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
        <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover  rounded-2xl"/>
            <div className="absolute inset-0 flex justify-end m-3 gap-1">

              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(web_link)}>
                <AiOutlineLink />
              </div>
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link)}>
                  <img src={github} className="w-1/2 h-1/2 object-contain"/>

              </div>
            </div>


        </div>
        <div className="mt-5">
          <h3 className="font-bold text-white text-[25px]">{name}</h3>
          <p className="mt-2 text-secondary text-[15px]">{description}</p>
        </div>

        <div className=" mt-4 flex  items-center justify-between">
           <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <>
                <p className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              </>
            ))}
           </div>
              
          <p className={`${status ? 'text-green' : 'text-red'} text-[15px] cursor-pointer font-bold`}>{`${status ? 'Completed' : 'In Progress'}`}</p>
           
        </div>
      </Tilt>
    </motion.div>
    </>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
          <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects serve as compelling examples of my skills and experience. Through the provided links to code repositories and live demos, you can witness firsthand my ability to solve complex problems and deliver high-quality solutions.
          I have encountered a diverse range of technologies and frameworks, which has equipped me with the adaptability to quickly learn and master new tools. This proficiency allows me to effectively work with different technologies and seamlessly integrate them into projects.
          </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index) => (
          <>
          <ProjectCard key={`work-${index}`} {...project} />
          </>
        ) )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

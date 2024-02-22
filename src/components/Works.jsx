import React from "react";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { AiOutlineLink } from "react-icons/ai";
import { works } from "../constants";
const ProjectCard = ({ index, name, description, tags, image, source_code_link, status, web_link }) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary p-5 rounded-2xl sm:w-[30rem] w-full ">
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover  rounded-2xl" />
            <div className="absolute inset-0 flex justify-end m-3 gap-1">

              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(web_link)}>
                <AiOutlineLink />
              </div>
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(source_code_link)}>
                <img src={github} className="w-1/2 h-1/2 object-contain" />

              </div>
            </div>


          </div>
          <div className="mt-5">
            <h3 className="font-bold text-white text-[25px]">{name}</h3>
                <div className="mt-2 text-secondary text-[15px]">{description}</div>
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
      {
        works.map((work, index) => (
          <>
            <motion.div variants={textVariant()} id="work">
              <p className={styles.sectionSubText}>{work.title}</p>
              <h2 className={styles.sectionHeadText}>{work.subtitle}</h2>
            </motion.div>
            {work.description.map((point, index) => (
              <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                {point}
              </motion.p>
            ))}

          </>
        ))
      }



      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <>
            <ProjectCard key={`work-${index}`} {...project} />
          </>
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(Works, "");

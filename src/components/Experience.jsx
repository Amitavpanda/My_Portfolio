
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ title, points, date, iconBg, icon, company_name , tech}) => {
  return(
    <>
    <VerticalTimelineElement contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }} contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={icon} alt={company_name} className='w-[60%] h-[60%] object-contain' />
        </div>
      }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{title}</h3>
          <p className='text-secondary text-[16px] font-semibold'>
            {company_name}
          </p>
        </div>

        <ul className='mt-2 list-disc ml-5 space-y-2'>
          {points.map((point, index) => (
            <>
            <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
            </>
          ))}
        </ul>


          {/* skills : 
          <p>SKills : </p> 
          {tech.map((t) ->(
            `kskf,`
          ))}
          */}
          <div className='flex flex-row gap-1'>
          <p className='text-red'>Skills: </p>
            {tech.map((language) => (
              <>
              <p className='text-white-100 text-[10px]'>{language} </p>
              </>
            ))}
          </div>
          
    </VerticalTimelineElement>

    </>
  )
}
const Experience = () => {
  return (
  <>
  <motion.div id="experience" variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
  </motion.div>

  <div className='mt-10 flex flex-col'>
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} {...experience}/>
      ))}
    </VerticalTimeline>
  </div>
  </>
  )
}

export default SectionWrapper(Experience, "work");


import { motion } from 'framer-motion'
import { TbPointFilled } from "react-icons/tb";


import { zoomIn } from '../utils/motion'

function ServicesCard({service}) {
  return (
    <motion.div
    key={service?.id}
    className='bg-tertiary p-5 py-10 rounded-2xl sm:w-[360px] w-full relative flex flex-col items-center '
    variants={zoomIn(0.2, 1)}
  >
    {/* Render service card content based on the service prop */}
    <div className='rounded-full p-3 bg-[#915EFF] absolute -top-[30px]'>
      <img src={service?.icon} className="text-white" width={30} alt="image of service" />
    </div>

    <motion.h2
      className='font-bold text-white text-[25px]'
      variants={zoomIn(0.4, 1)}
    >
      {service?.title}
    </motion.h2>

    <motion.div
      className='py-5'
      variants={zoomIn(0.6, 1)}
    >
      {service?.points?.map((point, index) => (
        <ul className='list-disc list-inside' key={index}>
          <motion.li className='flex flex-row gap-4 py-3 items-center' variants={zoomIn(0.8, 1)}>
            <TbPointFilled className='w-5 h-5'/>
            <p className='text-white'>{point}</p>
          </motion.li>
        </ul>
      ))}
    </motion.div>


  </motion.div>



  )
}

export default ServicesCard;
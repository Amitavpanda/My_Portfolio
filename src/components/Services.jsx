import React from 'react'
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import ServicesCard from './ServicesCard';
import { services } from '../constants';
function Services() {
  return (
    <section id="services">
      <h2 className={`${styles.sectionHeadText} mb-10`} >Services</h2>

      <div className='flex flex-wrap gap-5'>
        {services.map(service => (
          <ServicesCard key={service.id} service={service} /> // Pass each service as props
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Services, "services");
import React from 'react'
import { useState, useRef } from 'react';
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { contact } from '../constants';
import { fadeIn } from '../utils/motion';
import ContactImg from "../assets/Contact_img.jpg";




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name : '',
    email : '',
    message : '',
  });
  const [loading , setLoading] = useState(false);
  const handleChange = (e) => {
    const {target} = e;
    const {name, value} = target;

    setForm({
      ...form, [name]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY).then(
      () => {
        setLoading(false);
        alert("Thank you I will get back to you as soon as possible");
      },
      (error) => {
        setLoading(false);
        console.log(error);

        alert("Ahh, something went wrong, Please try again");
      }
    )
  };


    return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden xl:item-center xl:justify-center'>
      <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>I have got just what you need. Let's Talk</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className='flex flex-col gap-2 items-center'>
          {contact.map((con) => (
            <>
              <div className='flex flex-row gap-2 items-center'>
              <con.Icon/>
              <p className='text-white'>{con.content}</p>
              </div>
            </>
          ))}
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <lable className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your name</span>
              <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
            </lable>
            <lable className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your email</span>
              <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
            </lable>
            <lable className="flex flex-col">
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
            </lable>

            <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary' type='submit'> 
                {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
        
      </motion.div>

      <motion.div variants={fadeIn('','',0.1,1)}  className='flex-[0.95]'>
        <img src={ContactImg} className='object-contain rounded-full'/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");
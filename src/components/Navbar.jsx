import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from "../styles";
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import { logo, close, menu } from "../assets";



function Navbar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [hovered, setHovered] = useState('');


  return (
    <nav className={`${styles.paddingX} max-w-sm  sm:max-w-max flex items-center rounded-3xl fixed bottom-9 z-20 bg-black-30 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg glow-shadow left-1/2 transform -translate-x-1/2 p-3`}>

      <ul className='list-none flex flex-row gap-2 sm:gap-5 items-center '>
        <Link to='/' className='flex items-center' onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>


        </Link>
        {navLinks.map((nav) => (
          <>
            <motion.li key={nav.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.7 }}
              animate={active === nav.id ? { scale: 1.8, zIndex: 1 } : {}}
              className={`text-white text-[1.2rem] ${active === nav.id ? 'active' : ''}`} onClick={() => { setActive(nav.id) }}>
              {nav.id === 'home' ? (
                <Link to='/' onClick={() => {
                  setActive('');
                  window.scrollTo(0, 0);
                }} className=' p-[0.25rem] sm:p-[3rem]'>
                  {React.createElement(nav.logo)}
                </Link>
              ) : (<motion.a
                href={`#${nav.id}`}
                className=' p-[0.25rem] sm:p-[1rem] flex flex-col items-center gap-3'
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                onClick={() => { setActive(active === nav.id ? '' : nav.id); }}
                onMouseEnter={() => setHovered(nav.id)}
                onMouseLeave={() => setHovered('')}
              >
                {React.createElement(nav.logo)}
                {hovered === nav.id && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className=" text-[10px] sm:text-sm ml-1"
                  >
                    {nav?.title}
                  </motion.span>
                )}
              </motion.a>
              )}
            </motion.li>
          </>
        ))}


      </ul>
    </nav>
  )
}

export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../styles";
import { navLinks } from '../constants';
import {logo, close, menu} from "../assets"
function Navbar() {
  const [active, setActive] = useState('');
  const [toggle , setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center  fixed top-0 z-20` }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center ' onClick={() => {
          setActive('');
          window.scrollTo(0,0);
        }}>
          <img src={logo} className=' w-20 h-20 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Amitav Panda</p>

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <>
              <li className={`${active === nav.title ? 'text:white': 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
                setActive(nav.title)
              }}><a href={`#${nav.id}`}>{nav.title}</a></li>
            </>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} className='w-[30px] h-[30px] object-contain' onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-5 my-2 min-w-[148px] z-10 rounded-xl`}>
          <ul className='list-none flex flex-col justify-end items-start flex-1 gap-4'>
          {navLinks.map((nav) => (
            <>
              <li className={`${active === nav.title ? 'text:white': 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
                setActive(nav.title);
                setToggle(!toggle);
              }}><a href={`#${nav.id}`}>{nav.title}</a></li>
            </>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

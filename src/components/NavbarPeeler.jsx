import React from 'react'
import { useState } from 'react'
import { close, logo, peel_logo, menu } from '../assets/index.js';
import { navLinks, navLinksPeeler } from '../constants/index.js';
import { Link } from 'react-router-dom';
import PeelerInfo from '../pages/PeelerInfo.jsx';

const NavbarPeeler = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="w-full flex mt-7  justify-between items-center navbar">
      <img src={peel_logo} alt="hoobank" className='w-[124px] h-[49px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        
        {navLinksPeeler.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] mr-10 dark-text  hover:text-secondary` }
          >
            <a href={`#${nav.id} `}>
              {nav.title}
            </a>
          </li>
        ))}
         <li
          key={"BecomeAPeeler"}
          className={`font-poppins font-normal cursor-pointer text-[18px] mr-0 dark-text  hover:text-secondary`}
        >
          {/* <a href={`BecomeAPeeler`}>
              {"Become A Peeler"}
            </a> */}
          <Link to="/Home">Home</Link>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)} >
        </img>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-sage-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            <li
              key={"BecomeAPeeler"}
              className={`font-poppins font-normal cursor-pointer text-[18px] mr-0 dark-text `}
            >
              {/* <a href={`BecomeAPeeler`}>
                {"Become A Peeler"}
                </a> */}
              <Link to="/Home">Home</Link>
            </li>
          </ul>
        </div>



      </div>

    </nav>
  )
}

export default NavbarPeeler
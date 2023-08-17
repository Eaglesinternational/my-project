import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookOpen} from 'react-icons/bi';
import {FaServicestack} from 'react-icons/fa';
import {BiMessageAlt} from 'react-icons/bi';
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBookOpen/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === "#services" ? 'active' : ''}><FaServicestack/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageAlt/></a>
    </nav>
  )
}

export default Nav
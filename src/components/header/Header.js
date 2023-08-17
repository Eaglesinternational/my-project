import React from 'react'
import './header.css'
import CTA from '../../CTA'
import ME from '../assests/daniel-1.jpg';
import ME1 from '../assests/eke.jpg';
import HeaderSocial from '../../HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Ogbonnaya Ekebuisi Daniel</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocial />
        <a href="#contact" className='scroll__down'>Sroll Down</a>
        <div className="me">
          
          <center>
          <img src={ME1} alt="" /> </center>

          
          
        </div>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import './About.css'
import ME from '../assests/daniel-1.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserShield} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" className='image'/>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about_card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working Experience</small>
          </article>

          <article className="about_card">
            <FaUserShield className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className="about_card">
            <FaFolder className='about__icon'/>
            <h5>Project</h5>
            <small>80+ Real Life Projects completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos officia, aut rem, laudantium quaerat eligendi consectetur asperiores alias blanditiis culpa reprehenderit odio aperiam provident magni sequi! Eum tenetur animi ipsam?
        </p>
        <a href="#contact" className='btn btn-primary talk'>Let's Talk</a>
      </div>
     </div>
    </section>
  )
}

export default About

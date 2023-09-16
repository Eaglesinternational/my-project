import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">

    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li className='service_list-icon'><BiCheck/>
            <p>
              I develop and style interactive web apps for schools, corporate organization, etc
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              I create new brands, esign system and websites for organizations in the community
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              I develop, maintain and ship production codes for clients websites
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              I collaborate with other UI/UX designers to design the best user experience for clients
            </p>
            </li>
            {/* <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li> */}
          </ul>
        
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
          </ul>
       
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
            <li className='service_list-icon'><BiCheck/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </li>
          </ul>
        
      </article>
    </div>

    </section>
  )
}

export default Services

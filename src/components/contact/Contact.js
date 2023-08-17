import React from 'react'
import './contact.css';
import {BsPatchCheckFill} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wcgbarn', 'template_ppfznbr', form.current, 'sAZhM6d1LS6m_bRi7')
      
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
           <BsPatchCheckFill className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ekebu4real@yahoo.com</h5>
            <a href="mailto:ekebu4real@yahoo.com"target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
           <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ekebuisi</h5>
            <a href="https://m.me/ekebuisi.ogbonnaya"target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
           <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatSapp</h4>
            <h5>Ogboonaya Ekebuisi</h5>
            <a href="https://api.whatsapp.com/send?phone=22967810731" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
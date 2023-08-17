import React from 'react'
import './testimony.css'
import AVATAR from '../assests/daniel-1.jpg'
import AVATAR1 from '../assests/daniel-1.jpg'
import AVATAR2 from '../assests/daniel-1.jpg'
import AVATAR3 from '../assests/daniel-1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const data = [
  {
    avatar: AVATAR,
    name: 'Daniel Ogbonnaya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis excepturi voluptates cupiditate consequatur magnam doloremque repellat autem repellendus, eum quia error ratione molestias incidunt aliquam asperiores nesciunt at ipsa beatae.'
  },
  {
    avatar: AVATAR1,
    name: 'Daniel Ogbonnaya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis excepturi voluptates cupiditate consequatur magnam doloremque repellat autem repellendus, eum quia error ratione molestias incidunt aliquam asperiores nesciunt at ipsa beatae.'
  },
  {
    avatar: AVATAR2,
    name: 'Daniel John',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis excepturi voluptates cupiditate consequatur magnam doloremque repellat autem repellendus, eum quia error ratione molestias incidunt aliquam asperiores nesciunt at ipsa beatae.'
  },
  {
    avatar: AVATAR3,
    name: 'Daniel Ogbonnaya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis excepturi voluptates cupiditate consequatur magnam doloremque repellat autem repellendus, eum quia error ratione molestias incidunt aliquam asperiores nesciunt at ipsa beatae.'
  }
]

const Testimony = () => {
  return (
    <section id="testimony">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        loop={true} // Enable continuous looping
        autoplay={{ delay: 1000 }} // Set autoplay options (e.g., delay of 3 seconds)
        modules={[Navigation, Pagination, Scrollbar, A11y]} // Add required modules
        slidesPerView={1}
        spaceBetween={40}
        pagination={{clickable: true}}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
      )
}

export default Testimony
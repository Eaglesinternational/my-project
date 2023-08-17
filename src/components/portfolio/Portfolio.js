import React from 'react'
import './portfolio.css'
import IMG1 from '../assests/weather.jpg'
import IMG2 from '../assests/link.avif'
import IMG3 from '../assests/calm.avif'
import IMG4 from '../assests/sch.avif'
import IMG5 from '../assests/dash.avif'



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="http://github" className='btn' target='_blank'>Github</a>
          <a href="http://linkedup.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is my wonder Scientific Calculator</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com/eaglesinternational/calculator" className='btn' target='_blank'>Github</a>
          <a href="http://dancal.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is my own version of linkdin</h3>
          <div className="portfolio__item-cta">
          <a href="http://github" className='btn' target='_blank'>Github</a>
          <a href="http://linkedup.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is my fullstack web</h3>
          <div className="portfolio__item-cta">
          <a href="http://github" className='btn' target='_blank'>Github</a>
          <a href="http://eaglesinternational.000webhostapp.com" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Star Brain International School</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com/eaglesinternational/starbrain" className='btn' target='_blank'>Github</a>
          <a href="http://sbia.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="http://github" className='btn' target='_blank'>Github</a>
          <a href="http://linkedup.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        
        
       
      </div>
    </section>
  )
}

export default Portfolio
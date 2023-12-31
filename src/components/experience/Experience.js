import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
              </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>React JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
             <div>
             <h4>PHP</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>MSQLI</h4>
              <small className="text-light">EXperienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>MOGO DB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>NODE JS</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>PYTHON</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience

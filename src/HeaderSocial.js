import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {BiLogoDribbble} from 'react-icons/bi'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="http://linkdin.com" target='_blank'><BsLinkedin/></a>
        <a href="http://githum.com" target='_blank'><FiGithub/></a>
        <a href="http://dribble.com" target='_blank'><BiLogoDribbble/></a>
    </div>
  )
}

export default HeaderSocial
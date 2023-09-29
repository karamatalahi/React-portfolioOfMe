import './HeroImage.css'
import React from 'react'
import { Link } from 'react-router-dom'
import herobackground from '../assets/intro-bg.jpg'
const HeroImage = () => {
  return (
    <div className='hero'>
    <div className='mask'>
        <img src={herobackground}className='intro-img' alt="" />
    </div>
    <div className="content">
      <p>HI, I'M FREELANCER</p>
      <h1>React Developer.</h1>
   
    <Link to='/project' className='btn'>PROJECTS</Link>
    <Link to='/contact' className='btn btn-light'>CONTACT</Link>
    </div>
    </div>
  )
}

export default HeroImage

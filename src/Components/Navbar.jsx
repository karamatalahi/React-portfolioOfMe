import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
  const[show,setShow]= useState(true)
  const[color,setColor] = useState(false)
  const changeColor = () =>{
    if(window.scrollY>=100){
      setColor(true)
    }
    else(
      setColor(false)
    )
  };
  window.addEventListener('scroll',changeColor);
  const handleClick = ()=>{
    setShow(!show);
  }
  return (
    <div className={color?"header header-bg":'header'}>
      <Link to='/'>
        <h1>Portfolio</h1>
      </Link>
      <ul className={show ? "nav-menu":'nav-menu active'}>
        <li>
          <Link to= '/'>
          Home
          </Link>
        </li>
        <li>
          <Link to= '/about'>
          About
          </Link>
        </li>
        <li>
          <Link to= '/contact'>
          Contact
          </Link>
        </li>
        <li>
          <Link to= '/project'>
          Projects
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
      {show ?
        (<FaBars size={20} style={{color:"white" }}  className='fabars'/>):
      (  <FaTimes size={20} style={{color:"white" }} className='fatimes'/>)}
      </div>
    </div>
  )
}

export default Navbar

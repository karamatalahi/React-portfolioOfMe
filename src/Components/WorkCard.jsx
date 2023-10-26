import './WorkCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import ProjectCardData from './WorkCardData'
const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="project1" />
            <h2 className='project-title'>
                {props.title}
            </h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view}className='btn' target='_blank'>view</NavLink>
                    <NavLink to={props.source}  className='btn' target='_blank'>source</NavLink>
                </div>
            </div>

        </div>
  )
}

export default WorkCard

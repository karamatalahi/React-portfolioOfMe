import "./WorkCard.css";
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
import React from "react";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects</h1>
      <div className="project-container">
     {WorkCardData.map((card,index)=>{
        return(
            <WorkCard key={index}
                imgsrc = {card.imgsrc}
                title = {card.title}
                text = {card.text}
                view = {card.view}
                source = {card.source}
            />
        )
     })}
      </div>
    </div>
  );
};

export default Work;

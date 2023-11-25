import React, { useState } from "react";
import filmclone from "../../icons/film.png";
import roomtemp from "../../icons/roomtemp.png";
import ums from "../../icons/university.png";

function Projects() {
  const cardStyle = {
    width: '24rem',
    height: '12rem',
  };

  const [projects] = useState([
    {
      icons: filmclone,
      Title: "IMDB Clone",
      Description: "It was a clone app for IMDB with backend having Django and frontend based on ReactJS."
    },
    {
      icons: roomtemp,
      Title: "Room Temperature Controller",
      Description: "A small minimalistic Python code to control room temperature."
    },
    {
      icons: ums,
      Title: "University Management System",
      Description: "A University Management System made from Java Swing form GUI."
    }
  ]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Projects</h1>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4 mx-auto" key={index}>
            <div className="card" style={cardStyle}>
              <div className="card-body text-center">
                <img src={project.icons} alt={project.Title} style={{ width: '32px', height: '32px' }} />
                <h5 className="card-title">{project.Title}</h5>
                <p className="card-text">{project.Description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

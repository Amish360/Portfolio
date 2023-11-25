import React from "react";
import { useState } from "react";
import DjangoIcon from "../../icons/django.png";
import ReactJSIcon from "../../icons/reactjs.png";
import DocumentationIcon from "../../icons/documentation.png";

function Skills() {
  const cardStyle = {
    width: '24rem',
    height: '12rem',
  };

  const [skills] = useState(
    [
      {
        icon:DjangoIcon,
        Title: "Backend Dev - Django",
        para:"I have a good experience in backend development as a Django developer. I am doing this for the past 2 years and can build good APIs suitable for your website.",
      },

      {
        icon:ReactJSIcon,
        Title: "Frontend Dev - React Js",
        para:"I have just started working on React JS as a frontend dev, i can build good and simple designs for your website.",
      },

      {
        icon:DocumentationIcon,
        Title: "Documentation",
        para:"I can write good documentations for your projects and make sure its the best report i can generate for your app.",
      },

    ]
  )


  return (
    <div className="container mt-4">
      <h1>Skills</h1>

      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <img src={skill.icon} alt={skill.Title} style={{ width: '32px', height: '32px' }} />
                <h5 className="card-title">{skill.Title}</h5>
                <p className="card-text">{skill.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

import React from "react";

function Projects() {
  const cardStyle = {
    width: '18rem'
  };

  return (
    <div>
      <h1>Projects</h1>

      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

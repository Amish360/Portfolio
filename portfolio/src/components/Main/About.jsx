import React from "react";
import { useState } from "react";
import fbicon from "../../icons/fb.jpg";
import instaicon from "../../icons/insta.jpg";
import giticon from "../../icons/github.png";

function About() {
  const cardStyle = {
    width: '18rem',
    textDecoration: 'none', 
    color: 'inherit', 
    cursor: 'pointer' 
  };

  const [contacts] = useState([
    {
      icon: fbicon,
      Title: "Facebook",
      username: "Muhammd Amish Toor",
      href: "https://www.facebook.com/your_facebook_profile"
    },
    {
      icon: instaicon,
      Title: "Instagram",
      username: "amish360",
      href: "https://www.instagram.com/your_instagram_profile"
    },
    {
      icon: giticon,
      Title: "Github",
      username: "Amish360",
      href: "https://github.com/your_github_profile"
    }
  ]);

  return (
    <div className="container mt-4">
      <h1>Contact</h1>
      <div className="row">
        {contacts.map((contact, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <a href={contact.href} style={cardStyle} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="card-body">
                  <img src={contact.icon} alt={contact.Title} style={{ width: '32px', height: '32px' }} />
                  <h5 className="card-title">{contact.Title}</h5>
                  <h3 className="card-title">{contact.username}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

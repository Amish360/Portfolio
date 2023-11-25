import React from "react";
import profilepic from "../../image/profile.jpg";


function Jumbotron()
{
    return(
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <img src={profilepic} alt="Profile" style={{ width: '300x', height: '300px' }}/>
          <h1 class="display-4">Amish Toor</h1>
          <h2 class="display-4">Backend Developer</h2>
          <p class="lead">
           Welcome to my digital space! I am a final year student at DHA Suffa University, where my academic journey has been a thrilling exploration of the vast and dynamic realm of computer science. My passion lies at the intersection of Python, Django, and React JS, where I have honed my skills to craft seamless and innovative solutions. With a solid foundation in backend development using Python and Django, coupled with my proficiency in creating captivating user interfaces with React JS, I bring a holistic approach to web development.

            Throughout my academic tenure, I have embraced challenges and collaborated on projects that showcase my ability to translate ideas into tangible, user-centric applications. My commitment to staying abreast of the latest industry trends ensures that my skills are not only current but poised at the cutting edge of technology.

            Beyond the lines of code, I thrive in collaborative environments and approach each project with a blend of creativity and problem-solving acumen. As I embark on the transition from academia to the professional landscape, I am eager to contribute my skills and passion to projects that push the boundaries of what technology can achieve.

            Explore my portfolio, and let's connect to discuss how we can create impactful and innovative solutions together. 
            </p>
        </div>
      </div>
    );
}

export default Jumbotron;
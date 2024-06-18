import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image.png";
import Pdf from '../documents/CV.pdf';

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Yasmine </span>, a final year student pursuing <span>AI and Data Science </span> from Morocco. with a passion for technology and innovation. Throughout my academic journey, I have developed a strong foundation in artificial intelligence and data science, complemented by hands-on experience in development and app design. I'm all ears for <span>new opportunities</span> to create awesome software solutions.
          <br></br>
          <br></br>
          My dedication to learning and growing in this field drives me to continually enhance my skills and contribute to cutting-edge technological advancements.
          Additionally, I have a deep love for pixel art, which inspires my creativity and attention to detail in both my professional and personal projects. 
          Want to know more about me? Feel free to <a className='resume' href={Pdf} target="_blank" rel="noopener noreferrer">explore my resume.</a>
        </div>
        <div className="profile-photo">
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Yasmine</div>
      </div>
  );
}

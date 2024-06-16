import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/pixel.png";
import ScrollingBackground from './ScrollingBackground';

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}>
        <ScrollingBackground />
        <div className='content'>
            <div className="wrapper">
              <div className="name">Yasmine ZERBET</div>
              <div className="staticTitle">
                Designer
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/zerbet-yasmine/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}

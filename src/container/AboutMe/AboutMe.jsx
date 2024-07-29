import React from 'react';

import './AboutMe.css';

const AboutMe = () => (
  <div id='about' className="about">
    <div className="title-box">
      <h1>About Me</h1>
    </div>
    <div className="about-sections">
     
      <div className="about-right">
        <div className="about-para">
          <p>Hi! I'm a computer science student and a passionate self-taught programmer. I specialize in building user interfaces using JavaScript, ReactJS, CSS, HTML, and TailwindCSS. My goal is to create modern and responsive applications that combine aesthetics with functionality.</p>
          <p>Although I don't have professional experience as a front-end developer yet, I'm eager to learn and grow in this field. Apart from studying and coding, I'm always looking for new challenges and opportunities to expand my knowledge.</p>
        </div>
        <div className="about-skills">
          <div className="skills">
          <div className="about-skill html">
            <p>HTML & CSS</p>
            <hr />
          </div>
          <div className="about-skill react">
            <p>React JS</p>
            <hr />
          </div>
          <div className="about-skill js">
            <p>JavaScript</p>
            <hr />
          </div>
          <div className="about-skill tws">
            <p>TailwindCSS</p>
            <hr />
          </div>
          </div>

        </div>
      </div>
    </div>
    <div className="about-education">
      <hr />
      <h2>2022-2025</h2>
      <h1>Computer science</h1>
      <h3>Engineer's degree</h3>
      <h3>Merito Warsaw University</h3>
      <hr />
    </div>
  </div>
);

export default AboutMe;
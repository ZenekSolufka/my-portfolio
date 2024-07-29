import React from 'react';
import { images } from '../../constants';
import './MyWork.css';

const MyWork = () => (
  <div id='work' className="mywork">
    <div className="title-box">
      <h1>My latest works</h1>
    </div>
    <div className="mywork-container">
      <a href="https://zeneksolufka.github.io/gericht/" target='blanc'><img src={images.gericht} alt="gericht" /></a>
      <a href="https://zeneksolufka.github.io/gpt-jsm/" target='blanc'><img src={images.gpt3} alt="gpt3" /></a>
      <a href="https://zeneksolufka.github.io/fylo-dark-theme-landing-page/" target='blanc'><img src={images.fylo} alt="fylo" /></a>
    </div>
  </div>
);

export default MyWork;
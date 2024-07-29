import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="hero" id="home">
    <img src={images.image2} alt="profile" className='profile-img' />
    <h1><span>I'm Kacper Chełstowski,</span> frontend developer based in Poland.</h1>
    <p>I'm frontend developer from Poland. I'm looking for first job</p>
    <div className="hero-action">
      <div className="hero-connect">
        <a className='anchor-link' href="#contact">Connect with me</a>
      </div>
    </div>
  </div>
);

export default Header;
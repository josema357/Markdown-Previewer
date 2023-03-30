import React from 'react';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Markdown from '../assets/markdownOriginal.svg';
import '../styles/navbar.scss'

const Navbar = () => {
  return (
      <nav className='container-navbar'>
          <div className='container-title'>
              <span><img src={Markdown} alt="logo" /></span>
              <div >Markdown Previewer</div>
          </div>
          <div className='container-links'>
              <span><a href="https://linkedin.com/in/josema317" target="_blank"><img src={Linkedin} alt="linkedin" /></a></span>
              <span ><a href="https://github.com/josema357" target="_blank"><img src={Github} alt="github" /></a></span>
          </div>
      </nav>
  )
}

export default Navbar
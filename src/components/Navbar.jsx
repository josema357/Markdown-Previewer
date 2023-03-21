import React from 'react';
import Linkedin from '/linkedin.svg';
import Github from '/github.svg';
import Markdown from '/markdownOriginal.svg';
import '../styles/navbar.scss'

const Navbar = () => {
  return (
      <div className='container-navbar'>
          <div>
              <span><img src={Markdown} alt="logo" /></span>
              <div >Markdown Previewer</div>
          </div>
          <div >
              <span><a href=""><img src={Linkedin} alt="linkedin" /></a></span>
              <span ><a href=""><img src={Github} alt="github" /></a></span>
          </div>
      </div>
  )
}

export default Navbar
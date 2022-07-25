import React from 'react'
import "./Home.css"
const HeaderSocials = () => {
  return (
   <div className="home__socials">
    <a href="https://www.instagram.com/shantanuamle_/" className="home__socials-link" target="_blank">
    <i className="fa-brands fa-instagram"></i>
    </a>
    
    <a href="https://github.com/Shantanuamle" className="home__socials-link" target="_blank">
    <i className="fa-brands fa-github"></i>
    </a>

    <a href="https://www.behance.net/shantanuamle" className="home__socials-link" target="_blank">
    <i className="fa-brands fa-behance"></i>
    </a>

    <a href="https://www.facebook.com/shantanu.amle.7/" className="home__socials-link" target="_blank">
    <i className="fa-brands fa-facebook"></i>
    </a>

    <a href="https://twitter.com/" className="home__socials-link" target="_blank">
    <i className="fa-brands fa-twitter"></i>
    </a>
   </div>
  )
}

export default HeaderSocials
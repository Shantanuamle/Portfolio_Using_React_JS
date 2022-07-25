import React from 'react'
import "./Home.css"
import Me from "../../assets/av1.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" style={{width: "210px"}}
     />
        <h1 className="home__name">Shantanu Amle</h1>
        <span className="home__education">I'm a Front End Developer</span>
        <HeaderSocials />

        <a href="#contacts" className="btn">Hire Me</a>
        <ScrollDown />
      </div>
      <Shapes />

    </section>
  )
}

export default Home
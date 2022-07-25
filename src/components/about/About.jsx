import React from 'react'
import "./About.css"
import Image from "../../assets/about.png";
const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" style={{width: "150px" }} />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Shantanu Amle from Nagpur.
              I am pursuing B.E. from Shri Ramdeobaba College of Engineering and Management, Nagpur in Electronics Engineering and currently I am in Final year of Engineering. My hobbies are photography, digital illustration and FPS gaming.   </p>
            <a href="https://drive.google.com/file/d/1RJ5H2FY_WZhkxkifpx8K71bRgXdjc9Cq/view?usp=sharing" className="btn" target="_blank" >Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front End Development</h3>
                <span className="skills__number ">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Graphic Designing</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage graphicdesign"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Vector illustration</h3>
                <span className="skills__number ">78%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage vector"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
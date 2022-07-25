import React from 'react'
import "./Services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Graphic Designing & illustration",
    description:
      "From vector to raster illustration styles, I have the skills to produce a series of illustrations that have a very stand out and permanent use, such as book illustrations, packaging design, and poster art. ",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography & Editing",
    description:
      "✅Portrait Photography , Product Photography , Interior Photography, Cinematic Video Shooting & Editing.",
  },
];


const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
    
    <div className="services__container grid">
      {data.map(({id,image,title,description})=>{
        return(
          <div className="services__card" key={id}>
          <img src={image} alt="" className='services__img' />
          <h3 className="services__title">{title}</h3>
          <p className="services__description">{description}</p>
          
          </div>
        )
      })}
    </div>
    </section>
  )
}

export default Services
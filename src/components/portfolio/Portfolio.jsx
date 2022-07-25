import React, { useState } from 'react'
import "./Portfolio.css"
import Menu1 from './Menu'



const Portfolio = () => {
  const [items, setItems] = useState(Menu1);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu1.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }
 
 

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
         <span className="work__item" onClick={() => setItems(Menu1)}>Everything</span> 
        <span className="work__item" onClick={() => filterItem("Projects")}>Projects</span>
        <span className="work__item" onClick={() => filterItem("Photography")}>Photography</span>
        <span className="work__item" onClick={() => filterItem("Artworks")}>Artworks</span>
        <span className="work__item" onClick={() => filterItem("Mockup")}>Mockup Designs</span>
      </div>

     




      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
      <a href="https://www.instagram.com/shantanuamle_/" className="btn" style={{margin:"10px"}} target="_blank" >More</a>
    </section>
  )
}

export default Portfolio
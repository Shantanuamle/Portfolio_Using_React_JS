import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <section className="contact container section" id="contacts">
      <h2 className="section__title">Get In Touch</h2>
   
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your Name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Enter your Email' />
            </div>

            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Enter your Subject' />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='write your message'></textarea>
            </div>

            <a href="mailto::amleshantanu2002@gmail.com" className='send__Button'>Send Message</a>
    
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
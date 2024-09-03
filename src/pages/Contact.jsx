import React from 'react'
import './Contact.css'
import Navbar from '../components/Navbar'
import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Mail from '../assets/mail.png'
import Tel from '../assets/telephone.png'

function Contact() {
  return (
    <div className='contact__container'>
      <h1>CONTACT</h1>
      <div className='social__icon' >
        <a href='https://www.linkedin.com/in/chadaporn-silasawun-9b7449316/' target='__blank'>
          <img src={LinkedIn}/>
          <span>Linked-IN</span>
        </a>
        <a href='https://github.com/arrcxp?tab=repositories' target='__blank'>
          <img src={Github}/>
          <span>github.com/arrcxp</span>
        </a>
      </div>
      <div className='social__icon'>
        <a href='mailto:chadaporn.silasawunn@gmail.com' target='__blank'>
          <img src={Mail}/>
          <span>chadaporn.silasawunn</span>
        </a>
        <a href='tel:+66939028208' target='__blank'>
          <img src={Tel}/>
          <span>093-902-8208</span>
        </a>
      </div>
      <Navbar />
    </div>
  )
}

export default Contact
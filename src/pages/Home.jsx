import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Resume_TH from '../assets/Resume-TH.pdf'
import Resume_EN from '../assets/Resume-EN.pdf'
import Profile from '../assets/profile.jpg'

function Home() {
  return (
    <div className='home__container'>
        <section className='home__box'>
            <section className='home__box__information'>
                <div className='text__top'>
                    <p>18</p>
                    <p>JUNE</p>
                </div>
                <img src={Profile}/>
                <div className='text__bottom'>
                    <h4>HELLO,</h4>
                    <h3>I'm CHADAPORN</h3>
                    <h6>FRONT-END DEVELOPER</h6>
                </div>
            </section>
            <div className='home__btn__resume'>
                <a href={Resume_TH} target='__blank' >Résumé-TH</a>
                <a href={Resume_EN} target='__blank' ><span>Résumé-</span>EN</a>
            </div>
        </section>
        <Navbar />
    </div>
  )
}

export default Home
import React from 'react'
import './Project.css'
import Navbar from '../components/Navbar'

import ImgPre1 from '../assets/project__preview__1.jpg';
import ImgPre2 from '../assets/project__preview__2.jpg';
import ImgPre3 from '../assets/project__preview__3.jpg';

function Project() {
    const images = [ImgPre1, ImgPre2, ImgPre3];
    const project__preview = [
        { 
          title: 'Recipe Page', 
          lang: 'HTML | CSS',
          url: 'https://arrcxp.github.io/Recipe-page-with-Responsive/' 
        },
        { 
          title: 'Netflix Clone', 
          lang: 'HTML | CSS | JS',
          url: 'https://arrcxp.github.io/netflix__react/'
        },
        { 
          title: 'E-Commerce', 
          lang: 'HTML | CSS | JS(React)', 
          url: 'https://arrcxp.github.io/Ketnipz-E-Commerce-Web/'
        },
      ];

  return (
    <div className='project__container'>
        <h1>PROJECTS <span className='icon__code'>{`</>`}</span></h1>
        <h2>STILL LEARNING</h2>
        <section className='projects__list'>
            {project__preview.map((items, index) => (
                <a href={items.url} 
                target='__blank'
                key={index} 
                className='list__box'>
                    <img src={images[index]} alt={items.title} />
                    <span>
                      <h4>{items.title}</h4>
                      <p>{items.lang}</p>
                    </span>
                </a>
            ))}
        </section>
        <Navbar />
    </div>
  )
}

export default Project
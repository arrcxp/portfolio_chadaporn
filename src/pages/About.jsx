import React, { useState } from 'react'
import './About.css'
import Navbar from '../components/Navbar'

function About() {
    const [selectedSkill, setSelectedSkills] = useState('all');
    const handleSelectSkills = (skill) =>{
        setSelectedSkills(skill);
    }

    const skills__langes = [
        {title: 'HTML', url: 'https://img.icons8.com/ios-filled/50/html-5--v1.png' },
        {title: 'CSS', url: 'https://img.icons8.com/ios-filled/50/html-5--v1.png'},
        {title: 'javaScript', url: 'https://img.icons8.com/ios-filled/50/javascript.png'},
        {title: 'SQL', url: 'https://img.icons8.com/external-those-icons-fill-those-icons/50/external-SQL-development-files-those-icons-fill-those-icons.png'},
      ]
    
      const skills__frames = [
        { title: 'Bootstrap', url: 'https://img.icons8.com/ios-filled/50/bootstrap.png' },
        { title: 'React', url: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png' },
      ]
    
      const skills__tools = [
        { title: 'Figma', url: 'https://img.icons8.com/ios-filled/50/figma--v1.png' },
        { title: 'VS Code', url: 'https://img.icons8.com/ios-filled/50/visual-studio.png' },
      ]
    

  return (
    <div className='about__container'>
        <section className='about__box__information'>
            <h2 className='text__aboutMe'>
                <h2>ABOUT ME</h2> 
                <h2>▶</h2>
            </h2>
            <p>Hi, I’m Chadaporn Silasawan (Tong), a 21-year-old 
                senior studying Computer Engineering at Sripatum University. 
                I’m passionate about pursuing a career as a Front-End Developer.</p>
        </section>
        <section className='about__box__skills'>
            <h2>SKILLS</h2>
            <ol>
                <li onClick={() => handleSelectSkills('all')}
                    className={selectedSkill === 'all' ? 'li_active' : ''}>ALL</li>
                <li onClick={() => handleSelectSkills('lang')}
                    className={selectedSkill === 'lang' ? 'li_active' : ''}>Language</li>
                <li onClick={() => handleSelectSkills('frame')}
                    className={selectedSkill === 'frame' ? 'li_active' : ''}>Frameworks</li>
                <li onClick={() => handleSelectSkills('tool')}
                    className={selectedSkill === 'tool' ? 'li_active' : ''}>Tools</li>
            </ol>
            {selectedSkill === 'all' && 
                <div className='skill__container'>
                    <div className='all__lang__box '>
                        {skills__langes.map((item, index) => (
                            <div key={index} className='skill_box'>
                                <img src={item.url}/>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                    <div className='all__frameNtool__box'>
                        <div className='all__frame__box'>
                            {skills__frames.map((item, index) => (
                                <div key={index} className='skill_box-1'>
                                    <img src={item.url}/>
                                    <h4>{item.title}</h4>
                                </div>
                            ))}
                        </div>
                        <div className='all__tool__box'>
                            {skills__tools.map((item, index) => (
                                <div key={index} className='skill_box-2'>
                                    <img src={item.url}/>
                                    <h4>{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            {selectedSkill === 'lang' && 
                <div className='skill__container'>
                    <div className='all__lang__box '>
                        {skills__langes.map((item, index) => (
                            <div key={index} className='skill_box'>
                                <img src={item.url}/>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {selectedSkill === 'frame' && 
                <div className='skill__container'>
                    <div className='all__frame__box'>
                        {skills__frames.map((item, index) => (
                            <div key={index} className='skill_box'>
                                <img src={item.url}/>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {selectedSkill === 'tool' && 
                <div className='skill__container'>
                    <div className='all__lang__box '>
                        {skills__tools.map((item, index) => (
                            <div key={index} className='skill_box'>
                                <img src={item.url}/>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </section>
        <Navbar />
    </div>
  )
}

export default About
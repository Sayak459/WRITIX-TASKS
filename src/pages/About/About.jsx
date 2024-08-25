import React from 'react'
import './About.css'
import AboutPic from '../../assets/images/AboutPic.jpg'

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img">
                        <img src={AboutPic}
                            alt="profile_pic" />
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-content">
                        <h1>About Me!</h1>
                        <p>I'm Sayak, a passionate and dedicated fresher with strong skills in Java, SQL,
                            DBMS, OOPs, and React. I'm enthusiastic about learning and implementing new technologies, with a focus on full-stack development.
                            I thrive on challenges and continuously strive to improve my skills,
                            preparing for opportunities in the tech industry, including placements and competitive exams.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
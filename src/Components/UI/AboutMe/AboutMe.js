import React from 'react';
import './AboutMe.css';
import NaveenImg from '../../../Assets/Images/NaveenKewlani.jpeg'

const AboutMe = (props) => {
    return (
        
            <div className='aboutme-container' >
                <div className='aboutme-title' >
                    About Me
                </div>
                <div className='aboutme-image-container' >
                <img className='aboutme-image' src={NaveenImg} />
                </div>
                <div className='aboutme-description' >
                Hi. I am Naveen Kewlani and welcome to my Digital Resume. <br />
                I am a profound JavaScript developer specialised in front-end development.
                I have created several front-end applications and hosted them online.
                I also have expertise in Data Structures and algorithms. Currently I am 
                completing final semester of my <span style={{fontWeight: "bold"}}>B. Tech. in 
                Electronics and Communication Engineering from Indian Institute of Information
                Technology, Una</span> <br />
                Please go ahead and checkout my skills and projects mentioned below. Also, send
                me a message and I will get back to you as soon as possible.
                </div>
            </div>
    )
}

export default AboutMe;
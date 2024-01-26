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
                Hi. I am Naveen Kewlani. This is my Portfolio <br />

                I have 2+ years of combined IT experience and 1+ years of experience in web development.
                I have created 5+ Web projects for self and clients.  

                I am a profound <span style={{fontWeight: "bold"}}>JavaScript developer specialised in front-end development.
                I have expertise in Data Structures and algorithms.</span> Currently I am 
                working in deloitte as an analyst. 
                I completed my B. Tech. in 
                Electronics and Communication Engineering from Indian Institute of Information
                Technology, Una in 2022<br />
                Feel free to checkout my skills and projects mentioned below. Also, send
                me a message and I will get back to you as soon as possible.
                </div>
            </div>
    )
}

export default AboutMe;
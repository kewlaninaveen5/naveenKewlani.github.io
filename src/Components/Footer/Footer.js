import React from 'react';
import SocialMediaButton from '../UI/Buttons/SocialMediaButtons';
import GetInTouch from '../UI/GetInTouch/GetInTouch';
import './Footer.css';

const Footer = (props) => {
    return (
        
            <div className='footer-container' >
                <GetInTouch />
                <div className='footer-contact-details' >
                     
                    <div className='contact address' >
                        391 Ram Nagar <br/> Shastri Nagar <br /> Jaipur, Rajasthan <br /> 302016
                    </div>
                    <div className='vertical-rule' />
                    <div className='contact email-number' >
                        kewlaninaveen5@gmail.com <br/>
                        9468599998
                    </div>
                </div>
                <div className='socialmedia-buttons' >
                    <SocialMediaButton 
                    clicked={() => window.open("https://www.instagram.com/the.way.tungsten/")}
                    icon="instagram" />
                    <SocialMediaButton 
                    clicked={() => window.open("https://www.linkedin.com/in/naveen-kewlani-4b1368171/")}
                    icon="linkedin" />
                    <SocialMediaButton
                    clicked={() => window.open("https://github.com/kewlaninaveen5")}
                     icon="github" />
                    <SocialMediaButton
                    clicked={() => window.open("https://www.youtube.com/c/KewalTravel")}
                     icon="youtube" />
                </div>
            </div>
    )
}

export default Footer;
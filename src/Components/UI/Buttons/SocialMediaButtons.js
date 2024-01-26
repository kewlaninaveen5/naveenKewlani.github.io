import React from 'react';
import './Buttons.css';
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMediaButton = (props) => {


    let icon;
    switch (props.icon) {
        case "instagram":
            icon = <BsInstagram className='icon-icon'/>
                break;
        case "linkedin":
            icon = <BsLinkedin className='icon-icon'/>
                break;
        case "youtube":
            icon = <BsYoutube className='icon-icon'/>
            break;
        case "github":
            icon = <BsGithub className='icon-icon'/>
            break;

        default:
            return null
        }



    return (
        
            <div onClick={props.clicked}
            className='socialmedia-button' >
                {icon}
            </div>
    )
}

export default SocialMediaButton;
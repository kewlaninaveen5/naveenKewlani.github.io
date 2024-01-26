import React, { useRef, useState } from 'react';
import MyInput from '../MyInput/MyInput';
import './GetInTouch.css';
import WhiteButton from '../Buttons/WhiteButton';
import MyTextbox from '../MyTextbox/MyTextbox';
// import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs from '@emailjs/browser';

const GetInTouch = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        if(!Name || !Email || !Message) {
            alert("Please provide all details.")
            return;
        }
    
        emailjs.sendForm('service_xohvhzs', 'template_tasl1o8', form.current, 'user_wRYpJVFUiKcXBLRZlZNL2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('')
        setEmail('')
        setMessage('')
    }

    const nameEntered = (e) => {
        setName(e.target.value)
    }

    const emailEntered = (e) => {
        setEmail(e.target.value)
    }

    const messageEntered = (e) => {
        setMessage(e.target.value)
    }



    return (
        <div className="getintouch-container" >
            <div className="getintouch text" >
            Get In Touch
            </div>
            <div className='getintouch form' >
                <div className='form' >

                    <form ref={form} onSubmit={sendEmail} >
                <div className='form-name-email' >

                    <MyInput 
                    name="name"
                    type="name"
                    placeholder="Your Name"
                    value={Name} changed={(event)=> nameEntered(event)} />
                    <MyInput 
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    changed={(event)=> emailEntered(event)}  value={Email} />
                </div>
                <div className='form-description' >
                    <MyTextbox 
                    name="message"
                    placeholder={"Write your Message here"}
                    changed={(event)=> messageEntered(event)}  value={Message} />
                </div>
                <input className='send-mail' type="submit" value="Send Mail" />
                {/* <WhiteButton btnName='Send Mail' clicked={(event)=>sendEmail(event)} /> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;
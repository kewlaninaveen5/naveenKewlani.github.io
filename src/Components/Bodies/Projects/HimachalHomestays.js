import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import HH1 from '../../../Assets/Images/HH1.png';
import HH2 from '../../../Assets/Images/HH2.png';
import HH3 from '../../../Assets/Images/HH3.png';
import HH4 from '../../../Assets/Images/HH4.png';
import './CommonStyles.css';
import BlueButton from '../../UI/Buttons/BlueButton';

const HimachalHomestays = (props) => {



    return (
        <div className='project-container' >
            <Header />
            <div className='project-title' >
                Himachal Homestays
            </div>
            <div className='project-content' >
                This is my major project. It has:
                <div className='ul' >
                <ul>
                    <li>
                        <div className='list-item-div' >
                            User authentication with email and password. Also takes user name
                             and profile photo.
                        </div>
                        <div className='list-item-image-container'>
                        <img src={HH4} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            The users can register their homestays in the database, can share
                            their travel experience with photos and can also book a homestay.

                        </div>
                        <div className='list-item-image-container'>
                        <img src={HH2} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            To book the homestay, user has to make a payment from google pay.
                            On completion, the user is redirected to the bookings completion page.
                        </div>
                        <div className='list-item-image-container'>
                        <img src={HH1} className='list-item-image'  />
                        </div>
                        <div className='list-item-image-container'>
                        <img src={HH3} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            The users can also check their old bookings and any homestays they registered.
                        </div>
                        <div className='list-item-image-container'>
                        <img src={HH4} className='list-item-image'  />
                        </div>
                    </li>
                </ul>
                </div>

                Visit the project here:
                <div className='project-link-button' >
                <BlueButton btnName="Visit" 
                clicked={()=>window.open("https://himachal-homestays.web.app/")} />
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default HimachalHomestays;
import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Shimla from '../../../Assets/Images/Shimla.jpg'
import BS1 from '../../../Assets/Images/BS1.png';
import BS2 from '../../../Assets/Images/BS2.png';
import BS3 from '../../../Assets/Images/BS3.png';
import './CommonStyles.css';

const MyBrochure = (props) => {
    return (
        <div className='project-container' >
            <Header />
            <div className='project-title' >
                My Digital Resume
            </div>
            <div className='project-content' >
            Key Features of this project are:
                <div className='ul' >
                <ul>
                    <li>
                        <div className='list-item-div' >
                            The website you are watching right now is this project itself.
                            It showcases most of my skills and projects at one single place.


                        </div>
                        <div className='list-item-image-container'>
                        <img src={BS1} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            This project consists of different front-end concepts
                            used in designing a simple, user friendly and beautiful website.
                            It also has <span style={{"fontWeight": "bold"}} >
                            Responsive web design</span> and beautiful graphics.
    

                        </div>
                        <div className='list-item-image-container'>
                        <img src={BS2} className='list-item-image'  />
                        </div>
                        <div className='list-item-image-container'>
                        <img src={BS3} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            I have used lazy loading, react routing and REDUX in this project.
                            
                        </div>
                    </li>
                </ul>
                </div>

            </div>


            



            <Footer />

        </div>
    )
}

export default MyBrochure;
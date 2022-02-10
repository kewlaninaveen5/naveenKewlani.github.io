import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import BB1 from '../../../Assets/Images/BB1.png';
import BB2 from '../../../Assets/Images/BB2.png';
import BB3 from '../../../Assets/Images/BB3.png';
import './CommonStyles.css';
import BlueButton from '../../UI/Buttons/BlueButton';

const BurgerBuilder = (props) => {
    return (
        <div className='project-container' >
            <Header />
            <div className='project-title' >
                Burger Builder Project
            </div>
            <div className='project-content' >
                Key Features of this project are:
                <div className='ul' >
                <ul>
                    <li>
                        <div className='list-item-div' >
                            A costumizable Burger which reflects user selected composition of 
                            burger ingredients like cheese, salad, paneer etc to the user.
                            Also shows order Summary upon completion
                        </div>
                        <div className='list-item-image-container'>
                        <img src={BB1} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            Sends server request with axios to show all the previous orders
                            submitted till date. 
                        </div>
                        <div className='list-item-image-container'>
                        <img src={BB2} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            Takes in user address in a form and responds on incorrect entry 
                            with <span style={{color:'red'}} >"this is a Required Field"</span>
                        </div>
                        <div className='list-item-image-container'>
                        <img src={BB3} className='list-item-image'  />
                        </div>
                    </li>
                    
                </ul>
                </div>

                Other than this the project is made up of technologies
                React.JS, React Router, Firebase, Github, HTML, CSS and many more. <br />
                You can Visit the project here:
                <div className='project-link-button' >
                <BlueButton btnName="Visit" 
                clicked={() => window.open("https://burger-builder-project-76b2a.web.app/")} />

                

                </div>

            </div>


            



            <Footer />

        </div>
    )
}

export default BurgerBuilder;
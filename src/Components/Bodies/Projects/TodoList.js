import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import TD1 from '../../../Assets/Images/TD1.png';
import TD2 from '../../../Assets/Images/TD2.png';
import './CommonStyles.css';
import BlueButton from '../../UI/Buttons/BlueButton';

const TodoList = (props) => {
    return (
        <div className='project-container' >
            <Header />
            <div className='project-title' >
                Todo List App
            </div>
            <div className='project-content' >
                This is my first and most basic project. It uses:
                <div className='ul' >
                <ul>
                    <li>
                        <div className='list-item-div' >
                            React Class components to store all the data user entered.
                        </div>
                        <div className='list-item-image-container'>
                        <img src={TD1} className='list-item-image'  />
                        </div>
                    </li>
                    <li>
                        <div className='list-item-div' >
                            A user can write down the list of items, mark them as completed and 
                            also delete them if not required.
                        </div>
                        <div className='list-item-image-container'>
                        <img src={TD2} className='list-item-image'  />
                        </div>
                    </li>
                    
                </ul>
                </div>

                Visit the project here:
                <div className='project-link-button' >
                <BlueButton btnName="Visit"
                clicked={()=>window.open("https://naughty-yonath-bff301.netlify.app/")} />
                </div>

            </div>


            



            <Footer />

        </div>
    )
}

export default TodoList;
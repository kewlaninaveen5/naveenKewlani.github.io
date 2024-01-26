import React from 'react';
import Header from '../../Header/Header';
import './Homepage.css';
import BS1 from '../../../Assets/Images/BS1.png';
import HH1 from '../../../Assets/Images/HH1.png';
import Shimla from '../../../Assets/Images/Shimla.jpg';
import MajorProjectBox from '../../UI/MajorProjectBox/MajorProjectBox';
import OtherDetailsBox from '../../UI/OtherDetailsBox/OtherDetailsBox';
import AboutMe from '../../UI/AboutMe/AboutMe';
import Footer from '../../Footer/Footer';
import { withRouter } from "react-router-dom";
import ExpandableTab from '../../UI/Dorpdown/ExpandableTab';
import NonexpandableTab from '../../UI/Dorpdown/NonexpandableTab';

const Homepage = (props) => {

    const readMoreClicked = (page) => {
        // console.log(props)
        props.history.push(`/${page}`)
        // HimachalHomestays
    }


    return (
        <div className="homepage-container" >
            <Header />
            <AboutMe />
            <div className="skills-container">
            <ExpandableTab tabName='Skills' >
                <ExpandableTab tabName='Languages' >
                    <NonexpandableTab tabName='JavaScript' profiency='Advanced' />
                    <NonexpandableTab tabName='C' profiency='Advanced' />
                    <NonexpandableTab tabName='CPP' profiency='Intermediate' />
                    <NonexpandableTab tabName='English' profiency='Fluent' />
                    <NonexpandableTab tabName='Hindi' profiency='Native' />
                    {/* <NonexpandableTab tabName='German' profiency='Beginner' /> */}
                </ExpandableTab>
                
                <ExpandableTab tabName='Frameworks' >
                <NonexpandableTab tabName='React.JS' profiency='Advanced' />
                <NonexpandableTab tabName='React Native' profiency='Advanced' />
                <NonexpandableTab tabName='REDUX' profiency='Advanced' />
                <NonexpandableTab tabName='Visual Studio Code' profiency='Advanced' />
                <NonexpandableTab tabName='Github' profiency='Intermediate' />
                </ExpandableTab>
                <ExpandableTab tabName='Other Academic Skills' >
                <NonexpandableTab tabName='Linux' profiency='Intermediate' />
                <NonexpandableTab tabName='Data Structures' profiency='Advanced' />
                <NonexpandableTab tabName='Algorithms' profiency='Intermediate' />
                <NonexpandableTab tabName='Postman' profiency='Advanced' />
                <NonexpandableTab tabName='Firebase Integration' profiency='Advanced' />
                </ExpandableTab>
                <ExpandableTab tabName='Non Academic skills' >
                <NonexpandableTab tabName='Adobe Photoshop' profiency='Advanced' />
                <NonexpandableTab tabName='Adobe Lightroom' profiency='Advanced' />
                <NonexpandableTab tabName='Adobe Premiere Pro' profiency='Advanced' />
                <NonexpandableTab tabName='Presentation Skills' profiency='Advanced' />
                <NonexpandableTab tabName='Leadership and Teamwork' profiency='Advanced' />
                </ExpandableTab>
            </ExpandableTab>
            </div>
            
            <div className='skill-box-container'>
                <div className='homepage-box-title' >
                Major Projects
                </div> 


            <MajorProjectBox 
            header="Travel Website" 
            projectImage={HH1}
            clickedReadMore={() =>readMoreClicked("HimachalHomestays") }
            websiteOpened={()=>window.open("https://himachal-homestays.web.app/")}
            
            // disable={"true"}
            description="(Under Development) A website to view and book Homestays in 
            Himachal Pradesh (India)." />


            <MajorProjectBox
             header="Brochure Website " 
            projectImage={BS1}
             clickedReadMore={() =>readMoreClicked("MyBrochure") }
             websiteOpened={()=>window.open("https://naveen-kewlani.firebaseapp.com/")}
             description="A website for self. It is made as an Interactive Resume. " />
            </div>
            <div className='other-details-container'>
            
            <div className='homepage-box-title' >
                Other Minor Projects
                </div>


                <OtherDetailsBox
                clickedReadMore={() =>readMoreClicked("BurgerBuilder") }
                header="Burger Builder" 
                websiteOpened={()=>window.open("https://burger-builder-project-76b2a.web.app/")}
                description="A website to view and order costumizeable Burgers.
                 It uses firebase as server and makes beautiful graphics with CSS." />


                <OtherDetailsBox 
                clickedReadMore={() =>readMoreClicked("TodoList") }
                header="Todo List"
                websiteOpened={()=>window.open("https://naughty-yonath-bff301.netlify.app/")}
                description="A website which stores User provided data into different list items.
                 Also marks as completed and can also delete any entry upon not in use." />


                <OtherDetailsBox 
                disable={"true"}
                disableReadMore={"true"}
                header="Third Party API calling app" 
                description="The project is still in planning phase. A link will be provided
                 as soon as it is ready." />
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(Homepage);
import React from 'react';
import WhiteButton from '../Buttons/WhiteButton';
import './OtherDetailsBox.css';

const OtherDetailsBox = (props) => {
    return (
        <div className="otherdetailsbox-container" >
            <div className='otherdetailsbox-header' >
            {props.header}
            </div>
            <div className='otherdetailsbox-content' >
            {props.description}
            </div>
            <WhiteButton 
            clicked={props.clickedReadMore}
            disable={props.disableReadMore} 
            btnName={"Find out More"} />
            <WhiteButton 
            clicked={props.websiteOpened}
            disable={props.disable} 
            btnName={"Visit Website"} />
        </div>
    )
}

export default OtherDetailsBox;
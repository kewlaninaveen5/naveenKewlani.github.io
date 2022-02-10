import React from 'react';
import BlueButton from '../Buttons/BlueButton';
import './MajorProjectBox.css';

const MajorProjectBox = (props) => {
    return (
        <div className="MajorProjectBox-container" >
            <div className='MajorProjectBox-header' >
                {props.header}
            </div>
            <img src={props.projectImage} className='MajorProjectBox-image' />
            <div className='MajorProjectBox-content' >
            {props.description}
            </div>
            <BlueButton btnName={"Read More"} clicked={props.clickedReadMore} />
            <BlueButton 
            clicked={props.websiteOpened}
            btnName={'Visit Website'} disable={props.disable} />
        </div>
    )
}

export default MajorProjectBox;
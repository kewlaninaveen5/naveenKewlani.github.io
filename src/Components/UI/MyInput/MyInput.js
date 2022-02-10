import React from 'react';
import './MyInput.css';

const MyInput = (props) => {
    return (
        <div className="myinput-container" >
            <input 
            onChange={props.changed}
            value={props.value}
            type={props.type}
            name={props.name}
            className={`myinput${props.description ? '-description' : ''}` } 
            placeholder={props.placeholder} />
        </div>
    )
}

export default MyInput;
import React from 'react';
import './MyTextbox.css';

const MyTextbox = (props) => {
    return (
        <div className="mytextbox-container" >
            <textarea
            name={props.name}
            onChange={props.changed}
            value={props.value}
            className="mytextbox"
            placeholder={props.placeholder} />
        </div>
    )
}

export default MyTextbox;
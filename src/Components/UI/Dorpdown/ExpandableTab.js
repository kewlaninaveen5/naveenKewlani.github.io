import React, { useState } from 'react';
import './ExpandableTab.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const ExpandableTab = (props) => {

    const [isOpened, setIsOpened] = useState(false);

    const tabClickedHandler = () => {
        const old = isOpened;
        setIsOpened(!old);
    }


    return (
        <div>
                <div 
                    className='expandabletab-container'>
                <div  
                    onClick={()=>tabClickedHandler()}
                className='expandabletab-tabname' >
                    {props.tabName}
                    {isOpened ? <AiOutlineUp className='icon'/> : <AiOutlineDown className='icon'/>}
                </div>
                
                </div>
                <div className="left-margin-for-children">
                <div className={`expandable-children${isOpened ? '' : '-hidden'}`} >
                    {props.children}
                </div>
                </div>
                

        </div>
            
    )
}

export default ExpandableTab;
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
                    onClick={()=>tabClickedHandler()}
                    className='expandabletab-container'>
                <div className='expandabletab-tabname' >
                    {props.tabName}
                </div>
                    {isOpened ? <AiOutlineUp className='icon'/> : <AiOutlineDown className='icon'/>}
                
                </div>
                
                <div className={`expandable-children${isOpened ? '' : '-hidden'}`} >
                    {props.children}
                </div>
                

        </div>
            
    )
}

export default ExpandableTab;
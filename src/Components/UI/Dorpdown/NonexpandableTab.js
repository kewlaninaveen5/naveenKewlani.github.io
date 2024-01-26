import React from 'react';
import './ExpandableTab.css';

const NonexpandableTab = (props) => {
    return (
        
            <div 
            className={`nonexpandabletab-container`}>
                <div className='nonexpandabletab-tabname' >
                {props.tabName}
                </div>
                <div className='nonexpandabletab-profiency' >
                    {props.profiency}
                </div>
            </div>
    )
}

export default NonexpandableTab;
import React from 'react';
import './Header.css';
import CopyToClipboard from 'react-copy-to-clipboard';


const Header = () => {
    return (
        <div className="header-container" >
            <div className='website-name' >
                Naveen Kewlani
            </div>
            <CopyToClipboard text="9468599998" onCopy={()=>alert("Copied to clipboard")} >
            <div className=' phone-email phone'>
                9468599998 
            </div>
            </CopyToClipboard>
            <CopyToClipboard text="kewlaninaveen5@gmail.com " onCopy={()=>alert("Copied to clipboard")} >
            <div className=' phone-email email'>
                kewlaninaveen5@gmail.com 
            </div>
            </CopyToClipboard>
            
        </div>
    )
}

export default Header;
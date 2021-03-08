import React from 'react'
import logo from '../../assets/logo.png'
import "./Nav.css"

const Nav = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="flash-logo" />
                <p className="flash-logo-text">FLASH ⌨ TYPE</p>
             </div>

             <div className="nav-right">
                <a target="_blank" className="nav-link" href="https://effectiviology.com/how-to-type-faster/" rel="noreferrer">
                    How to touch type
                </a>
             </div>
        </div>
     );
}
 
export default Nav;
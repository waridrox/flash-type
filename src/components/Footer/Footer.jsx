import React from 'react'
import './Footer.css'
import github from '../../assets/github.svg'

const Footer = () => {
    return ( 
        <div className="footer-container">
            <a href="https://github.com/waridrox" className="footer-link" target="_blank" rel="noreferrer"> 
            <img src={github} alt="github-icon" className="gh-icon"/> Source Code
            </a>
        </div>
     );
}
 
export default Footer;
import React from 'react';
import logo from '../Images/Logo.png'
import LinkedIn from '../Images/Linkedin.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import twitter from '../Images/twitter.png';
import copyright from '../Images/copyright.png';

const Footer = () => {
    return ( 
    <div className='footer-Container'>
    <div className='line'>
        <div className='LogoF col-s6'>
            <img src={logo}></img>
        </div>
        <div className='left col-s6'>
            <a href='https://www.linkedin.com/company/protodrop/about/'className='links'>
                <img src={LinkedIn}></img>
            </a>
            <a href='https://www.facebook.com/protodrop/'className='links'>
                <img src={facebook}></img>
            </a>
            <a href='https://twitter.com/Proto_Drop'className='links'>
                <img src={twitter}></img>
            </a>
            <a className='links'>
                <img src={instagram}></img>
            </a>
        </div>
    </div>
    <div className='footer'>
    </div>
    <div className='right'>
        <img src={copyright}></img>
        <span>ProtoDrop 2019</span>
    </div>
    </div>
    );
}
 
export default Footer;
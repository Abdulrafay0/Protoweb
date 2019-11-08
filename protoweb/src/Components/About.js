import React from 'react';
import about from '../Images/about.png';

const About = () => {
    return (
    <div className='About'>
        <div className='row'>
        <div className='col-s6'>
        <div className='About-container'>
            <div className='About-header'>About Us</div>
            <span className='About-span'>Who are we</span>
            <p className='About-text'>
                ProtoDrop (private) Limited is a digital transformation consultancy and
                software development company that provides cutting edge Engineering solutions, IT consultancy, 
                Hardware and Software design for Power Systems, IoT based solutions, AI Web and Mobile Applications.
                Our team of engineers work on the complete production line independently or with clients.
            </p>
        </div>
        </div>
        <div className='col-s6'>
            <div className='About-container-2'>
                <img src={about}></img>
            </div>
        </div>
        </div>
    </div>
    );
}
 
export default About;
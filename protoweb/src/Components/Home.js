import React from 'react';
import Logo from '../Images/Logo.png';

const Home = () => {
    return (
        <div className='Body-container'>
            <div className='Body'>
                <div className='Slogon'>
                    <span>Future</span>
                    <span>is</span>
                    <span>here.</span> 
                    <span>ProtoDrop</span>
                </div>
                <div className='logo-p'>
                    <div className='logo-background'>
                        <img className='logo' src={Logo}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;
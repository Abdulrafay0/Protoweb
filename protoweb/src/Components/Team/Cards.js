import React from "react";
import image_1 from "../../Images/Usairim.jpeg";
import image_2 from "../../Images/Shameer.jpg";
import image_3 from "../../Images/Ubadah.jpeg";
import image_4 from "../../Images/SyedHammad.jpeg";
import image_5 from "../../Images/Abdulrafay.jpeg";
import image_6 from '../../Images/anees.jpeg';
import LinkedIn from '../../Images/Linkedin.png';

const TeamCards = () => {
  return (
    // <div className='Card-container'>
    // <div className='Team'>
    //     <div className="Team-container">
    //         <div className="Cards">
    //             <img src={image_1}></img>
    //         </div>
    //         <div className="details">
    //             <h1>Usairim</h1>
    //             <p>
    //                 gdfjgsdfjhsbvfsjdfgjshgfjgsjgf<br/>
    //                 jsfgjsgfjasdfvgasfdgsagfgjasgf<br/>
    //                 jasdgfsdgjhfgd
    //             </p>
    //         </div>
    //     </div>
    //     <div className="Team-container">
    //         <div className="Cards">
    //             <img src={image_2}></img>
    //         </div>
    //         <div className="details">
    //             <h1>Shameer</h1>
    //             <p>
    //                 gdfjgsdfjhsbvfsjdfgjshgfjgsjgf<br/>
    //                 jsfgjsgfjasdfvgasfdgsagfgjasgf<br/>
    //                 jasdgfsdgjhfgd
    //             </p>
    //         </div>
    //     </div>
    //     <div className="Team-container">
    //         <div className="Cards">
    //             <img src={image_3}></img>
    //         </div>
    //         <div className="details">
    //             <h1>Ubadah</h1>
    //             <p>
    //                 gdfjgsdfjhsbvfsjdfgjshgfjgsjgf<br/>
    //                 jsfgjsgfjasdfvgasfdgsagfgjasgf<br/>
    //                 jasdgfsdgjhfgd
    //             </p>
    //         </div>
    //     </div>
    //     <div className="Team-container">
    //         <div className="Cards">
    //             <img src={image_3}></img>
    //         </div>
    //         <div className="details">
    //             <h1>Ubadah</h1>
    //             <p>
    //                 gdfjgsdfjhsbvfsjdfgjshgfjgsjgf<br/>
    //                 jsfgjsgfjasdfvgasfdgsagfgjasgf<br/>
    //                 jasdgfsdgjhfgd
    //             </p>
    //         </div>
    //     </div>
    //     <div className="Team-container">
    //         <div className="Cards">
    //             <img src={image_4}></img>
    //         </div>
    //         <div className="details">
    //             <h1>SyedHammad</h1>
    //             <p>
    //                 gdfjgsdfjhsbvfsjdfgjshgfjgsjgf<br/>
    //                 jsfgjsgfjasdfvgasfdgsagfgjasgf<br/>
    //                 jasdgfsdgjhfgd
    //             </p>
    //         </div>
    //     </div>
    //     <div className="Team-container">
    //         <div className="Cards">
    //             <img src={image_5}></img>
    //         </div>
    //         <div className="details">
    //             <h1>Abdulrafay</h1>
    //             <p>
    //                 gdfjgsdfjhsbvfsjdfgjshgfjgsjgf<br/>
    //                 jsfgjsgfjasdfvgasfdgsagfgjasgf<br/>
    //                 jasdgfsdgjhfgd
    //             </p>
    //         </div>
    //     </div>
    // </div>
    // </div>
    <div className='Team'>
    <div className='Team-header'>
        <span>Our Team</span>
    </div>
    <div className='Team-section'>
    <div className='card-row'>
        <div className='Team-items'>
            <img className='Image' src={image_1}></img>
            <div className='Team-info'>
                <span className='Name'>Usairim Isani</span>
                <span className='Designation'>CEO & Co-founder</span>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/usairim-isani-17978a147/'className='link'>
                        <span><img className='icon' src={LinkedIn}></img></span>
                    </a>
                </div>
            </div>
        </div>
        <div className='Team-items'>
            <img className='Image' src={image_2}></img>
            <div className='Team-info'>
                <span className='Name'>Syed Shameer Server</span>
                <span className='Designation'>Co-founder</span>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/syed-shameer-sarwar-10932b171/'className='link'>
                        <span><img className='icon' src={LinkedIn}></img></span>
                    </a>
                </div>
            </div>
        </div>
        <div className='Team-items'>
            <img className='Image' src={image_6}></img>
            <div className='Team-info'>
                <span className='Name'>Anees Ur Rehman</span>
                <span className='Designation'>Co-founder</span>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/anees-hashmi-227528195/' className='link'>
                        <span><img className='icon' src={LinkedIn}></img></span>
                    </a>
                </div>
            </div>
        </div>
        <div className='Team-items'>
            <img className='Image' src={image_3}></img>
            <div className='Team-info'>
                <span className='Name'>Muhammad Ubadah</span>
                <span className='Designation'>Co-founder</span>
                <div className='social-icon'>
                    <a href=' https://www.linkedin.com/in/muhammad-ubadah-tanveer-425842125/  ' className='link'>
                        <span><img className='icon' src={LinkedIn}></img></span>
                    </a>
                </div>
            </div>
        </div>
        </div>
        <div className='card-row'>
        <div className='Team-items'>
            <img className='Image' src={image_4}></img>
            <div className='Team-info'>
                <span className='Name'>Syed Hammad Ali</span>
                <span className='Designation'>Co-founder</span>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/syed-hammad-ali-ab65a6165/'className='link'>
                        <span><img className='icon' src={LinkedIn}></img></span>
                    </a>
                </div>
            </div>
        </div>
        <div className='Team-items'>
            <img className='Image' src={image_5}></img>
            <div className='Team-info'>
                <span className='Name'>Abdul Rafay Khanani</span>
                <span className='Designation'>Co-founder</span>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/abdul-rafay-b25998186/'className='link'>
                        <span><img className='icon' src={LinkedIn}></img></span>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
};

export default TeamCards; 

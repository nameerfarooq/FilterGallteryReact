import React from 'react'

function Footer() {
    return (
        <div className='Footer'>
            <div>
                <img className='Logo-1' src={require("../Assets/Images/logo.png")} alt="" />
            </div>
            <div>
                <h1 className='FooterLinks'>
                    Important Links
                </h1>
                <div>
                    <img className='Social-icon' src={require('../Assets/Images/facebook (1).png')} alt="" />
                    <img className='Social-icon' src={require('../Assets/Images/instagram (1).png')} alt="" />
                    <img className='Social-icon' src={require('../Assets/Images/twitter.png')} alt="" />
                    <img className='Social-icon' src={require('../Assets/Images/whatsapp.png')} alt="" />

                </div>
            </div>


        </div>
    )
}

export default Footer
import React, { Component } from 'react'
import './Videocogo.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function Videocogo(){
    return(
        <div className='Videocogo'>
            <div className='videocogosub'>
                <img className='imageaboutus' src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&w=3840&q=75' alt='About Us-Cogoport'/>
                <div className='classmiddleplaybutton'>
                    <img className='imageplaybutton' src='https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png'
                    alt='Play button'/>
                </div>
            </div>
            <div className='moreoption'>
                <div className='moreoptionsub'>
                    <div className='moreoptionleft'>
                        <h3 className='moreoptionhead'>Grow Faster with Cogoport</h3>
                        <p className='moreoptionspara'>Know more about Cogoport’s Global Trade Platform <sup>TM</sup></p>
                    </div>
                   <button className='moreoptionbtn'>Know More <ArrowRightIcon sx={{width:'1em', height:'1em'}}/></button>
                </div>
            </div>
        </div>
    )
}
import React, { Component } from 'react'
import './getstarted.css'
export default function GetStarted(){
    return(
        <div className='getstarted'>
            <div className='getstartedsub'>
                <div className='leftsectiongetstarted'>
                     <h2 className='getstartedhead'>Get Started Today</h2>
                        <p className='getstartedpara'>Plan, Book and Finance your shipment in one place.</p>
                        <p>Experience how Cogoport’s Global Trade Platform can Turbocharge your Business.</p>
                        <button className='getstartedbtn'>Get Started</button>
                </div>
                <div className='getstartedrightimage'>
                    <img className='getstartedimage' src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=640&q=75' alt='girl image'/>
                </div>
            </div>

        </div>
    )
}
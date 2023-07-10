import React, { Component, useState } from 'react'
import './Notification.css';
import wrong from '../Logos/multiply.svg';

export default function Notification(){
 const [isvisible , setisvisible]= useState(true);
 const handleclicked = () =>{
    setisvisible(false);
 }
    return(
      <>{
            isvisible ?   <div className='notificationdiv'>
            <div className='notificationsub'>
                <img className='removeimg' src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&w=32&q=75'
                alt ="icon" width='16' height='16'/>
                <strong className='strongtext' > Limited Time Offer: Get 15% off on all Cogo Assured Rates. <a className='linknotification' target='_blank'>Book Today!</a></strong>
                
            </div>
<img src={wrong} alt='wrongimg' className='wrongimg' onClick={handleclicked}/>
        </div>
        :
        <></>
        }
      
      </>  
    )
}
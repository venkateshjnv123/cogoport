import React, { Component } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import logo from "../Logos/logo.svg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Mainpage.css';
export default function Homepage(){
    return(
        <div className='Mainpage' style={{ backgroundColor : '#fddc01', backgroundImage:`url(https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/home-banner-background-1.webp)`, backgroundRepeat : 'no-repeat', backgroundPosition:'bottom', backgroundSize:'100%', paddingTop:'57px', marginTop:'-57px', minWidth:"1200px"}}>
<div className="Mainpage1" style={{marginLeft:'20px', marginRight :'20px', padding:'16px'}}>
<div className='mainpageleft'>
<h1 className='mainpagehead'>Grow Faster, Go Global.</h1>
<p>Strengthen your Supply Chain, and Scale your Business <br></br>with Reliable Shipping and Cashflows.</p>
<div>
    <form className='formtonumber'>
    <p className='mainleftpara'>Talk to us now!</p>
{/* <InputGroup className='searchbox' >
    <InputGroup.Text className='searchbox1'>
    <WhatsAppIcon sx={{color:'#36bb22'}}/>
        <select name="Number" id="code"  className='selecttag'>
    <option value="+91">+91</option>
    <option value="+787">+787</option>
    <option value="+34">+34</option>
  </select>
        </InputGroup.Text>
      <FormControl placeholder="Whatsapp Number" className='searchbox2' />
      <InputGroup.Text className='searchbox1'>
        <button className='searchboxbutton'>Get started</button >
        </InputGroup.Text>
    </InputGroup> */}
    <div className='inputgroup'>
        <div className='leftinputgroup'>
            <div className='selectgroup'>
                <div className='selectgroup1'>
                    <WhatsAppIcon sx={{color:'#36bb22'}}/>
                    <select id="countryCode">
        <option value="+91">+91</option>
        <option value="+787">+787</option>
        <option value="+65">+65</option>
    </select>
                </div>
            </div>

        </div>
        <input className='rightinputgroup' placeholder='whatsapp number' type='number' name='mobile number'/>
        <button className='getstart'>Get started</button>
    </div>
    </form>
</div>
            </div>
       
            <video className='Mainpage2' muted width="590"
 height="400" autoPlay='loop'  poster="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/final_static_chat_girl_img.png">
                <source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_3_webm.webm" type="video/mp4"/>
                </video>
                <video className='Mainpage3' muted width="590"
 height="400" autoPlay='loop'  poster="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/final_static_chat_girl_img.png">
                <source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_3_webm.webm" type="video/mp4"/>
                </video>
              
                </div>
        </div>
    )
} 
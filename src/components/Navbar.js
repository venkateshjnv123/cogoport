import React, { Component, useState ,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import logo from "../Logos/logo.svg";
import arrowdown from "../Logos/downarrow.svg";
import happyface from "../Logos/happyface.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function NavbarMain(){ 
    const [sidebarshows, setsidebar] = useState(false);
    const handlesidebarclick = () => {
      console.log("hello")
      setsidebar(!sidebarshows);
    }
    const [navbarBg, setNavbarBg] = useState(true);


      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY >= 80) {
          setNavbarBg(false);
        } else {
          setNavbarBg(true);
        }
      };
      window.addEventListener('scroll', handleScroll);

    return(
      <div className={navbarBg ? "navbarmain " : "navbarmain scrolled"}>
        <div role='button' className='logoimage'>
      <img src={logo} alt="cogoport logo"/>
      </div> 
      <nav className="navbar navbar-expand-md" id="navbarmainsub">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handlesidebarclick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {
        sidebarshows ? 
        <div class="sidebar">
        <ul className='sidebarul'>
          <li className='sidebarlist'><div role='button' className="side-link"> <h3>Products</h3>
                <ArrowRightIcon sx={{width:'1em', height:'1em'}}/> </div></li>
          <li className='sidebarlist'><div role='button' className="side-link"> <h3>Partners</h3>
                <ArrowRightIcon sx={{width:'1em', height:'1em'}}/></div></li>
          <li className='sidebarlist'><div role='button' className="side-link"> <h3>Tools</h3>
                <ArrowRightIcon sx={{width:'1em', height:'1em'}}/></div></li>
          <li className='sidebarlist'><div role='button' className="side-link"> <h3>Knowledge Center</h3>
                <ArrowRightIcon sx={{width:'1em', height:'1em'}}/></div></li>
                <li className='sidebarlist'><div role='button' className="side-link"> <h3>Compnany</h3>
                <ArrowRightIcon sx={{width:'1em', height:'1em'}}/></div></li>
                <li className='sidebarlist'><div role='button' className="side-link"> <h3>Contact Us</h3></div>
               </li>
          <div className='loginbtnsdiv1 sidebarlist' style={{borderBottom:'none'}}>
          <li className='signinbtn'>
              <button className='signupbtn'> Sign Up</button>
            </li>
            <li className='nav-btn' >
              <img src={happyface} alt='happyface'/>
              login
            </li>
       
          </div>
        </ul>
    
      </div>
      : 
      <></>
      }
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div role='button' className="nav-link">Products
            <ArrowDropDownIcon sx={{width:'1em', height:'1em'}}/> </div>
          </li> 
          <li className="nav-item">
          <div role='button' className="nav-link">Partners
            <ArrowDropDownIcon sx={{width:'1em', height:'1em'}}/> </div>
          </li>
          <li className="nav-item">
          <div role='button' className="nav-link">Tools
            <ArrowDropDownIcon sx={{width:'1em', height:'1em'}}/> </div>
          </li>
          <li className="nav-item">
          <div role='button' className="nav-link">Knowledge Center
            <ArrowDropDownIcon sx={{width:'1em', height:'1em'}}/> </div>
          </li>
          <li className="nav-item">
          <div role='button' className="nav-link">Compnany
            <ArrowDropDownIcon sx={{width:'1em', height:'1em'}}/> </div>
          </li>
          <li className='nav-item'>
          <div role='button' className="nav-link">Contact Us
             </div>
          </li>
        </ul>
      </div>
      </nav>
      <div className='loginbtnsdiv'>
      <ul className='loginbuttons'>
        <li className='nav-btn' >
          <img src={happyface} alt='happyface'/>
          login
        </li>
        <li className='signinbtn'>
          <button className='signupbtn'> Sign Up</button>
        </li>
      </ul>
      </div>
    </div>
    )
}
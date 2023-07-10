import React, { Component, useRef, useEffect } from 'react'
import './Trustedby.css';
export default function TrustedBy(){
    const logoWrapperRef = useRef(null);

    useEffect(() => {
      const logoWrapper = logoWrapperRef.current;
      const logoItems = logoWrapper.getElementsByClassName('logo-item');
  
      const totalWidth = Array.from(logoItems).reduce(
        (width, logoItem) => width + logoItem.offsetWidth,
        0
      );
  
      logoWrapper.style.animationDuration = `${totalWidth / 100}px`;
    }, []);

    const logourl= [
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbhilosa_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fais-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fjsw-logo-new.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbombay-dyeing-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fair-asia-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fvedanta.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbluestar_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fpidilight_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Freliance_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Futltratech_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fvoltas-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftvs-logo-1.webp&w=384&q=75',

        
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbhilosa_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fais-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fjsw-logo-new.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbombay-dyeing-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fair-asia-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fvedanta.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbluestar_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fpidilight_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Freliance_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Futltratech_logo.png&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fvoltas-logo-1.webp&w=384&q=75',
        'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftvs-logo-1.webp&w=384&q=75'


    ]
    return(
        <div className='trustedby'>
            <h3 style={{textAlign:'center', marginBottom: '1em'}}>Trusted by</h3>
        <div className="logo-carousel">
        <div className="logo-wrapper" ref={logoWrapperRef}>
          {logourl.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="logo-item"
              width="146"
              height="73"
            />
          ))}
        </div>
      </div>
      </div>
  
    )
}
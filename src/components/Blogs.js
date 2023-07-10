import React from "react";
import "./blogs.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Blogs() {

  const data1 = [
    {
      name : "Cogoport Enables Movement of 11 Envirotainer Containers from India to Italy ",
      head : "Trade News",
      des :"Cogoport’s collective logistics and technical expertise came in handy as our operations and technical teams went the extra mile and designed bespoke solutions on the go.",
      dat : "05 July 2023",
      image1 : "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEnvirotainer_Banner.png&w=828&q=75"
    
    },
    {
      name : "Cogoport: A Global Trade Platform",
      head : "Expert Speak",
      des :"Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities.",
      dat : "03 July 2023",
      image1 : "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&w=828&q=75"
    },
    {
      name : "Understanding Lean Supply Chain Management: Definition and Considerations ",
      head : "Industry Basics",
      des :"Cogoport’s collective logistics and technical expertise came in handy as our operations and technical teams went the extra mile and designed bespoke solutions on the go.",
      dat : "24 June 2023",
      image1 : "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&w=828&q=75"
    }
  ]
  return (
    <div className="blogs">
      <div className="blogContainer">
        <h2 className="blogTitle fw-bold">Blogs</h2>
        <div className="blogCardContainer">
          {
            data1.map((items)=>(
              <div className="card blogCard">
              <a href="null">
                <img
                  className="blogPic"
                  src={items.image1}
                  alt="Pic"
                />
                <div className="blogText">
                  <h4 className="blogText1">{items.head}</h4>
                  <h4 className="blogText2">
                    {items.name}{" "}
                  </h4>
                  <p className="blogText3">
                    {items.des}
                  </p>
                  <div className="blogEnd">
                    <span className="blogMore">Read more <ArrowRightAltIcon sx={{width:'1em', height:'1em', color : '#ee3425'}}/></span>
                    <h4 className="blogDate">{items.dat}</h4>
                  </div>
                </div>
              </a>
            </div>
            ))
          }
        </div>
        <div className="viewBlogs">
        <a href="null">
          <button className="viewblogButton">View all</button>
        </a>
      </div>
      </div>
    
    </div>
  );
}

export default Blogs;

import React, { Component, useState } from 'react'
import './Howitworks.css';
import stage1 from "../Logos/stage1.svg";
import stage2 from "../Logos/stage2.svg";
import stage3 from "../Logos/stage3.svg";
import stage4 from "../Logos/stage4.svg";
import stage5 from "../Logos/stage5.svg";
import stage6 from "../Logos/stage6.svg";

import Card from 'react-bootstrap/Card';


export default function HowItWorks(){
    const [logistic, setlogistic] = useState(false);
    const leftstages = [
        {name : 'Stage 1:',
         heading : 'Discover', 
        image : stage1,
        points : ['Spot and Contract Rates for Logistics', 'Service details, Trade Compliance/ Regulatory Requirements', 'Knowledge and Insights on Trade, Logistics, Finance, Supply Chains'],
    },
        {
            name : 'Stage 2:',
         heading : 'Plan & Book', 
        image : stage2,
        points : ['Route, Service Schedules, Inventory, and Cashflow planning', 'Book with upfront visibility of service terms and inclusions'],
        }
    ]
    
    const leftstages1 = [
        {name : 'Channel Partner Program',
         heading : 'Sell with Cogoport', 
        image : stage1,
        points : ['Upfront rates and SLAs, close more deals with your customers for end to end shipments', 'Knowledge and Insights on Trade, Logistics, Finance, Supply Chains']},
        {
            name : 'Logistics Partner',
         heading : 'Grow Profits', 
        image : stage5,
        points : ['Invoicing and payment terms that help you sell more with the same working capital', 'Book with upfront visibility of service terms and inclusions']

        }
    ]

    const rightpages = [
        {
            name : 'Stage 3:',
         heading : 'Execute', 
        image : stage3,
        points : ['Ocean and Air Cargo Tracking', 'Documentation and Filings, Handled', 'Multi-modal: Smooth coordination and handovers between various service providers and stakeholders']

        },
        {
            name : 'Stage 4:',
         heading : 'Finance', 
        image : stage4,
        points : ['Deferred payment on Logistics with PayLater', "Trade Finance for your Cargo with Export Factoring", ]
        },
    ]

    const rightpages1 = [
        {
            name : 'Logistics Service Providers',
         heading : 'Sell to Cogoport', 
        image : stage3,
        points : ['Accurate forecast of demand so you can plan your operations and cashflows', 'Steady flow of bookings from Cogoport, minimize P&L risks', 'Get paid on time, minimize collections risks']

        },
        {
            name : 'Overseas Partners',
         heading : 'Scale Globally', 
        image : stage4,
        points : ['Make Cogoport your local agent outside your home country, do shipments to and from 149+ countries globally', "Become Cogoport’s local agent in your country, boost revenue from nominations and handling", ]
        },
    ]

    const [left, setleft]= useState(leftstages);
    const [right, setright] = useState(rightpages);
    const handleclicked1 = () => {
        setlogistic(!logistic);
        setleft(leftstages1);
        setright(rightpages1);
    }

    const handleclicked = () => {
        setlogistic(!logistic);
        setleft(leftstages);
        setright(rightpages);
    }

    return(
        <div className='howitworks'>
            <div className='howitheading'><h3>How it Works</h3></div>
            <div className='howitbtns'>
                <button className={logistic ? 'howbtns':'howbtns active-btn'}  onClick={handleclicked}>For Cargo Owners</button>
                <button className={logistic ? 'howbtns active-btn':'howbtns'} onClick={handleclicked1}>For Logistics Partners</button>
            </div>
            <div className='flexsection1'>
                <div className='leftcards'>
                    {
                        left.map((card)=>(
                            <Card className='maincard'>
                            <Card.Body style={{padding:'0px'}}>
                              <p className='cardname'>{card.name}</p>
                              <div className='cardsection'>
                                <img src={card.image} alt={card.name}/>
                                <div className='cardhead'>{card.heading}</div>
                              </div>
                              <div>
                                    {card.points.map((point)=> (
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                        <div>•</div>
                                            <p className='carddes'>{point}</p>
                                        </div>
                                    ))}
                              </div>
                            </Card.Body>
                          </Card>
                        
                        ))
                    }
                </div>
                <img src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=1200&q=75'
                width='560' height='320' style={{color:'transparent'}}/>
                <div className='rightcards'>
                    {
                        right.map((card)=>(
                            <Card className='maincard'>
                            <Card.Body style={{padding:'0px'}}>
                              <p className='cardname'>{card.name}</p>
                              <div className='cardsection'>
                                <img src={card.image} alt={card.name}/>
                                <div className='cardhead'>{card.heading}</div>
                              </div>
                              <div>
                                    {card.points.map((point)=> (
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                        <div>•</div>
                                            <p className='carddes'>{point}</p>
                                        </div>
                                    ))}
                              </div>
                            </Card.Body>
                          </Card>
                        ))
                    }
                </div>
            </div>

            <div className='mobilesection'>
            <img src='https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=1200&q=75'
                width='280px' height='auto' style={{color:'transparent', marginLeft:'auto', marginRight:'auto'}}/>
                  <div className='leftcards'>
                    {
                        left.map((card)=>(
                            <Card className='maincard'>
                            <Card.Body style={{padding:'0px'}}>
                              <p className='cardname'>{card.name}</p>
                              <div className='cardsection'>
                                <img src={card.image} alt={card.name}/>
                                <div className='cardhead'>{card.heading}</div>
                              </div>
                              <div>
                                    {card.points.map((point)=> (
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                        <div>•</div>
                                            <p className='carddes'>{point}</p>
                                        </div>
                                    ))}
                              </div>
                            </Card.Body>
                          </Card>
                        ))
                    }
                </div>
                <div className='rightcards'>
                    {
                        right.map((card)=>(
                            <Card className='maincard'>
                            <Card.Body style={{padding:'0px'}}>
                              <p className='cardname'>{card.name}</p>
                              <div className='cardsection'>
                                <img src={card.image} alt={card.name}/>
                                <div className='cardhead'>{card.heading}</div>
                              </div>
                              <div>
                                    {card.points.map((point)=> (
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                        <div>•</div>
                                            <p className='carddes'>{point}</p>
                                        </div>
                                    ))}
                              </div>
                            </Card.Body>
                          </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
import React from "react";
import "./indus.css";

function Indus() {
  const data1=[{name :'Chemicals', url: 'https://www.cogoport.com/images/chemical.svg'},
  {name :'Pharmaceuticals', url: 'https://www.cogoport.com/images/paracetamol.svg'},
  {name :'Electronics', url: 'https://www.cogoport.com/images/electronics.svg'},
  {name :'White Goods', url: 'https://www.cogoport.com/images/whitegoods.svg'},
  {name :'Textiles', url: 'https://www.cogoport.com/images/textiles.svg'},
  {name :'Manufacturing', url: 'https://www.cogoport.com/images/manufactoring.svg'},
  {name :'Agriculture', url: 'https://www.cogoport.com/images/agriculture.svg'}, 
                  ]
  return (
    <div className="indusContainer">
      <div className="indus">
        <h3 className="indusTitle">Industries Served</h3>
        <div className="indusCards">
          {
            data1.map((indu)=>(
              <div className="indusDiv">
              <img
                className="indusPic"
                src={indu.url}
                alt={indu.name}
              />
              <h6>{indu.name}</h6>
            </div>
            ))
          }
         
        </div>
      </div>
    </div>
  );
}

export default Indus;

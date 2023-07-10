import React, { Component } from 'react'
import './Industries.css';
import { Grid } from '@mui/material';
export default function Industries(){
    const data1=[{name :'Chemicals', url: 'https://www.cogoport.com/images/chemical.svg'},
    {name :'Pharmaceuticals', url: 'https://www.cogoport.com/images/paracetamol.svg'},
    {name :'Electronics', url: 'https://www.cogoport.com/images/electronics.svg'},
    {name :'White Goods', url: 'https://www.cogoport.com/images/whitegoods.svg'},
    {name :'Textiles', url: 'https://www.cogoport.com/images/textiles.svg'},
    {name :'Manufacturing', url: 'https://www.cogoport.com/images/manufactoring.svg'},
    {name :'Agriculture', url: 'https://www.cogoport.com/images/agriculture.svg'}, 
                    ]
    return(
        <div className='industries'>     
<div className='industriessub'>
<h3 style={{textAlign:'center', marginBottom:'1em'}}>Industries Served</h3>
    <Grid container className='industiesgrid'>
        {
            data1.map((data)=>(
                <Grid item md={1.5} xs={3} className='industrycard'>
                    <img src={data.url} alt={data.name} width='100px' height='100px'/>
                    <div className='textheadindustry'>{data.name}</div>
                </Grid> 
            ))
        }
    </Grid>

</div>
        </div>
    )
}
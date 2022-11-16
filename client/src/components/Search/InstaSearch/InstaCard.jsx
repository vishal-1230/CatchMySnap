import React from 'react'
import './InstaCard.css'

function InstaCard(props) {
  return (
    <div className='instaCard'>
        <h2 className="cardHeading">{props.heading} <span style={{color: '#0c2461'}}>Shoot</span></h2><br />
        <ul>
            {
                props.features.map((i)=>{
                    return <li>{i}</li>
                })
            }
        </ul><br />
        <div style={{marginTop: '8px'}}>
        <strike className="original-amt">₹{props.oldPrice}</strike>&nbsp;
        <span className="save-percent">SAVE 56%</span>
        </div><br />
        <span className="final-amt"><sup>₹</sup>{props.newPrice}<sub>/hr</sub></span><br />
        <button className="select-btn">SELECT</button><br />
        
    </div>
  )
}

export default InstaCard
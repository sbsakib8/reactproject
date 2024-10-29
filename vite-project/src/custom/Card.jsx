import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div className='mt-5'>
     <div className="card">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.text}</h5>
    <p className="card-text">{props.ptext}</p>
    <a href="#" className="btn btn-primary">{props.button}</a>
  </div>
  </div>
    </div>
  )
}

export default Card;
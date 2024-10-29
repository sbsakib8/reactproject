import React from 'react';
import Sakib from "./Style.module.css";
import Card from '../custom/Card'
function Portfolio() {
  return (
    <div>
     
       <h1 className={Sakib.nam}>sakib sarkar Portfolio</h1>
          
         <h1 className='bg-success'>sabbir sarkar </h1>

       <div className='row'>
        <div className='col-md-4'>
        <Card img="img/bridge.png" text="Card title" ptext="card title and make up the bulk of the card's content." button="click me"/>
       
        </div>

        <div className='col-md-4'>
        <Card img="img/build.png" text="Card title" ptext="Some quick example text to build on the card title and make up the bulk of the card's content." button="click me"/>
       
        </div>

        <div className='col-md-4'>
        <Card img="img/unsplash 1.png" text="Card title" ptext="Some quick example text to build on the card title and make up the bulk of the card's content." button="click me"/>
       
        </div>

       </div>

    </div>
  )
}

export default Portfolio;
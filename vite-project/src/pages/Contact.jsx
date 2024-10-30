import React from 'react';
import Navbar from '../component/Navber';

function Contact() {
  let onCopy = ()=>{
         
    alert('text copy')
  }
  return (
    <div>
      <Navbar/>
     <p onCopy={onCopy}>this is the contact page</p>
     <h1></h1>
    </div>
  )
}

export default Contact
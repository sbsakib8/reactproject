import React from 'react';

function Contact() {
  let onCopy = ()=>{
         
    alert('text copy')
  }
  return (
    <div>
     <p onCopy={onCopy}>this is the contact page</p>
     <h1></h1>
    </div>
  )
}

export default Contact
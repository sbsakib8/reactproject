import React from 'react'

function Contact() {
  let onCopy = ()=>{
         
    alert('text copy')
  }
  return (
    <div>
     <p onCopy={onCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores minus obcaecati dolores?</p>
    </div>
  )
}

export default Contact
import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navber';
import Showdata from './Showdata';

function Contact() {
 const [count ,setcount] = useState(0)
 useEffect(()=>{
  setTimeout(()=>{
    setcount(count + 1)
  }, 1000)
 },[count])

  let onCopy = ()=>{
    alert('text copy')
  }
  return (
    <div>
      <Navbar/>
     <p onCopy={onCopy}>this is the contact page</p>
     <h1></h1>

     <p>notification {count}</p>

     <Showdata />
    </div>
  )
}

export default Contact
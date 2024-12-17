import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {
  let navigate = useNavigate()
  let add = ()=>{
    navigate("/")
  }
  return (
    <div>
      
        this is about page
        <button className='' onClick={add}>go home</button>
    </div>
  )
}

export default About
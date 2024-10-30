import { useState } from 'react';
import Navbar from '../component/Navber';
import Portfolio from './Portfolio';

function Home() {
  let [togol , settogol]= useState()
  let togoler =()=>{
    settogol(!togol)
  }
    return (
      <div>
      <Navbar/>
        <h1>my name is home</h1>
        <button onClick={togoler}>
          {togol ? "hide" : "show"}
        </button>
      {
        togol &&  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dignissimos id dolor!</p>
      }
        <Portfolio/>
      </div>
    )
  }
  
  export default Home ;
  
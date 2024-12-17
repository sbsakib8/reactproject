import React from "react";
import Navber from "./component/Navber";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<h1>sb sakib 404</h1>} />
         
       
      </Routes>
    </BrowserRouter>
    <Navber/>
    </div>
  )
}

export default App;

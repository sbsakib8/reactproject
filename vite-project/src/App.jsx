import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Navber from "./component/Navber";
function App() {
  return (
    <div>
     <BrowserRouter>
     
      <Routes>
          <Route path="" element={<Navber/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<h1>sb sakib 404</h1>} />
          </Route>
       
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App;

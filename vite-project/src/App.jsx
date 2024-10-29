import Home from "./pages/Home"
import About from "./About";
import Contact from "./pages/Contact";
import { BrowserRouter , Routes , Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
     

      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="*" element={<h2>not found page</h2>}/>
          </Routes>
     </BrowserRouter>
      
      

    </div>
  )
}

export default App;

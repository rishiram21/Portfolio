import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#171d32] min-h-screen w-full overflow-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Skill" element={<Skill />} />         
          <Route path="/Project" element={<Project />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
        
        <div id="About" className="p-20">
          <About />
        </div>
        <div id="Service" className="p-20">
          <Service />
        </div>
        <div id="Skill" className="p-20">
          <Skill />
        </div>
        <div id="Project" className="p-20">
          <Project />
        </div>
        <div id="Footer" className="p-2">
          <Footer />
        </div>
      </div>

      
    </BrowserRouter>
  );
}

export default App;

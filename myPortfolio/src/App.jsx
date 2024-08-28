import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
    <main>
      <Aside />
      <div className="main-content">
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </main>
  );
}

export default App;

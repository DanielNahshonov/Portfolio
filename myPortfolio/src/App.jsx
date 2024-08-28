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
        <Route path="Portfolio/" element={<About />} />
        <Route path="Portfolio/resume" element={<Resume />} />
        <Route path="Portfolio/portfolio" element={<Portfolio />} />
        <Route path="Portfolio/contact" element={<Contact />} />
      </Routes>
      </div>
    </main>
  );
}

export default App;

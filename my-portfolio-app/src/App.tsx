import MainPage from "./pages/MainPage/MainPage";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import WorkExpirience from "./pages/WorkExpirience/WorkExperience";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <About />
      <Projects />
      <WorkExpirience />
      <Contact />
    </>
  );
}

export default App;

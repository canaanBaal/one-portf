import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Experience from './components/Experience';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import { NavLink, Link } from "react-router-dom"; // added for 2

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

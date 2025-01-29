import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import project from "./project";
import Carousel from "./Carousel";
import CardCarousel from "./CardCarousel";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-10">
          <nav className="flex justifiy-between items-center">
            {/* Logo or Brand Name */}

            {/* Desktop Links */}
            <div className="flex justify-center">
              <Link
                className="flex items-center p-4 text-white hover:text-blue-400"
                to="/"
              >
                Home
              </Link>
              <Link
                className="flex items-center p-4 space-x-6 text-white hover:text-blue-400"
                to="/about"
              >
                About
              </Link>
              <Link
                className="flex items-center p-4 space-x-6 text-white hover:text-blue-400"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="flex items-center p-4 space-x-6 text-white hover:text-blue-400"
                to="/contact"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden text-white">
              <button>☰</button>
            </div>
          </nav>
        </header>
        <body></body>
        <footer></footer>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

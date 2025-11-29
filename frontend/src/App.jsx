import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "certifications",
        "experience",
        "projects",
        "education",
        "hobbies",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #b9ff1c",
          },
          success: {
            iconTheme: {
              primary: "#b9ff1c",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

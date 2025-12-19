import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {

  return (
    <>
    <Navbar />    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="experience"><Experience /></section>
              <section id="skills"><Skills /></section>
              <section id="education"><Education /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />

        {/* Project details page */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

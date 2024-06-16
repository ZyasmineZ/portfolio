import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'


function App() {
  return (
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Chat.FSTT: Pet Care Made Easy"
        projectDesc="A one-stop solution for pet data management, automated vaccinations, QR-based lost pet recovery, and organizing pet playdates."
        projectLink="https://github.com/ZyasmineZ/ChatBot"
        deployedProjectLink="https://github.com/ZyasmineZ/ChatBot"
        projectImg={require('./images/projectWiggles.jpg')}
      />

      <ProjectCard
        projectTitle="Animated Card: featuring the latest glassmorphism trend"
        projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
        projectLink="https://github.com/ZyasmineZ/Sentiment-analysis-from-Twitter-Social-Network-Data-Streams"
        deployedProjectLink="https://github.com/ZyasmineZ/Sentiment-analysis-from-Twitter-Social-Network-Data-Streams"
        projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Happy Bear: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/ZyasmineZ/HappyBear"
        deployedProjectLink="https://github.com/ZyasmineZ/HappyBear"
        projectImg={require('./images/projectRogfree.png')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
  );
}

export default App;

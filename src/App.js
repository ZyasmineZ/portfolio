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
        projectTitle="Chat.FSTT: University Chat Bot"
        projectDesc="A chat bot that provides instant answers to common questions about my university."
        projectLink="https://github.com/ZyasmineZ/ChatBot"
        deployedProjectLink="https://github.com/ZyasmineZ/ChatBot"
        projectImg={require('./images/projectWiggles.jpg')}
      />

      <ProjectCard
        projectTitle="Tweet Sentiment Analysis App"
        projectDesc="App that performs sentiment analysis on tweets. The app uses machine learning algorithms to classify the sentiment of tweets, providing insights into public opinion on various topics in real-time."
        projectLink="https://github.com/ZyasmineZ/Sentiment-analysis-from-Twitter-Social-Network-Data-Streams"
        deployedProjectLink="https://github.com/ZyasmineZ/Sentiment-analysis-from-Twitter-Social-Network-Data-Streams"
        projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Happy Bear: 2D Game in C++"
        projectDesc="Designed and developed a 2D game using C++. This project helped me learn the basics of game development, including graphics rendering, game mechanics, and user input handling."
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

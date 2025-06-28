import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Education from '../../Components/Education/Education';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
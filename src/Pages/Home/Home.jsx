import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';
import Courses from '../../Components/Courses/Courses';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Courses />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
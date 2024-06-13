import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Project from '../../components/Projects/Project'
import Contact from '../../components/Contact/Contact'


const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    )
}

export default Main

import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;

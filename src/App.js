import React from 'react';
import './index.css';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Nav/>
            <LandingPage/>
            <Project/>
            <Skills/>
            <Footer/>
        </div>
    );
}


export default App;

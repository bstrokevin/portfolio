import React from 'react';
import './index.css';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
    return (
        <div className="App">
            <Nav/>
            <LandingPage/>
            <Project/>
            <Skills/>
        </div>
    );
}


export default App;

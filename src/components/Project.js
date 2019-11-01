import React from 'react';
import '../styles/Project.scss';

const Project = () => {
    return (
        <div id='project-container'>
            <h2>Selected Projects</h2>
            <ul>
                <li><a id="calmversation" href="https://github.com/nikkiwu?tab=repositories" target="_blank"
                       rel='noopener noreferrer'> <span>Calmversation</span></a></li>
                <li><a id="pokedex" href="https://github.com/nikkiwu?tab=repositories" target="_blank"
                       rel='noopener noreferrer'> <span>Pokedex</span></a></li>
                <li><a id="inhabitent" href="https://github.com/nikkiwu?tab=repositories" target="_blank"
                       rel='noopener noreferrer'> <span>Inhabitent</span></a></li>
                <li><a id="ponggame" href="https://github.com/nikkiwu?tab=repositories" target="_blank"
                       rel='noopener noreferrer'> <span>Pong Game</span></a></li>
                <li><a id="instanews" href="https://github.com/nikkiwu?tab=repositories" target="_blank"
                       rel='noopener noreferrer'> <span>Instanews</span></a></li>
            </ul>
        </div>
    );
};

export default Project;

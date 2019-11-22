import React from 'react';
import '../styles/Project.scss';

const Project = () => {
    return (
        <div id='project-container'>
            <h2>Selected Projects</h2>
            <ul>
                <li><a id="calmversation" href="https://calmversation.org/" target="_blank"
                       rel='noopener noreferrer'> <span>Calmversation</span></a><br/><a id="calmversation"
                                                                                        href="https://github.com/redacademy/calm-fall-2018"
                                                                                        target="_blank"
                                                                                        rel='noopener noreferrer'><span
                    className='github'>Github</span></a>
                </li>
                <li><a id="pokedex" href="https://nikkiwu.github.io/pokedex/" target="_blank"
                       rel='noopener noreferrer'> <span>Pokedex</span></a><br/><a id="pokedex"
                                                                                  href="https://github.com/nikkiwu/pokedex"
                                                                                  target="_blank"
                                                                                  rel='noopener noreferrer'><span
                    className='github'>Github</span></a></li>
                <li><a id="inhabitent" href="https://github.com/nikkiwu?tab=repositories" target="_blank"
                       rel='noopener noreferrer'> <span>Inhabitent</span></a><br/><a id="inhabitent"
                                                                                     href="https://github.com/nikkiwu/inhabitent"
                                                                                     target="_blank"
                                                                                     rel='noopener noreferrer'><span
                    className='github'>Github</span></a></li>
                <li><a id="ponggame" href="https://nikkiwu.github.io/pong-game/" target="_blank"
                       rel='noopener noreferrer'> <span>Pong Game</span></a><br/><a id="ponggame"
                                                                                    href="https://github.com/nikkiwu/pong-game"
                                                                                    target="_blank"
                                                                                    rel='noopener noreferrer'><span
                    className='github'>Github</span></a></li>
                <li><a id="instanews" href="https://nikkiwu.github.io/instanews/" target="_blank"
                       rel='noopener noreferrer'> <span>Instanews</span></a><br/><a id="instanews"
                                                                                    href="https://github.com/nikkiwu/instanews"
                                                                                    target="_blank"
                                                                                    rel='noopener noreferrer'><span
                    className='github'>Github</span></a></li>
            </ul>
        </div>
    );
};

export default Project;

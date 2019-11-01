import React from 'react';
import '../styles/Footer.scss';
import Resume from '../assets/Nikki Wu Resume.pdf';

const Footer = () => {
    return (
        <div className="contact-container">
            <h2>Drop me a line</h2>
            <h1><a href="mailto:nikkiwu9@gmail.com" rel='noopener noreferrer'>nikkiwu(at)gmail.com</a></h1>
            <ul>
                <li><a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                <li><a href="https://github.com/nikkiwu" target="_blank" rel='noopener noreferrer'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/nikkiwu7/" target='_blank'
                       rel='noopener noreferrer'>Linkedin</a></li>
            </ul>
        </div>
    );
};

export default Footer;

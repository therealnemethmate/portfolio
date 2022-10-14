import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer__logo">
                Mate Nemeth portfolio page
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
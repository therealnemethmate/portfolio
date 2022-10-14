import React from 'react';
import './nav.css';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    function isActive(href: string): string {
        return href === activeNav ? 'active' : '';
    }

    return (
        <nav>
            <a onClick={() => setActiveNav('#')} className={isActive('#')} href="#">Home</a>
            <a onClick={() => setActiveNav('#about')} className={isActive('#about')} href="#about">About</a>
            <a onClick={() => setActiveNav('#skills')} className={isActive('#skills')} href="#skills">Skills</a>
            <a onClick={() => setActiveNav('#contact')} className={isActive('#contact')} href="#contact">Contact</a>
        </nav>
    );
};

export default Nav;
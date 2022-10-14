import React from 'react';
import './header.css';
import profilePicture from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header id="home">
            <div className='container header__container'>
                <h3>Hello I am</h3>
                <h1>Mate Nemeth</h1>
                <h2 className='text-light'>Fullstack developer</h2>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={profilePicture} alt='me' />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
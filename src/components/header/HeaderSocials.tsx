import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoStackoverflow } from 'react-icons/io5';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/matenemeth91/' target='_blank' rel="noreferrer">
                <IoLogoLinkedin/>
            </a>
            <a href='https://github.com/therealnemethmate' target='_blank' rel="noreferrer">
                <IoLogoGithub/>
            </a>
            <a href='https://stackoverflow.com/users/9560129/m%c3%a1t%c3%a9-n%c3%a9meth' target='_blank' rel="noreferrer">
                <IoLogoStackoverflow/>
            </a>
        </div>
    );
};

export default HeaderSocials;
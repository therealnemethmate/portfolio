import React from 'react';
import './about.css';
import ME from '../../assets/running.png';
import { IoCodeWorking, IoPersonSharp, IoDocumentTextOutline } from 'react-icons/io5';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <h5><IoCodeWorking fontSize="1.5rem"/></h5>
                            <small>5+ Years in Software Development</small>
                        </article>
                        <article className="about__card">
                            <h5><IoPersonSharp fontSize="1.5rem"/></h5>
                            <small>Worked at companies like EPAM or with clients like Telekom HU</small>
                        </article>
                        <article className="about__card">
                            <h5><IoDocumentTextOutline fontSize="1.5rem"/></h5>
                            <small>Worked on many integration projects with scrum, agile, kanban</small>
                        </article>
                    </div>
                    <p>
                        I am Mate Nemeth a fullstack web developer from Hungary. Mostly, I have experience with e-commerce integration projects,
                        although I have some frontend development skills - builing admin web apps for integration softwares / services.
                        <br/>
                        Some explanation to my picture: once I have finished a half marathon just after Szilvia Lubics (the famous hungarian ultrarunner). 
                        <br/>
                        It speaks for itself :)
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

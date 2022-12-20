import React from 'react';
import './portfolio.css';

const data = [
    {
        title: 'Check out my repositories on github.com',
        github: 'https://github.com/therealnemethmate?tab=repositories',
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <div>{/* TODO fill more portfolio material here */}</div>
                {data.map(({ title, github }, id) => {
                    return (
                        <article className="portfolio__item" key={id}>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} target="_blank" className="btn" rel="noreferrer">
                                    Github
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;

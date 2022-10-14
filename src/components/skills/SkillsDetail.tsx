import React from 'react';
import './skills.css';

type Props = {
    children: JSX.Element,
    level: string,
}

const SkillsDetail: React.FC<Props> = ({ children, level }) => {
    return (
        <article className="skills__details skills__details-icon">
            <div>
                <h4>{children}</h4>
                <small className="text-light">{level}</small>
            </div>
        </article>
    );
};

export { SkillsDetail };
import React from 'react';
import './skills.css';
import {
    IoLogoHtml5,
    IoLogoJavascript,
    IoLogoCss3,
    IoLogoReact,
    IoLogoAngular,
    IoLogoVue,
} from 'react-icons/io5';

import {
    SiNodedotjs,
    SiRedis,
    SiMongodb,
    SiDocker,
    SiKubernetes,
    SiRabbitmq,
    SiApachekafka,
    SiAmazonaws,
    SiTypescript,
} from 'react-icons/si';
import { SkillsDetail } from './SkillsDetail';

const frontendSkills = [
    {
        name: 'HTML5',
        level: 'Intermediate',
        children: <IoLogoHtml5 fontSize="2rem" />,
    },
    {
        name: 'CSS3',
        level: 'Intermediate',
        children: <IoLogoCss3 fontSize="2rem" />,
    },
    {
        name: 'JavaScript',
        level: 'Experienced',
        children: <IoLogoJavascript fontSize="2rem" />,
    },
    {
        name: 'ReactJS',
        level: 'Intermediate',
        children: <IoLogoReact fontSize="2rem" />,
    },
    {
        name: 'VueJS',
        level: 'Intermediate',
        children: <IoLogoVue fontSize="2rem" />,
    },
    {
        name: 'AngularJS 1.x',
        level: 'Basics',
        children: <IoLogoAngular fontSize="2rem" />,
    },
];

const backendSkills = [
    {
        name: 'NodeJS',
        level: 'Experienced',
        children: <SiNodedotjs fontSize="2rem" />,
    },
    {
        name: 'Typescript',
        level: 'Intermediate',
        children: <SiTypescript fontSize="2rem" />,
    },
    {
        name: 'MongoDB',
        level: 'Experienced',
        children: <SiMongodb fontSize="2rem" />,
    },
    {
        name: 'Redis',
        level: 'Intermediate',
        children: <SiRedis fontSize="2rem" />,
    },
    {
        name: 'Docker',
        level: 'Intermediate',
        children: <SiDocker fontSize="2rem" />,
    },
    {
        name: 'Kubernetes',
        level: 'Intermediate',
        children: <SiKubernetes fontSize="2rem" />,
    },
    {
        name: 'RabbitMQ',
        level: 'Intermediate',
        children: <SiRabbitmq fontSize="2rem" />,
    },
    {
        name: 'Apache Kafka',
        level: 'Basics',
        children: <SiApachekafka fontSize="2rem" />,
    },
    {
        name: 'S3, EC2, Lambda',
        level: 'Basics',
        children: <SiAmazonaws fontSize="2rem" />,
    },
];

const Skills = () => {
    return (
        <section id="skills">
            <h5>What skills I Have</h5>
            <h2>My skills</h2>
            <div className="container skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        {frontendSkills.map((skill) => (
                            <SkillsDetail key={skill.name} level={skill.level}>
                                <>
                                    {skill.children}
                                    <h5>{skill.name}</h5>
                                </>
                            </SkillsDetail>
                        ))}
                    </div>
                </div>
                <div className="skills__backend">
                    <h3>Backend Development</h3>
                    <div className="skills__content">
                        {backendSkills.map((skill) => (
                            <SkillsDetail key={skill.name} level={skill.level}>
                                <>
                                    {skill.children}
                                    <h5>{skill.name}</h5>
                                </>
                            </SkillsDetail>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
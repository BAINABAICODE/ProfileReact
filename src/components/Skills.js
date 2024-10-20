// src/Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
//icons..
const Skills = () => {
  return (
    <div className="text-center skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FontAwesomeIcon icon={faCode} size="3x" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faLaptopCode} size="3x" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faDatabase} size="3x" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faServer} size="3x" />
          <p>Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

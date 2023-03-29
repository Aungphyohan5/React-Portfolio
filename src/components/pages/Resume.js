import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div className='resume-bg'>
      <div className='p-5'>
        <p>Please download the resume<a href="https://github.com/Aungphyohan5/react-portfolio/files/11095626/My.Resume.docx" download>
          Click to download
        </a></p>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>


  );
}

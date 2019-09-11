import Education from 'data/ed.json';
import Experience from 'data/exp.json';
import React from 'react';

import ResumeSection from './ResumeSection';


function Resume({className}) {

  const educationList = Education.map((item) => 
      <div key={item.id}>
        <h3>{item.school} &mdash; <i>{item.degree}</i></h3>
        <span>{item.dates} | {item.location}</span>
        <p>{item.description}</p>
      </div>
  );

  const experienceList = Experience.map((item) => 
  <div key={item.id}>
    <h3>{item.company} &mdash; <i>{item.title}</i></h3>
    <span>{item.dates} | {item.location}</span>
    <p>{item.description}</p>
  </div>
);

  return (
    <div className={className}>
      <ResumeSection>
        <h4>Related Experience</h4>
        {experienceList}
      </ResumeSection>
      <ResumeSection>
        <h4>Education</h4>
        {educationList}
      </ResumeSection>
      <ResumeSection>
        <h4>Skills</h4>
        <p>Javascript/Typescript, React, Angular, AngularJS, Backbone, CSS-in-JS, CSS3, SASS, NodeJS, GraphQL, AWS, Jenkins, Docker, MySQL, MongoDB, DynamoDB, Selenium, WebdriverIO, Puppeteer</p>
      </ResumeSection>
    </div>
  )
}

export default Resume;
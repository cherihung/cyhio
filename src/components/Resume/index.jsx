import Education from '@app/data/ed';
import Experience from '@app/data/exp';
import React from 'react';

import ResumeSection from './ResumeSection';

function Resume() {

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
    <div>
      <ResumeSection>
        <h4>Skills</h4>
        <p>Javascript/Typescript, React, NodeJS, GraphQL, Kafka, AWS, Jenkins, Docker, Cassandra, MySQL, ElasticSearch, Angular, AngularJS, CSS-in-JS, CSS3, SASS, Selenium, WebdriverIO</p>
      </ResumeSection>
      <ResumeSection>
        <h4>Related Experience</h4>
        {experienceList}
      </ResumeSection>
      <ResumeSection>
        <h4>Education</h4>
        {educationList}
      </ResumeSection>
    </div>
  )
}

Resume.displayName = "Resume";

export default Resume;
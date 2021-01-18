import Education, { educationItem } from '@app/data/ed';
import Experience, { experienceItem } from '@app/data/exp';
import React from 'react';

import ResumeSection from './ResumeSection';

function Resume({className}) {

  const educationList = Education.map((item: educationItem) => 
      <div key={item.id}>
        <h3>{item.school} &mdash; <i>{item.degree}</i></h3>
        <span>{item.dates} | {item.location}</span>
        <p>{item.description}</p>
      </div>
  );

  const experienceList = Experience.map((item: experienceItem) => 
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
        <p>Javascript, Typescript, React, NodeJS, GraphQL, Kafka, AWS, Docker, Cassandra, MySQL, ElasticSearch, Jenkins, Angular, AngularJS, CSS-in-JS, CSS3, SASS, Selenium, WebdriverIO</p>
      </ResumeSection>
    </div>
  )
}

Resume.displayName = "Resume";

export default Resume;
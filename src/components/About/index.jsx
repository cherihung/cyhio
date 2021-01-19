import styled from 'styled-components';
import React from 'react';

const H1 = styled.h1`
  font-weight: 300;
  span {
    font-weight: 500;
  }
`;

function About({className}) {

  return(
    <div className={className}>
      <H1>Chienyi <span>Cheri Hung</span></H1>
      <p>
      Full-stack engineer and tech lead with experience in managing software development through its full lifecycle. Specializes in full Javascript stack with React and Node.  
      </p>
      <p>Currently, enjoying working on challenges with scalability and a distributed architecture.</p>
    </div>
  )
}

export default About;
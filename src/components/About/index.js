import { styled } from '@material-ui/styles';
import React from 'react';

const H1 = styled('h1')({
  fontWeight: 300,
  '& span': {
    fontWeight: 500,
  }
});

function About({className}) {

  return(
    <div className={className}>
      <H1>Chienyi <span>Cheri Hung</span></H1>
      <p>
      Full-stack engineer with tech lead experience in effectively manage software development through its full lifecycle and working with cross-functional teams. Specializes in front-end engineering with a UX/UI focus and backend-end Node development. 
      </p>
      <p>I love learning. Currently, I am leveling up on GO!</p>
    </div>
  )
}

export default About;
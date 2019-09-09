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
        Full-stack engineer specializing in front-end development and UX/UI design. Tech lead with experience in effectively managing software development through its full lifecycle and working with cross-functional teams.
      </p>
      <p>I love learning. Currently, I am leveling up on GO!</p>
    </div>
  )
}

export default About;
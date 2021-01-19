import styled from 'styled-components';

export const StyledBaseInner = styled.div`
  margin: 0 auto;
  width: 90vw;
  min-width: 200px;
  padding: 0.5em 0;
  @media (min-width:600px) {
    padding: 1em;
    max-width: 800px;
    width: 80vw;
  }
`
export const StyledBaseRoot = styled.div`
  font-size: 14px;
  background-color: ${({ theme }) => theme.backgroundColor };
  color: ${({theme}) => theme.color};
  min-height: 100vh;
`
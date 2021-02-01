import styled from 'styled-components';

export const StyledTopBar = styled.div`
  background-color: #bfbdac;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.25em 0;
  .radioGroup {
    .MuiRadio-root  {
      color: ${props => props.theme.backgroundColor};
      padding: 0.1em;
    }
    .Mui-checked {
      color: ${props => props.theme.backgroundColor};
    }
  }
`

export const StyledLabel = styled.label`
  display: none;
  @media (min-width: 600px) {
    display: inline;
    text-transform: uppercase;
    font-size: 0.75em;
    color: #272820
  }
`

export const StyledSocialBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10em;
  line-height: 0;
  margin-left: 0.5em;
`

export const StyledLogo = styled.div`
  padding-right: 0.5rem;
`
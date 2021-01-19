import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

export const StyledLabel = styled.label`
  display: none;
  @media (min-width: 600px) {
    display: inline;
    text-transform: uppercase;
    font-size: 10px;
    color: #272820
  }
`

export const StyledRadio = styled(Radio)`
  color: ${props => props.theme.backgroundColor};
  &.Mui-checked {
    color: ${props => props.theme.backgroundColor};
  };
  padding: 3px;
`

export const StyledSocialBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10em;
  line-height: 0;
  margin-left: 0.5em;
`
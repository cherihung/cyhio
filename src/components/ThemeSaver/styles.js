import styled from 'styled-components';
import { isDarkTheme } from 'styles/utils';

export const ThemeSaverBox = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 4em;
  right: 1em;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
  padding: 0.5em 0.5em 0 0.5em;
  font-size: 0.8rem;
  font-weight: 500;
  flex-direction: column;
  box-shadow: ${props => isDarkTheme(props.themeName) ? '1px 2px 4px rgba(113, 125, 135, .5)' : '1px 2px 4px rgba(36, 67, 91, .5)'};
  .iconButton {
    margin: 0 2px;
    cursor: pointer;
    &:hover {
      fill: gray
    }
  }
  .iconYes {
    fill: ${props => props.theme.successColor}
  }
  .iconNo {
    fill: ${props => props.theme.alertColor}
  }
`
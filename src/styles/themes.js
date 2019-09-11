const darkTheme = {
  backgroundColor: '#060914',
  color: '#e2e2e2',
  emphasisTextColor: '#A9BFCC',
  emphasisLabelColor: '#636363',
  lightTextColor: '#a0a0a0',
  dividerColor: '#a0a0a0',
  successColor: '#006400',
  alertColor: '#800000'
}

const brightTheme = {
  backgroundColor: '#ffffff',
  color: '#1c1c1c',
  emphasisTextColor: '#000000',
  emphasisLabelColor: '#8e8d8d',
  lightTextColor: '#706d6d',
  dividerColor: '#706d6d',
  successColor: '#8fbc8f',
  alertColor: '#fa8072'
}

const solarizedLightTheme = {
  backgroundColor: '#FDF6E3',
  color: '#586D75',
  emphasisTextColor: '#D33681',
  emphasisLabelColor: '#5FB2A7',
  lightTextColor: '#7b95a0',
  dividerColor: '#B8BFB8',
  successColor: '#8fbc8f',
  alertColor: '#fa8072'
}

const monokaiTheme = {
  backgroundColor: '#272821',
  color: '#ddccba',
  emphasisTextColor: '#9CD32E',
  emphasisLabelColor: '#EF296E',
  lightTextColor: '#b2a495',
  dividerColor: '#b2a495',
  successColor: '#006400',
  alertColor: '#800000'
}

const ThemeMap = {
  monokai: {
    name: 'monokai',
    theme: monokaiTheme,
    displayName: 'Monokai'
  },
  dark: {
    name: 'dark',
    theme: darkTheme,
    displayName: 'Darkness'
  },
  solarizedLight: {
    name: 'solarizedLight',
    theme: solarizedLightTheme,
    displayName: 'Solarized Light'
  },
  bright: {
    name: 'bright',
    theme: brightTheme,
    displayName: 'Bright'
  },
}

export const ThemeChoiceKeys = Object.keys(ThemeMap);
export const DarkThemes = (({ monokai, dark }) => ({monokai, dark}))(ThemeMap)
export const LightThemes = (({ solarizedLight, bright }) => ({ solarizedLight, bright }))(ThemeMap)

export default ThemeMap
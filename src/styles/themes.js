const blackTheme = {
  backgroundColor: '#1c1c1c',
  color: '#e2e2e2',
  emphasisTextColor: '#fcfcfc',
  emphasisLabelColor: '#636363',
  lightTextColor: '#a0a0a0',
  dividerColor: '#a0a0a0'
}

const whiteTheme = {
  backgroundColor: '#ffffff',
  color: '#1c1c1c',
  emphasisTextColor: '#000000',
  emphasisLabelColor: '#8e8d8d',
  lightTextColor: '#706d6d',
  dividerColor: '#706d6d'
}

const solarizedLightTheme = {
  backgroundColor: '#FDF6E3',
  color: '#586D75',
  emphasisTextColor: '#D33681',
  emphasisLabelColor: '#5FB2A7',
  lightTextColor: '#7b95a0',
  dividerColor: '#B8BFB8'
}

const ThemeMap = {
  black: {
    name: 'black',
    theme: blackTheme
  },
  solarizedLight: {
    name: 'solarizedLight',
    theme: solarizedLightTheme
  },
  white: {
    name: 'white',
    theme: whiteTheme
  },
}


export default ThemeMap
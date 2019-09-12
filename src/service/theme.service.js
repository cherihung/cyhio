import ThemeMap from 'styles/themes';

const LOCAL_STORAGE_KEY = 'cyh_theme';

export const getUserTheme = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
  let theme = ThemeMap.monokai;
  if(savedKey) {
    if(ThemeMap[savedKey]) {
      theme = ThemeMap[savedKey]
    }
  }
  return theme;
}

export const getUserThemeKey = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
  let defaultKey = Object.keys(ThemeMap.monokai);
  if(savedKey) {
    if(ThemeMap[savedKey]) {
      return savedKey
    }
  }
  return defaultKey;
}

export const saveUserThemeKey = (themeKey) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
}

export const getThemeObject = (key) => {
  return ThemeMap[key];
}
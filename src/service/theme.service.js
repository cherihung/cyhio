import ThemeMap, { DEFAULT_THEME } from 'styles/themes';

const LOCAL_STORAGE_KEY = 'cyh_theme';

export const getUserTheme = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  if (savedKey) {
    return ThemeMap[savedKey];  
  }

  return DEFAULT_THEME;
}

export const saveUserThemeKey = (themeKey) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
}

export const getThemeObject = (key) => {
  return ThemeMap[key];
}
import ThemeMap, { DEFAULT_THEME } from 'styles/themes';

const LOCAL_STORAGE_KEY = 'cyh_theme';

export const getUserTheme = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
  const userTheme = getThemeObject(savedKey);

  if (!userTheme) {
    clearUserThemeKey();
    return DEFAULT_THEME;
  }
  
  return userTheme;
}

export const saveUserThemeKey = (themeKey) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
}

export const clearUserThemeKey = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export const getThemeObject = (key) => {
  return ThemeMap[key];
}
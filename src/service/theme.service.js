import ThemeMap from 'styles/themes';

const LOCAL_STORAGE_KEY = 'cyh_theme';

export const getUserTheme = () => {
  const savedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
  const key = getUserThemeKey(savedKey)

  return ThemeMap[key]
}

export const getUserThemeKey = (savedKey) => {
  let defaultKey = Object.keys(ThemeMap.monokai);
  if(savedKey && ThemeMap[savedKey]) {
    return savedKey
  }
  return defaultKey;
}

export const saveUserThemeKey = (themeKey) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
}

export const getThemeObject = (key) => {
  return ThemeMap[key];
}
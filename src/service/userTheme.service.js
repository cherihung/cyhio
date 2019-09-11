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

export const saveUserTheme = (themeKey) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, themeKey);
}
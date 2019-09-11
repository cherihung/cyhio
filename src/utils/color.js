import { DarkThemes } from 'styles/themes';

export function isDarkTheme(key) {
  return Object.keys(DarkThemes).includes(key)
}
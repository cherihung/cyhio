import { DarkThemes } from './themes';

export function isDarkTheme(key) {
  return Object.keys(DarkThemes).includes(key)
}
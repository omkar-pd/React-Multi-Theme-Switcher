// themes.ts
export type ThemeName = 'light' | 'dark' | 'colorful';

export const themes = {
  light: {
    name: 'Light',
    className: 'theme-light',
   },
  dark: {
    name: 'Dark',
    className: 'theme-dark',
  },
  colorful: {
    name: 'Colorful',
    className: 'theme-colorful',
  },
} as const;

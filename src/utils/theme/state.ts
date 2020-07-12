import { createContext } from 'react';
import { NamedTheme } from './types';
import LightTheme from './themes/light';
import DarkTheme from './themes/dark';

export const initialState = {
  theme: localStorage.getItem('theme') === 'dark' ? DarkTheme : LightTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setTheme: (theme: NamedTheme) => {},
};

export const ThemeContext = createContext(initialState);

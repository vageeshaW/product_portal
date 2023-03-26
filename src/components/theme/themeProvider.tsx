import React, {useContext} from 'react';
import DefaultTheme from './default';
import ITheme from './types';

const ThemeContext = React.createContext(DefaultTheme);

type ThemeProviderTypes = {
  children: React.ReactNode;
  theme: ITheme;
};

export const ThemeProvider = ({
  children,
  theme = DefaultTheme,
}: ThemeProviderTypes) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);

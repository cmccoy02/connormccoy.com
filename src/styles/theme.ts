export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    card: string;
    border: string;
  };
  fonts: {
    title: string;
    body: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#f4f4ed',
    text: '#1E1F21',
    primary: '#1E1F21',
    secondary: '#2A2B2E',
    accent: '#3498db',
    card: '#ffffff',
    border: '#e0e0e0',
  },
  fonts: {
    title: '"AppleGaramond", serif',
    body: '"JetBrains Mono", monospace',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#1E1F21',
    text: '#f4f4ed',
    primary: '#f4f4ed',
    secondary: '#e0e0e0',
    accent: '#3498db',
    card: '#2A2B2E',
    border: '#3A3B3E',
  },
  fonts: {
    title: '"AppleGaramond", serif',
    body: '"JetBrains Mono", monospace',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
}; 
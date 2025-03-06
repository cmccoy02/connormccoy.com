import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Bridge from './pages/Bridge';
import Essays from './pages/Essays';
import Contact from './pages/Contact';
import { darkTheme } from './styles/theme';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      {(theme) => (
        <StyledThemeProvider theme={theme || darkTheme}>
          <GlobalStyles />
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/bridge" element={<Bridge />} />
                <Route path="/essays" element={<Essays />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </Router>
        </StyledThemeProvider>
      )}
    </CustomThemeProvider>
  );
};

export default App;

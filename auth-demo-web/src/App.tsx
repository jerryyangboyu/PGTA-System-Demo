import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginPage from './auth/views/LoginPage';
import './App.css';

const theme = createTheme();

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </div>
  );
}

export default App;

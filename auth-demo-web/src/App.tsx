import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginPage from './auth/views/LoginPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);
const theme = createTheme();

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <AuthenticatedTemplate>
                <h1>logged In</h1>
              </AuthenticatedTemplate>
            } />

            <Route path='/login' element={
              <UnauthenticatedTemplate>
                <LoginPage />
              </UnauthenticatedTemplate>
            } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MsalProvider>
  );
}

export default App;

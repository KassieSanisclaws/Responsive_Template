import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './App.tsx';
import AppTheme from './theme/AppTheme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={AppTheme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)

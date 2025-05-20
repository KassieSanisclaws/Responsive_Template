
import AppFooter from './components/appFooter/AppFooter';
import AppHeader from './components/appHeader/AppHeader';
import AppTheme from './theme/AppTheme';
import { Box } from '@mui/material';

function App() {
  const theme = AppTheme.palette;

  return (
    <>
    <AppHeader 
        onMenuClick={() => { /* handle menu click */ }} 
        toggleColorMode={() => { /* handle color mode toggle */ }} 
      />
    <Box sx={{ backgroundColor: "red" }}>
      
        <h1>Responsive App</h1>
      <p>Resize the window to see the layout adapt from mobile to desktop view.</p>

      
    </Box>
    <AppFooter 
        onMenuClick={() => { /* handle menu click */ }} 
        toggleColorMode={() => { /* handle color mode toggle */ }}
      />
    </>
  );
}

export default App

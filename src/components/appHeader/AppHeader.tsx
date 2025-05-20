import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeToggle } from '../themeToggle/ThemeToggle';

type AppHeaderProps = {
  onMenuClick: () => void;
  toggleColorMode: () => void;
};

function AppHeader({ onMenuClick, toggleColorMode }: AppHeaderProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton 
             edge="start" 
             color="inherit" 
             aria-label="menu" 
             onClick={onMenuClick}
             sx={{ mr: 2, display: { sm: 'none' } }}
             >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Responsive App
        </Typography>
        <Box sx={{ backgroundColor: "red" }}>
            <ThemeToggle toggleColorMode={toggleColorMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
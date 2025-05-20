import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeToggle } from '../themeToggle/ThemeToggle';

type AppFooterProps = {
  onMenuClick: () => void;
  toggleColorMode: () => void;
};

function AppFooter({ }: AppFooterProps) {
  return (
        <Box sx={{ backgroundColor: "red", width: "100%", height: "20vh", position: "fixed", bottom: 0, left: 0 }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
             AppFooter
            </Typography>
        </Box> 
  );
};

export default AppFooter;
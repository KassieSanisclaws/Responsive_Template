import { AppBar, Grid, Typography, IconButton, Box, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import BrandAvatar from '../avatar/BrandAvatar';
import Image1 from '../../assets/images/anime-pic10.png';

type AppFooterProps = {
  onMenuClick: () => void;
  toggleColorMode: () => void;
};

function AppFooter({ }: AppFooterProps) {
  return (
        <Grid container sx={{ backgroundColor: "red", width: "100%", position: "fixed", bottom: 0, left: 0, border: "4px solid black" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
             AppFooter
            </Typography>
           <Grid container sx={{ border: "4px solid purple", height: "100%", width: "100%", display: "flex", justifyContent: "center" }}>
              <Grid container sx={{ border: "4px solid blue", height: "100%", width: "50%" }}>
  {/*  
              <Grid size={}>

              </Grid>

              <Grid size={}>

              </Grid> */}



         </Grid>
         <Grid container sx={{ border: "4px solid green", height: "100%", width: "100%" }}>
            <Box>
              <Stack direction="row" spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BrandAvatar 
                    alt="Brand Logo"
                    src={Image1}
                    size={30}
                    direction="row"
                    spacing={2}
                />
                <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
                    All Rights Reserved
                </Typography>
              </Stack>
            </Box>
         </Grid>
          </Grid>
            
        </Grid> 
  );
};

export default AppFooter;
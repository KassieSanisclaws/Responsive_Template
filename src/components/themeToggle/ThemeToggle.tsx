import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

type Props = {
  toggleColorMode: () => void;
};

export const ThemeToggle: React.FC<Props> = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <IconButton color="inherit" onClick={toggleColorMode}>
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
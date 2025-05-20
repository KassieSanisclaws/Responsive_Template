import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Divider, } from '@mui/material';

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  variant: 'temporary' | 'persistent';
  onItemClick: (item: string) => void;
};

const drawerWidth = 240;

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose, variant, onItemClick }) => {
  const items = ['Home', 'About', 'Contact'];

  return (
    <Drawer
      variant={variant}
      open={isOpen}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {/* {items.map((item) => (
          <ListItem button key={item} onClick={() => onItemClick(item)}>
            <ListItemText primary={item} />
          </ListItem>
        ))} */}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface AvatarProps {
    alt: string;
    src: string;
    size?: number;
    direction?: "row" | "column";
    spacing?: number;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const BrandAvatar: React.FC<AvatarProps> = ({
    alt,
    src,
    size = 40,
    direction = "row",
    spacing = 2,
    onClick,
    onMouseEnter,
    onMouseLeave
}) => {
  return (
    <Stack direction={direction} spacing={spacing}>
      <Avatar 
        alt={alt} 
        src={src}
        sx={{ width: size, height: size }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Stack>
  );
};

export default BrandAvatar;


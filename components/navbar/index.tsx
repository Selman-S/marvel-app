import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'var(--red)', fontFamily: 'var(--font-familyOrbitron)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'var(--font-familyOrbitron)' }}>
          Marvel Universe
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit" sx={{ fontFamily: 'var(--font-familyOrbitron)' }}>Home</Button>
        </Link>
        {/* Add more navigation links here */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
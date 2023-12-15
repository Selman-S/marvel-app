"use client"
import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';

const NavBar: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <AppBar position="fixed" className='transition-all' sx={ scrolling?{backgroundColor: 'var(--red)', fontFamily: 'var(--font-familyOrbitron)',}:{backgroundColor: 'var(--red)', background:'transparent',boxShadow:'none', fontFamily: 'var(--font-familyOrbitron)',}}>
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
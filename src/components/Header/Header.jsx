import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Box } from '@mui/material';
import styles from './Header.module.css';
import logo from '../../assets/images/logos/white/white-logos-06.png';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }} className={styles.header}>
      <Toolbar>
        <img src={logo} alt="Logo" className={styles.logo} />

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
          <Button color="inherit" href="#hero">Home</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component="a" href="#hero" className={styles.menuItem}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#projects" className={styles.menuItem}>Projects</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#about" className={styles.menuItem}>About</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#contact" className={styles.menuItem}>Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
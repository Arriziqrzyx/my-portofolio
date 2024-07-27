import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ColorPalette from './ColorPalette';
// import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle

const useStyles = makeStyles({
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem 2%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      fontSize: '2rem',
      color: 'var(--text-color)',
      textTransform: 'capitalize',
      textDecoration: 'none',
      fontWeight: 600,
      '& span': {
        color: 'var(--main-color)',
        textTransform: 'capitalize',
        fontWeight: 'bolder',
      },
    },
    navbar: {
      '& a': {
        fontSize: '1.5rem',
        color: 'var(--text-color)',
        textTransform: 'capitalize',
        fontWeight: 500,
        margin: '0 1rem',
        transition: 'transform 0.3s ease, color 0.3s ease',
        '&:hover': {
          color: 'var(--main-color)',
          textDecoration: 'underline',
        },
        '&.active': {
          color: 'var(--main-color)',
          textDecoration: 'underline',
        },
      },
    },
    menu: {
      '& i': {
        color: 'var(--white)',
        fontSize: '2rem',
        display: 'none',
        '&:hover': {
          color: 'var(--main-color)',
          textShadow: '.1rem .5rem 1rem var(--main-color)',
        },
      },
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: '-50%',
      width: '50%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '5rem',
      transition: 'right 0.3s ease, opacity 0.3s ease',
      zIndex: 200,
      opacity: 0,
      '&.active': {
        right: 0,
        opacity: 1,
      },
      '& a': {
        fontSize: '1.5rem',
        color: 'var(--white)',
        textTransform: 'capitalize',
        fontWeight: 500,
        margin: '1rem 0',
        textAlign: 'center',
        width: '100%',
        padding: '1rem',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'var(--white)',
          textDecoration: 'none',
        },
      },
    },
    sidebarMenu: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      cursor: 'pointer',
      '& i': {
        fontSize: '2rem',
        color: 'var(--white)',
      },
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 150,
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity 0.3s ease, visibility 0.3s ease',
      '&.active': {
        opacity: 1,
        visibility: 'visible',
      },
    },
    '@media all and (max-width: 670px)': {
      header: {
        position: 'sticky',
        padding: 0,
        '& $logo, & $menu': {
          padding: '1rem 2rem',
        },
      },
      menu: {
        '& i': {
          display: 'block',
        },
      },
      navbar: {
        display: 'none',
      },
    },
});

const Header = ({ activeSection }) => {
  const classes = useStyles();
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const changeColor = (color) => {
    document.documentElement.style.setProperty('--main-color', color);
  };

  return (
    <header className={classes.header}>
      <a href="#" className={classes.logo}>
        portfolio <span>arriziq</span>
      </a>
      <div className={classes.menu} onClick={toggleSidebar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <nav className={classes.navbar}>
        <a href="#Home" className={activeSection === 'Home' ? 'active' : ''}>Home</a>
        <a href="#Skills" className={activeSection === 'Skills' ? 'active' : ''}>Skills</a>
        <a href="#Certificate" className={activeSection === 'Certificate' ? 'active' : ''}>Certificate</a>
        <a href="#Projects" className={activeSection === 'Projects' ? 'active' : ''}>Projects</a>
        <a href="#Contact" className={activeSection === 'Contact' ? 'active' : ''}>Contact</a>
      </nav>
      <ColorPalette changeColor={changeColor} />
      {/* <DarkModeToggle /> Tambahkan DarkModeToggle di sini */}
      <nav className={`${classes.sidebar} ${sidebarActive ? 'active' : ''}`}>
        <div className={classes.sidebarMenu} onClick={toggleSidebar}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <a href="#Home" onClick={toggleSidebar}>home</a>
        <a href="#Skills" onClick={toggleSidebar}>skills</a>
        <a href="#Certificate" onClick={toggleSidebar}>certificate</a>
        <a href="#Projects" onClick={toggleSidebar}>projects</a>
        <a href="#Contact" onClick={toggleSidebar}>contact</a>
      </nav>
      <div className={`${classes.overlay} ${sidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { FaSun, FaMoon } from 'react-icons/fa';

const useStyles = makeStyles({
  toggleButton: {
    position: 'fixed',
    top: '10rem',
    right: '4rem',
    backgroundColor: 'var(--main-color)',
    border: 'none',
    borderRadius: '50%',
    width: '4rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1050,
    color: '#FFF',
  },
  toggleButtonHover: {
    backgroundColor: 'var(--main-color)',
  },
});

const DarkModeToggle = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <button
      onClick={toggleMode}
      className={classes.toggleButton}
    >
      {darkMode ? <FaMoon size="22" /> : <FaSun size="24" />}
    </button>
  );
};

export default DarkModeToggle;

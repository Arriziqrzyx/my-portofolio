import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Toast from 'react-bootstrap/Toast';
import { FaPalette } from 'react-icons/fa';

const useStyles = makeStyles({
  paletteButton: {
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
  },
  toastContainer: {
    position: 'fixed',
    top: '16rem',
    right: '9rem',
    zIndex: 1050,
  },
  toast: {
    width: 'fit-content',
    minWidth: '20rem',
    maxWidth: '24rem',
  },
  toastHeader: {
    backgroundColor: 'var(--main-color)',
    color: '#fff',
    fontSize: '1.2rem',
  },
  toastBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    flexWrap: 'wrap',
  },
  colorCircle: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    margin: '0.5rem',
    cursor: 'pointer',
    transition: 'transform 0.1s ease',
  },
  activeColorCircle: {
    transform: 'scale(1.3)',
  },
});

const ColorPalette = () => {
  const classes = useStyles();
  const [showToast, setShowToast] = useState(false);
  const [activeColor, setActiveColor] = useState('#416D19'); // Default color

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const handleColorChange = (color) => {
    // Update global CSS variable for --main-color
    document.documentElement.style.setProperty('--main-color', color);
    setActiveColor(color); // Update active color
  };

  return (
    <>
      <button
        className={classes.paletteButton}
        onClick={toggleToast}
      >
        <FaPalette size={24} color="white" />
      </button>
      <div className={classes.toastContainer}>
        <Toast show={showToast} onClose={toggleToast} className={classes.toast}>
          <Toast.Header className={classes.toastHeader}>
            <strong className="me-auto">Theme Color</strong>
          </Toast.Header>
          <Toast.Body className={classes.toastBody}>
            <div
              onClick={() => handleColorChange('#416D19')}
              style={{ backgroundColor: '#416D19' }}
              className={`${classes.colorCircle} ${activeColor === '#416D19' ? classes.activeColorCircle : ''}`}
            />
            <div
              onClick={() => handleColorChange('#F5A623')}
              style={{ backgroundColor: '#F5A623' }}
              className={`${classes.colorCircle} ${activeColor === '#F5A623' ? classes.activeColorCircle : ''}`}
            />
            <div
              onClick={() => handleColorChange('#a60808')}
              style={{ backgroundColor: '#a60808' }}
              className={`${classes.colorCircle} ${activeColor === '#a60808' ? classes.activeColorCircle : ''}`}
            />
            <div
              onClick={() => handleColorChange('#9B59B6')}
              style={{ backgroundColor: '#9B59B6' }}
              className={`${classes.colorCircle} ${activeColor === '#9B59B6' ? classes.activeColorCircle : ''}`}
            />
            <div
              onClick={() => handleColorChange('#004C99')}
              style={{ backgroundColor: '#004C99' }}
              className={`${classes.colorCircle} ${activeColor === '#004C99' ? classes.activeColorCircle : ''}`}
            />
          </Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default ColorPalette;

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles({
  footer: {
    backgroundColor: 'var(--second-bg-color)',
    padding: '3rem 5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    textAlign: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5rem',
    '& i': {
      fontSize: '2rem',
      color: 'var(--text-color)',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    '& i:hover': {
      color: 'var(--main-color)',
    },
  },
  navbar: {
    margin: '2rem 0',
    '& a': {
      fontSize: '1.5rem',
      color: 'var(--text-color)',
      textTransform: 'capitalize',
      fontWeight: 500,
      margin: '0 1rem',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    '& a:hover': {
      color: 'var(--main-color)',
      textDecoration: 'underline',
    },
  },
  credit: {
    '& p': {
      fontSize: '1.3rem',
      color: 'var(--light-color)',
      textTransform: 'capitalize',
      margin: '0',
      '& i, & span': {
        color: 'var(--main-color)',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <i className="fab fa-linkedin" aria-hidden="true"></i>
        <i className="fab fa-github" aria-hidden="true"></i>
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </div>
      <nav className={classes.navbar}>
        <a href="#Home">Home</a>
        <a href="#Skills">Skills</a>
        <a href="#Certificate">Certificate</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
      <div className={classes.credit}>
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Arriziq <span>||</span> All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

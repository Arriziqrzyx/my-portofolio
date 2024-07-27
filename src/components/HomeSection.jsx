import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Typed from 'typed.js';

const useStyles = makeStyles({
  home: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15rem',
    paddingTop: '6rem',
  },
  content: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '1rem',
  },
  h1: {
    fontSize: '4rem',
    fontWeight: 700,
    color: 'var(--text-color)',
    textTransform: 'capitalize',
    '& span': {
      color: 'var(--main-color)',
    },
  },
  h3: {
    fontSize: '2rem',
    color: 'var(--text-color)',
    textTransform: 'capitalize',
    minWidth: '28rem',
    fontWeight: 600,
    '& span': {
      position: 'relative',
      color: 'var(--main-color)',  // Set color for typing text
    },
  },
  p: {
    color: 'var(--text-color)',
    fontSize: '1.2rem',
    lineHeight: 1.5,
    width: '50rem',
    marginBottom: '1rem',
    textAlign: 'left',
    textTransform: 'none',
  },
  btn: {
    color: 'var(--main-color)',
    backgroundColor: 'var(--bg-color)',
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    fontWeight: 500,
    border: '.2rem solid var(--main-color)',
    borderRadius: '3rem',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'var(--main-color)',
      color: 'var(--text-color)',
      boxShadow: '0 0 1rem var(--main-color)',
      transform: 'translateY(-3px)',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    '& i': {
      color: 'var(--main-color)',
      fontSize: '2rem',
      border: '.2rem solid var(--main-color)',
      padding: '1rem',
      borderRadius: '50%',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'var(--main-color)',
        color: 'var(--text-color)',
        boxShadow: '.1rem .5rem 1rem var(--main-color)',
      },
    },
  },
  flexImg: {
    position: 'relative',
    width: '45rem',
    height: '45rem',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    '& img': {
      position: 'absolute',
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all .2s linear',
    },
    '& .backImage': {
      zIndex: 1,
      boxShadow: '0 0 1.5rem var(--main-color)',
      animation: '$rotate 12s linear infinite',
      backgroundColor: 'var(--main-color)',
    },
    '& .frontImage': {
      zIndex: 2,
      animation: '$rotate 6s linear infinite',
    },
    '& img:nth-child(3)': {
      zIndex: 3,
      filter: 'grayscale(100%)',
    },
    '& img:hover': {
      filter: 'grayscale(0%)',
    },
    '&:hover': {
      filter: 'drop-shadow(0 0 4em var(--main-color))',
    },
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(-360deg)',
    },
  },
  '@media all and (max-width: 1024px)': {
    home: {
      flexFlow: 'column-reverse',
      padding: '8rem 0',
      paddingTop: '15rem',
    },
  },
  '@media all and (max-width: 670px)': {
    flexImg: {
      height: '35rem',
      width: '35rem',
    },
    content: {
      padding: '0 4rem',
    },
    p: {
      width: '100%',
    },
  },
});

const HomeSection = () => {
  const classes = useStyles();
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Game Developer", "Frontend Developer", "UI / UX Designer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1700,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={classes.home} id="Home">
      <div className={classes.content}>
        <h1 className={classes.h1}>hi, it's <span>arriziq</span></h1>
        <h3 className={classes.h3}>
          i'm a <span ref={typedRef}></span>
        </h3>
        <p className={classes.p}>
          Beginner and a fresh Bachelor's graduate in Information Technology from Universitas Amikom Purwokerto, completing my studies in 7 semesters with a GPA of 3.69. I have experience participating in the MSIB Kampus Merdeka program in 'Game Development' and the FGA Digitalent Kominfo Program in 'Mobile App Development with React Native'. These experiences have inspired me to pursue a career as a Web/Mobile Programmer. I am highly enthusiastic and motivated to continue learning and ready to contribute effectively to your team.
        </p>
        <div className={classes.icons}>
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          <i className="fab fa-github" aria-hidden="true"></i>
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </div>
        <div className={classes.flexBtn}>
          <a href="#" className={classes.btn}>download CV</a>
        </div>
      </div>
      <div className={classes.flexImg}>
        <img src="images/belakang.png" className="backImage" alt="Gambar Belakang" />
        <img src="images/depan.png" className="frontImage" alt="Gambar Depan" />
        <img src="images/PP123.png" alt="" />
      </div>
    </section>
  );
}

export default HomeSection;

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles({
  contact: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg-color)',
    padding: '5rem 5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': { // Media query untuk tablet/phone
      padding: '5rem 0',
    },
  },
  heading: {
    color: 'var(--text-color)',
    fontSize: '4rem',
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 700,
  },
  headingSpan: {
    color: 'var(--main-color)',
  },
  formContainer: {
    width: '100%',
    '@media (max-width: 768px)': { // Media query untuk tablet/phone
      width: '90%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '1rem',
    padding: '2rem',
    width: '100%',
    '@media (max-width: 768px)': { // Media query untuk tablet/phone
      flexDirection: 'column',
      padding: '2rem 0',
    },
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    width: '49%',
    '@media (max-width: 768px)': { // Media query untuk tablet/phone
      width: '100%',
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    width: '49%',
    '@media (max-width: 768px)': { // Media query untuk tablet/phone
      width: '100%',
      marginTop: '1rem',
    },
  },
  input: {
    backgroundColor: 'var(--bg-color)',
    border: '0.1rem solid var(--main-color)',
    borderRadius: '1rem',
    padding: '1rem',
    width: '90%',
    outline: 'none',
    color: 'var(--text-color)',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
  textarea: {
    backgroundColor: 'var(--bg-color)',
    border: '0.1rem solid var(--main-color)',
    borderRadius: '1rem',
    padding: '1rem',
    width: '90%',
    height: '15rem',
    resize: 'none',
    outline: 'none',
    color: 'var(--text-color)',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
  button: {
    color: 'var(--text-color)',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
    padding: '1rem 2rem',
    borderRadius: '3rem',
    backgroundColor: 'var(--main-color)',
    boxShadow: '0 0 15px var(--main-color)',
    border: 'none',
    '&:hover': {
      boxShadow: '0 0 10px var(--main-color), 0 0 20px var(--main-color), 0 0 30px var(--main-color)',
      backgroundColor: 'var(--main-color)',
    },
    '@media (max-width: 768px)': { // Media query untuk tablet/phone
      marginTop: '2rem',
    },
  },
});

const ContactSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.contact} id="Contact">
      <h2 className={classes.heading}>
        Contact <span className={classes.headingSpan}>me</span>
      </h2>
      <div className={classes.formContainer}>
        <form action="#" method="get" className={classes.form}>
          <div className={classes.inputs}>
            <input type="text" placeholder="Full Name" className={classes.input} />
            <input type="email" placeholder="Email" className={classes.input} />
            <input type="tel" placeholder="Phone Number" className={classes.input} />
            <input type="text" placeholder="Subject" className={classes.input} />
          </div>
          <div className={classes.text}>
            <textarea placeholder="Your message" className={classes.textarea}></textarea>
            <Button variant="primary" className={classes.button}>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

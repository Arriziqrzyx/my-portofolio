import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';

const useStyles = makeStyles({
  contact: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg-color)',
    padding: '5rem 5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
      marginTop: '2rem',
    },
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
  modalSuccess: {
    color: 'green',
  },
  modalError: {
    color: 'red',
  },
  modalIcon: {
    fontSize: '4rem',
    margin: 15,
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--text-color-light)'
  },
  modalText: {
    fontSize: '2rem',
    color: 'var(--text-color-light)'
  },
});

const ContactSection = () => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalClass, setModalClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4u30qyo', 'template_lyqfocl', e.target, 'O-jXvU6bYAODS8_cw')
      .then((result) => {
        setModalTitle('Success');
        setModalMessage('Message sent successfully!');
        setModalClass('modalSuccess');
        setShowModal(true);
        e.target.reset();
      }, (error) => {
        setModalTitle('Error');
        setModalMessage('Failed to send message. Please try again.');
        setModalClass('modalError');
        setShowModal(true);
      });
  };

  const modalIcon = modalClass === 'modalSuccess' ? 
    <CheckCircle className={`${classes.modalIcon} ${classes.modalSuccess}`} /> : 
    <XCircle className={`${classes.modalIcon} ${classes.modalError}`} />;

  return (
    <section className={classes.contact} id="Contact">
      <h2 className={classes.heading}>
        Contact <span className={classes.headingSpan}>me</span>
      </h2>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputs}>
            <input type="text" name="name" placeholder="Full Name" className={classes.input} required />
            <input type="email" name="email" placeholder="Email" className={classes.input} required />
            <input type="tel" name="phone" placeholder="Phone Number" className={classes.input} />
            <input type="text" name="subject" placeholder="Subject" className={classes.input} />
          </div>
          <div className={classes.text}>
            <textarea name="message" placeholder="Your message" className={classes.textarea} required></textarea>
            <Button type="submit" variant="primary" className={classes.button}>
              Send Message
            </Button>
          </div>
        </form>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className={classes.modal}>
          <Modal.Title className={classes.modalTitle}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.modalBody}>
          <div className={modalClass}>
            {modalIcon}
            <div className={classes.modalText}>{modalMessage}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ContactSection;

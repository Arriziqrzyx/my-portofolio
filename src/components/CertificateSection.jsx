import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Modal, Button } from 'react-bootstrap';

import img1 from '../assets/Certificate/1.png';
import img2 from '../assets/Certificate/2.png';
import img3 from '../assets/Certificate/3.png';
import img4 from '../assets/Certificate/4.png';
import img5 from '../assets/Certificate/5.png';
import img6 from '../assets/Certificate/6.png';
import img7 from '../assets/Certificate/7.png';
import img8 from '../assets/Certificate/8.png';
import img9 from '../assets/Certificate/9.png';
import img10 from '../assets/Certificate/10.png';
import img11 from '../assets/Certificate/11.png';
import img12 from '../assets/Certificate/12.png';
import img13 from '../assets/Certificate/13.png';
import img14 from '../assets/Certificate/14.png';

const certificates = [
  { id: 1, src: img1, judul: 'Certificate 1' },
  { id: 2, src: img2, judul: 'Certificate 2' },
  { id: 3, src: img3, judul: 'Certificate 3' },
  { id: 14, src: img14, judul: 'Certificate 14' },
  { id: 4, src: img4, judul: 'Certificate 4' },
  { id: 5, src: img5, judul: 'Certificate 5' },
  { id: 6, src: img6, judul: 'Certificate 6' },
  { id: 7, src: img7, judul: 'Certificate 7' },
  { id: 8, src: img8, judul: 'Certificate 8' },
  { id: 9, src: img9, judul: 'Certificate 9' },
  { id: 10, src: img10, judul: 'Certificate 10' },
  { id: 11, src: img11, judul: 'Certificate 11' },
  { id: 12, src: img12, judul: 'Certificate 12' },
  { id: 13, src: img13, judul: 'Certificate 13' },
];

const useStyles = makeStyles((theme) => ({
  certificate: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg-color)', // Set a light background color
    padding: '5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '4rem',
    color: 'var(--text-color)',
    paddingTop: '5rem',
    marginBottom: '2rem',
    fontWeight: 700,
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '4rem',
    width: '100%',
    padding: '4rem 12rem',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    '@media (max-width: 1024px)': {
      padding: '4rem 6rem', // Adjust padding for tablet
      gap: '3rem',
    },
    '@media (max-width: 670px)': {
      padding: '4rem 2rem',
      gap: '2rem',
    },
  },
  certificateBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    maxWidth: '400px',
    '& img': {
      maxWidth: '100%',
      borderRadius: '6px',
      objectFit: 'cover',
    },
    '&:hover': {
      border: '1px solid var(--main-color)',
      boxShadow: '0 0 10px var(--main-color), 0 0 20px var(--main-color)',
      transform: 'translateY(-10px)',
    },
    '@media (max-width: 1024px)': {
      maxWidth: '350px', // Adjust max width for tablet
    },
    '@media (max-width: 670px)': {
      maxWidth: '300px',
    },
  },
}));

function CertificateSection() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open'); // Cleanup on unmount
  }, [open]);

  const handleOpen = (certificate) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section className={classes.certificate} id="Certificate">
      <h2 className={classes.heading}>Certificates</h2>
      <div className={classes.boxContainer}>
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className={classes.certificateBox}
            onClick={() => handleOpen(certificate)}
          >
            <img src={certificate.src} alt={certificate.judul} />
          </div>
        ))}
      </div>
      <Modal show={open} onHide={handleClose} centered size="lg"> {/* Use size="xl" for extra large */}
        <Modal.Header closeButton>
           <Modal.Title className="modal-title-lg">{selectedCertificate?.judul || 'Certificate'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedCertificate?.src} alt="Certificate" style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default CertificateSection;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Modal, Button } from 'react-bootstrap';

import imgSOH from '../assets/Projects/SOH.png';
import imgHP from '../assets/Projects/HP.png';
import imgVegifoody from '../assets/Projects/Vegifoody.png';
import imgMovieApp from '../assets/Projects/MovieApp.png';
import imgCC from '../assets/Projects/CC.png';
import imgCR from '../assets/Projects/CrossyRoad.png';

const projects = [
  { id: 1, src: imgSOH, title: 'Sentinel of Health', description: 'Unity 2D Mobile Game', link: 'https://nyipu.itch.io/sentinels-of-health' },
  { id: 2, src: imgHP, title: 'Harmoni Pesisir', description: 'Unity 2D Mobile Game', link: 'https://nyipu.itch.io/harmoni-pesisir-game-edukasi-konservasi-laut' },
  { id: 3, src: imgVegifoody, title: 'Vegifoody', description: 'Unity 2D Mobile Game', link: 'https://github.com/Arriziqrzyx/Vegifoody' },
  { id: 4, src: imgMovieApp, title: 'Movie App', description: 'React Native Mobile App', link: 'https://github.com/Arriziqrzyx/team9_movie_app' },
  { id: 5, src: imgCC, title: 'UI/UX Cyber Coin', description: 'Figma UI/UX Design', link: 'https://drive.google.com/file/d/1cMr9XrE6CGBrRkIfzV_gGbLf4RrJKHeu/view?usp=sharing' },
  { id: 6, src: imgCR, title: 'Crossy Road', description: 'Unity 3D Windows Game', link: 'https://github.com/Arriziqrzyx/Kyuubi-Crossy-Box' },
];

const useStyles = makeStyles((theme) => ({
  projects: {
    minHeight: '100vh',
    backgroundColor: 'var(--second-bg-color)',
    padding: '5rem 5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: 'var(--text-color)',
    fontSize: '4rem',
    textAlign: 'center',
    marginBottom: '6rem',
    paddingTop: '5rem',
    fontWeight: 700,
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '4rem',
    width: '80%',
    '@media (max-width: 1024px)': {
      padding: '4rem 4%',
      width: '90%',
    },
    '@media (max-width: 670px)': {
      padding: '4rem 2%',
      width: '100%',
      gap: '2rem',
    },
  },
  projectCard: {
    backgroundColor: 'var(--second-bg-color)',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      border: '1px solid var(--main-color)',
      boxShadow: '0 0 10px var(--main-color), 0 0 20px var(--main-color)',
    },
    '@media (min-width: 1025px)': {
      maxWidth: '350px',
    },
    '@media (max-width: 1024px)': {
      maxWidth: '45%', // Adjust for tablets (2 cards per row)
    },
    '@media (max-width: 670px)': {
      maxWidth: '85%', // Full width for smartphones
    },
  },
  projectThumbnail: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
  projectTitle: {
    color: 'var(--text-color)',
    fontSize: '2rem',
    margin: '1rem 0',
  },
  projectDescription: {
    color: 'var(--light-color)',
    fontSize: '1.4rem',
  },
  modalContent: {
    textAlign: 'center',
  },
  modalImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  modalDescription: {
    color: 'black',
    fontSize: '1.6rem',
  },
  modalButton: {
    marginBottom: '1rem',
    backgroundColor: 'var(--main-color)',
    borderColor: 'var(--main-color)',
    '&:hover': {
      backgroundColor: 'var(--main-color)',
      borderColor: 'var(--main-color)',
    },
  },
  modalTitle: {
    fontSize: '2.5rem',
    color: 'black',
  },
}));

function ProjectsSection() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [open]);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section className={classes.projects} id="Projects">
      <h2 className={classes.heading}>Projects</h2>
      <div className={classes.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={classes.projectCard} onClick={() => handleOpen(project)}>
            <img src={project.src} alt={project.title} className={classes.projectThumbnail} />
            <h3 className={classes.projectTitle}>{project.title}</h3>
            <p className={classes.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
      <Modal show={open} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className={classes.modalTitle}>{selectedProject?.title || 'Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.modalContent}>
          <img src={selectedProject?.src} alt="Project" className={classes.modalImage} />
          <p className={classes.modalDescription}>{selectedProject?.description}</p>
          <Button
            variant="primary"
            size="lg"
            href={selectedProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.modalButton}
          >
            View Project
          </Button>
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

export default ProjectsSection;

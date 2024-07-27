import React from 'react';
import { makeStyles } from '@mui/styles';

const skills = [
  { id: 1, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
  { id: 2, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS' },
  { id: 3, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { id: 4, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap' },
  { id: 5, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS' },
  { id: 6, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
  { id: 7, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', name: 'Canva' },
  { id: 8, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React & React Native' },
  { id: 9, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
  { id: 10, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', name: 'Unity' },
  { id: 11, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', name: 'C#' },
  { id: 12, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', name: 'Git' },
];

const useStyles = makeStyles({
  skills: {
    padding: '5rem 5%',
    textAlign: 'center',
    backgroundColor: 'var(--second-bg-color)',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '4rem',
    color: '#fff', // White text
    paddingTop: '5rem',
    fontWeight: 700,
  },
  subheading: {
    fontSize: '2rem',
    color: '#fff', // White text
    marginBottom: '5rem',
    fontWeight: 400,
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '3rem',
    justifyContent: 'center',
  },
  skillBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '0 1 calc(30% - 2rem)', // Adjust to fit 3 per row on larger screens
    maxWidth: '300px', // Ensure consistency
    textAlign: 'center',
    color: '#fff', // White text
  },
  img: {
    width: '80px',
    height: '80px',
    marginBottom: '1rem',
  },
  span: {
    display: 'block',
    fontSize: '1.5rem',
  },
  '@media (max-width: 1024px)': {
    skillBox: {
      flex: '0 1 calc(45% - 2rem)', // Adjust to fit 2 per row on tablets
    },
    container: {
      marginBottom: '4rem',
    },
  },
});

const SkillsSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.skills} id="Skills">
      <div className={classes.container}>
        <h2 className={classes.heading}>My Skills</h2>
        <h3 className={classes.subheading}>I'm recently learning</h3>
        <div className={classes.skillsList}>
          {skills.map(skill => (
            <div key={skill.id} className={classes.skillBox}>
              <img src={skill.src} alt={skill.name} className={classes.img} />
              <span className={classes.span}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

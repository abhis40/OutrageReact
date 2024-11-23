// src/components/Header.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonClick } from '../redux/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const buttonClicked = useSelector((state) => state.app.buttonClicked); // Access button clicked state

  const handleButtonClick = () => {
    dispatch(toggleButtonClick()); // Dispatch toggle action
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {/* Links now open in a new tab */}
        <a href="/page1" style={styles.link} target="_blank" rel="noopener noreferrer">
          Page 1
        </a>
        <a href="/page2" style={styles.link} target="_blank" rel="noopener noreferrer">
          Page 2
        </a>
        <a href="/page3" style={styles.link} target="_blank" rel="noopener noreferrer">
          Page 3
        </a>
        <a href="/page4" style={styles.link} target="_blank" rel="noopener noreferrer">
          Page 4
        </a>
        <a href="/page5" style={styles.link} target="_blank" rel="noopener noreferrer">
          Page 5
        </a>
      </nav>
      <div style={styles.buttonContainer}>
        <button onClick={handleButtonClick} style={styles.button}>
          Get Started
        </button>
        {buttonClicked && <p style={styles.message}>Button was clicked!</p>}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#123456',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    color: '#fff',
    fontSize: '14px',
  },
};

export default Header;

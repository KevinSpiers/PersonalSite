// pages/interests.js
import { useEffect, useState } from 'react';
import styles from '../styles/Interests.module.css';

const Interests = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    fetch('/api/interests')
      .then(response => response.json())
      .then(data => setInterests(data));
  }, []);

  return (
    <div className={styles.interests}>
      {interests.map((interest, index) => (
        <div key={index} className={styles.interest}>
          <div><b><font size="+1">{interest.Title}</font></b></div>
          <img src={interest.PicturePath} alt={interest.Title} />
          <p>{interest.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default Interests;
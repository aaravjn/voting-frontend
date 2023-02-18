import React from 'react'
// import Button from '@mui/material/Button';
// import './dashboard.css';
import styles from './dashboard.module.css';

function dashboard() {
  return (
    <div>
      <div className={styles.header}>
        VOTING-POOL
      </div>
      <div className={styles.conatiner}>

        <button className={styles.btn} variant="contained"><div className="contained">VOTE</div></button>

        <button className={styles.btn} variant="contained"><div className="contained">CREATE POOL</div></button>

        <button className={styles.btn} variant="contained"><div className="contained">APPLY</div></button>

        <button className={styles.btn} variant="contained"><div className="contained">RESULT</div></button>

      </div>
        
      
    </div>
  )
}

export default dashboard

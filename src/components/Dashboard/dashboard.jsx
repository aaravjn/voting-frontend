import React from 'react'
// import Button from '@mui/material/Button';
import './dashboard.css';

function dashboard() {
  return (
    <div>
      <div className="header">
        VOTING-POOL
      </div>
      <div className="conatiner">

        <button className="btn" variant="contained"><div className="contained">VOTE</div></button>

        <button className="btn" variant="contained"><div className="contained">CREATE POOL</div></button>

        <button className="btn" variant="contained"><div className="contained">APPLY</div></button>

        <button className="btn" variant="contained"><div className="contained">RESULT</div></button>

      </div>
        
      
    </div>
  )
}

export default dashboard

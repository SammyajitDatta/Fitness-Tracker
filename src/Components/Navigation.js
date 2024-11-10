import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div className = "Main-Header1">
        <nav className = "Nav1">
          <ul className = "ulStart">
            {/* Links the texts to specifc URL paths to navigate the page*/}
            <li><Link to="/" className = "linkColors">Home</Link></li>
            <li><Link to="/diet-tracker" className = "linkColors">Diet Tracker</Link></li>
            <li><Link to="/workout-tracker" className = "linkColors">Workout Tracker</Link></li>
            <li><Link to="/workout-videos" className = "linkColors">Workout Guides</Link></li>
          </ul>
        </nav>
        <div>
          <h1 className = "FitnessLeague" style={{fontFamily:"revert-layer"}} > League of Fitness</h1>
        </div>
      </div>
    </>
  )
}

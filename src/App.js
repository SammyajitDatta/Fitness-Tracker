
import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import DietTracker from './Components/DietTracker';
import WorkoutTracker from './Components/WorkoutTracker';
import WorkoutVideos from './Components/WorkoutVideos';
import Navigation from './Components/Navigation';

export default function App() {
  // Food history is passed as a paramater to keep the data even after navigating off to different page.
  const [foodHistory, setFoodHistory] = useState([]);
  return ( 
  <>
    <div className = "App-header"> 
    <Router>
      <Navigation />
      <Routes>
        {/* Tells the URL which component to render */}
        <Route path="/" element={<Home />} /> 
        <Route path="/diet-tracker" element={<DietTracker foodHistory={foodHistory} setFoodHistory={setFoodHistory} />} />  
        <Route path="/workout-tracker" element={<WorkoutTracker />} /> 
        <Route path="/workout-videos" element={<WorkoutVideos />} />  
      </Routes>
    </Router>
    </div>
  </>
  );
}



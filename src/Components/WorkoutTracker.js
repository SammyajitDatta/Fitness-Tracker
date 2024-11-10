import React, {useState} from 'react'

// Imports all the images from the specified folder
import calfs from '../Images/calfs.png'
import chest from '../Images/chest.png'
import chestfly from '../Images/chestfly.png'
import hammercurls from '../Images/hammercurls.png'
import hamstringcurls from '../Images/hamstringcurls.png'
import latpd from '../Images/latpd.png'
import legsextension from '../Images/legextensions.png'
import legpress from '../Images/legpress.png'
import triceppushdowns from '../Images/triceppushdown.png'
import shrugs from '../Images/shrugs.png'
import shoulders from '../Images/shouldrs.png'
import rows from '../Images/rows.png'

export default function WorkoutTracker() {

  // Array that holds list of all the different muscle groups the given excercises uses
  const ImageData = [
    { name: "Incline Dumbbell Bench", url: chest },
    { name: "Chest Flys", url: chestfly},
    { name: "Cable Flys", url: chestfly },
    { name: "Tricep Pushdowns", url: triceppushdowns },
    { name: "Skull Crushers", url: triceppushdowns},
    { name: "Lat Pulldown", url: latpd},
    { name: "Rows", url: rows },
    { name: "Shrugs", url: shrugs },
    { name: "Hammer Curls", url: hammercurls },
    { name: "Preacher Curls", url: hammercurls },
    { name: "Leg Press", url:  legpress},
    { name: "Hamstring Curls", url: hamstringcurls},
    { name: "Calf Raises", url:  calfs},
    { name: "Leg Extensions", url:  legsextension},
    { name: "Shoulder Presses", url:  shoulders}
  ];

  // Refer to WorkoutVideos.js, follows same logic from line 39-60
  const [searchTerm, setSearchTerm] = useState('');
  const [selectWorkout, setSelectWorkout] = useState(null);
  const filterImages = ImageData.filter(video =>video.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const [currentButton, setCurrentButton] = useState(null);


  return (
    <>
      <h1> Track Your Workouts </h1>
      <div className = "outtermost" > 
        <div className = "LeftFB">
              <input type="text" placeholder="Search Workouts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className = "workoutsearch"/>
              <ul>
                {filterImages.map((video, index) => (
                  <li key={index} className = "VideoList">
                    <button onClick={() => {setSelectWorkout(video.url); setCurrentButton(video.name);}} className={`button ${currentButton === video.name ? 'active' : ''}`} >
                      {video.name}
                    </button>
                  </li>
                ))}
              </ul>
        </div>

        {/*Lines 63 - 188 are just to gives users input for the amount of sets and reps they want to do of a specifc exercise, 
           as well as the weight they are doing. Upon completing a workout, they can check the box off*/}
        <div className = "overall">
          <div className = "ChestTriceps">
            <h3>Chest and Triceps</h3>
            <div>
              <div>
                <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Incline Dumbbell Bench
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div>
                <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Chest Flys
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div>
                <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Cable Flys
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div>
                <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Tricep Pushdowns
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div>
                <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Skull Crushers
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
            </div>
          </div>
          <div className = "BackBiceps">
          <h3>Back and Biceps</h3>
            <div>
              <div>
                <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Lat Pulldowns
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
            </div>
            <div>
            <input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Rows
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
            </div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Shrugs
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
            <div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Hammer Curls
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div><input type = "checkbox" className = "WorkoutCheck"/>
              <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Preacher Curls
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              </div>
            </div>
          <div className = "LegsShoulders">
            <h3>Legs and Shoulders</h3>
            <div>
            <div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Leg Press
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
            </div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Hamstring Curls
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
            <div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Calf Raises
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                x
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                Leg Extension
                <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              <div><input type = "checkbox" className = "WorkoutCheck"/>
                <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                  x
                  <input type = "number" min = "0" className =  "WorkoutBoxes"/>
                  Shoulder Press
                  <input type = "number" min = "0" className =  "WorkoutBoxes A"/>
              </div>
              
              </div>
          </div>
        </div>
        <div className = "RightFB">
                <h3> Muscle Groups </h3>
                {/*Displays selected image*/}
                <img className = "Images" width="100%" height="50%" src={selectWorkout} alt="" />
          </div>
      </div>
    </>
  )
}

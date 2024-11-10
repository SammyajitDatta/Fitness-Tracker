import React, { useState } from 'react';

export default function WorkoutVideos() {

  // Array that holds list of all the videos and associated workout name to guide users on how to perform certain exercises 
  const videoData = [
    { name: "Incline Dumbbell Bench", url: "https://www.youtube.com/embed/5CECBjd7HLQ" },
    { name: "Chest Flys", url: "https://www.youtube.com/embed/FDay9wFe5uE" },
    { name: "Cable Flys", url: "https://www.youtube.com/embed/4mfLHnFL0Uw" },
    { name: "Tricep Pushdowns", url: "https://www.youtube.com/embed/6Fzep104f0s" },
    { name: "Skull Crushers", url: "https://www.youtube.com/embed/jPjhQ2hsAds" },
    { name: "Lat Pulldown", url: "https://www.youtube.com/embed/EUIri47Epcg" },
    { name: "Rows", url: "https://www.youtube.com/embed/UCXxvVItLoM" },
    { name: "Shrugs", url: "https://www.youtube.com/embed/_t3lrPI6Ns4" },
    { name: "Hammer Curls", url: "https://www.youtube.com/embed/XOEL4MgekYE" },
    { name: "Preacher Curls", url: "https://www.youtube.com/embed/sxA__DoLsgo" },
    { name: "Leg Press", url: "https://www.youtube.com/embed/yZmx_Ac3880" },
    { name: "Hamstring Curls", url: "https://www.youtube.com/embed/n5WDXD_mpVY" },
    { name: "Calf Raises", url: "https://www.youtube.com/embed/KxEYX_cuesM" },
    { name: "Leg Extensions", url: "https://www.youtube.com/embed/m0FOpMEgero" },
    { name: "Shoulder Presses", url: "https://www.youtube.com/embed/WvLMauqrnK8" }
  ];

  // Setting variables for searching videos, selecting videos, filtering videos and seeing which button is current pressed
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  // Filters videos based on case-insensitive matching of video names with user search input
  const filteredVideos = videoData.filter(video =>video.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const [currentButton, setCurrentButton] = useState(null);


  return (
    <>
      <h3> Learn More About Workout</h3>
      <div className = "outterFB">
        <div className = "InnerFB FB2">

          {/* input box that sets the search term to be whatever the user inputs */}
          <input type="text" placeholder="Search videos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <ul>
            {/* Maps all videos that match the search term on to a button */}
            {filteredVideos.map((video, index) => (
              <li key={index} className = "VideoList">
                {/* Upon button click, it sets the video to the specified url, and whatever button is pressed is considered "active"*/}
                <button onClick={() => {setSelectedVideo(video.url); setCurrentButton(video.name);}} className={`button ${currentButton === video.name ? 'active' : ''}`}>
                  {video.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className = "InnerFB V2"> 
          {/* Displays the video the user selected if any, else tells the user to select a video (a? b: c) form */}
          {selectedVideo ? (
            <iframe width="100%" height="100%" src={selectedVideo} title="Exercise Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          ) : (
            <p className='VideoSelect'>Select a video to play</p>
          )}
        </div>
      </div>
    </>
  );
}

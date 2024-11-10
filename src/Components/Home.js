import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    // My personal user, log-ins are not active
    const [username, setUsername] = useState('Sammyajit'); 
    const [checkInCount, setCheckInCount] = useState(0);
    // Starter Rank
    const [rank, setRank] = useState('Iron'); 

    // Runs when Home component is being displayed for the first time 
    useEffect(() => {

        // Sends GET request to fetch user data by username
        axios.get(`http://localhost:5000/user/${username}`)
            // After succesful fetch, handle response
            .then(response => {
                // Get user data
                const user = response.data;
                if (user) {
                    // Sets local variables with appropriate values
                    setCheckInCount(user.checkInCount);
                    setRank(user.rank);
                }
            })
            // Gives error message in cosole if fetch is unsuccessful
            .catch(error => console.error('Error fetching user data:', error));
    }  
    // Rerun the effect if username changes
    , [username]);

    // Handles the checkin button press
    const handleCheckIn = () => {
        // Sends a POST request to check in the user by username
        axios.post('http://localhost:5000/checkin', { username })
            // After succesful check-in, handle response
            .then(response => {
                // Get user data
                const user = response.data;
                // Update local variables with latest data 
                setCheckInCount(user.checkInCount);
                setRank(user.rank);
            });
    };

    return (
        <div className ="FF">
            <div style = {{width:"50%", display:"flex", flexDirection: "column", alignItems: "center"}}> 
                {/*Prints personal stats */}
                <h3> Welcome {username} to League of Fitness </h3>
                <div className="home">
                <h3>Your Rank: {rank}</h3>
                <p>Check-In Count: {checkInCount}</p>
                {/*Go to handle checkin upon button press and disable button accordingly*/}
                <button onClick={handleCheckIn}>
                    Daily Check-In
                </button>
            </div>

            {/*Just basic site introduction for the user.*/}
            <div>
                <p > 
                    Your journey to a stronger, healthier, and more motivated self starts here. 
                    League of Fitness is a comprehensive platform designed to track your workouts, monitor your diet, 
                    and help you achieve the body and lifestyle you’ve always dreamed of. With features like a personalized workout tracker, 
                    detailed meal logs, and curated workout guides, everything you need is at your fingertips.     
                </p>
                </div>
                <h3> Be better than yourself from yesterday. </h3>
                <div>
                <p> 
                    Push your limits, build discipline, and reach new heights with tools that 
                    empower you every step of the way. Whether you're lifting weights, tracking calories, or learning the fitness basics, 
                    League of Fitness is here to make your fitness journey easier, more efficient, and enjoyable.
                </p>
                </div>
                <div>
                <p> Features Include: </p>
                <ul>
                    <li>Workout Tracker – Log your exercises, sets, reps, and weights. Learn more about what muscle each workout impacts.</li>
                    <li>Meal Tracker – Record your meals, calories, protein, and macros with ease. Keep on top of your nutrition goals every day.</li>
                    <li>Workout Video Library – Access professional workout guides to ensure perfect form and technique. Find new exercises to challenge yourself.</li>
                </ul>
                </div>
                <div>
                    League of Fitness is your companion on the path to self-improvement. Stay consistent, stay determined, 
                    and remember: every small step forward is a victory. Embrace the journey,
                    celebrate your progress, and keep pushing to be better than yourself from yesterday. Let's make today count!
                </div>
            </div>
            
        </div>
    );
}

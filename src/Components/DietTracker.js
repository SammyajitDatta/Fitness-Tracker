import React, {useState} from 'react'

export default function DietTracker({foodHistory, setFoodHistory}) {
  const [foodName, setFoodName] = useState('');
  const [caloriesAmount, setCaloriesAmount] = useState('');
  const [proteinAmount, setProteinAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foodName || !isNaN(foodName)) {
      alert("Please enter a valid food name.");
      setFoodName('');
      return;
    }
    const newFood = {
      name: foodName,
      calories: parseInt(caloriesAmount),
      protein: parseInt(proteinAmount)
    };

    // Appends to food history array
    setFoodHistory([...foodHistory, newFood]);
    setFoodName('');
    setCaloriesAmount('');
    setProteinAmount('');
  };

  // Iterates through the arrays and sums up the calories and portein 
  const totalCalories = foodHistory.reduce((total, food) => total + food.calories, 0);
  const totalProtein = foodHistory.reduce((total, food) => total + food.protein, 0);


  return (
    <>
      <div className = "f3">
        <div className = "f1">
          <h1>Meal Tracker</h1>
          {/*Upon hitting enter or add food, it runs handle submit.*/}
          <form onSubmit={handleSubmit}>
            <label>
              Food Name: 
              <input className = "i1" type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)}required/>
            </label>
            <br />

            <label>
              Calories: 
              <input className = "i1" type="number" value={caloriesAmount} onChange={(e) => setCaloriesAmount(e.target.value)} min="0" required/>
            </label>
            <br />

            <label>
              Protein(g): 
              <input className = "i1" type="number" value={proteinAmount} onChange={(e) => setProteinAmount(e.target.value)} min="0" required/>
            </label>
            <br />
            <button className = "b1" type="submit">Add Food</button>
          </form>
        </div>
        <div className="f2">
          <h2>Food History</h2>
            <ul>
              {/*Refer to lines 42-49 of WorkoutVideos.js*/ }
              {foodHistory.map((food, index) => (
                <li key={index}>
                  {food.name} : {food.calories} calories, {food.protein}g protein
                </li>
              ))}
            </ul>
          <h3> Total Macros</h3>
          <p> You have consumed {totalCalories} calories and {totalProtein}g of protein. </p>
        </div>
      </div>
    </>
  )
}

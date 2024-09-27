// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ActivityList } from './components/ActivityList.js';
import { InputActivity } from './components/InputActivity.js';


function App() {
  const [activities, setActivities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddActivity = () => {
    if (inputValue.trim() !== "") {
      setActivities([...activities, inputValue]);
      setInputValue("");
    } else {
      alert("Please enter an activity");
    }
  };
  // Function to remove selected activities using splice
  const handleRemoveActivities = () => {
    let updatedActivities = [...activities];
    
    for (let i = updatedActivities.length - 1; i >= 0; i--) {
      const checkbox = document.getElementById(`activity-checkbox-${i}`);
      if (checkbox && checkbox.checked) {
        updatedActivities.splice(i, 1); // Remove the activity from the array
        // <delete>
        //   {document.getElementById(`activity-span-${i}`)}
        // </delete>
      }
    }
  
    setActivities(updatedActivities);
    console.log(updatedActivities); 
  };

  return (
      <div>
        <header>
          <div className="header">
            <div className="header-text">
              Do more, stress less
            </div>
          </div>
        </header>
        <div className="activities">
          <div className="activity-container">
            <InputActivity
              inputValue={inputValue}
              handleInputChange={handleInputChange}
              handleAddActivity={handleAddActivity}
            />
            <ActivityList 
              activities={activities}
              handleRemoveActivities={handleRemoveActivities}
              setActivities = {setActivities}
            />
          </div>
        </div>
      </div>
  );
}

export default App;


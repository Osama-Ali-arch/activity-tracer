import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Importing the edit icon from react-icons
import { SelectAll } from './SelectAll.js';

export function ActivityList({ activities, handleRemoveActivities, setActivities }) {
  const changeActivity = (index) => {
    let changedActivities = [...activities];
    const spanElement = document.getElementById(`activity-span-${index}`);

    // Create input element for editing
    let inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = spanElement.innerHTML;
    inputElement.className = 'def';
    inputElement.id = `activity-input-${index}`;

    // Replace span with input
    spanElement.parentNode.replaceChild(inputElement, spanElement);

    // Add event listener for Enter key to save the edited activity
    inputElement.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        let updatedActivity = inputElement.value.trim();
        if (updatedActivity !== '') {
          // Replace input with updated span
          spanElement.innerHTML = updatedActivity;
          inputElement.parentNode.replaceChild(spanElement, inputElement);
          changedActivities[index] = updatedActivity;
          setActivities(changedActivities);
        } else {
          alert('Please enter an activity');
        }
      }
    });
  };

  return (
    <div className="activity-list">
      <table className="Activity-table">
        <thead>
          <tr>
            <SelectAll activities={activities} setActivities={setActivities} />
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr className="activities-list" key={index} id={`activity-row-${index}`}>
              <td className="activity-row">
                <input
                  type="checkbox"
                  className="abc"
                  id={`activity-checkbox-${index}`}
                />
                <span className="def" id={`activity-span-${index}`}>
                  {activity}
                </span>
                <FaEdit
                  id={`activity-edit-${index}`}
                  onClick={() => changeActivity(index)}
                  style={{ cursor: 'pointer', marginLeft: '8px' }} // Optional: Adjust styles as needed
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="remove-btn" onClick={handleRemoveActivities}>
        Remove Completed Activities
      </button>
    </div>
  );
}

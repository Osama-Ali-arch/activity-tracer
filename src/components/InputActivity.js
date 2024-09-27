import React from 'react'

export function InputActivity({ inputValue, handleInputChange, handleAddActivity }) {
    return (
      <div className="add-activities">
        <input
          className="activity"
          type="text"
          id="activity"
          placeholder="Enter Activity"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddActivity}>
          Add Activity,
        </button>
      </div>
    );
  }

// export default InputActivity()
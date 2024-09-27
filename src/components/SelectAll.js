export function SelectAll({ activities, setActivities }) {
    const handleSelectAll = () => {
      const isChecked = document.getElementById("selectAll").checked;
      const updatedActivities = activities.map((activity, index) => {
        document.getElementById(`activity-checkbox-${index}`).checked = isChecked;
        return activity;
      });
      setActivities(updatedActivities); // Update the activities state if necessary
    };
  
    return (
      <>
        <input
          className='selectAll'
          id="selectAll"
          type="checkbox"
          onClick={handleSelectAll}
        />
        Select All
      </>
    );
  }
  
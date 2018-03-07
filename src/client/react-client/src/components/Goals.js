import React from 'react';

const Goals = (props) => {
  return (
    <div id="goals">
      <h1>My Goals</h1>

      <ol>
        {props.currentGoalList.map((item, i) => {
          return <li>{item.goal}</li> 
        })}
      </ol>

    </div>
  );
}

export default Goals;
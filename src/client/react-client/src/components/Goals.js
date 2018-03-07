import React from 'react';

const Goals = (props) => {
  return (
    <div id="goals">
      <h1>My Goals</h1>

      <ol className = "list-group">
        {props.currentGoalList.map((item, i) => {
          return <li className = "list-group-item" onClick = {(e => {
              props.getGoalById(item.id);
            })}>{item.goal}  <button id="checkBox"onClick = {(e => {
              {/*item.complete = !item.complete;*/}
              props.changeComplete(item);
            })}> Done? </button></li> 
        })}
      </ol>

    </div>
  );
}

export default Goals;
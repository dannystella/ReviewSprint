import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Goals from './components/Goals.js';
import GoalsForm from './components/GoalsForm.js';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
          currentGoal: {}
        }
    this.getGoals = this.getGoals.bind(this);
    this.postGoals = this.postGoals.bind(this);
    }


getGoals(){
  axios.get('/goals')
  .then((data) => {
    console.log(data);
  })
}

postGoals(goalObj){
  console.log(goalObj)
  // axios.post('/goals', goalObj)
  // .then((data) => {
  //   console.log(data);
  // })
}

render() {
  return (
  <div>
    <h1>Goalposts</h1>
    <button onClick = {this.getGoals} />
    <Goals />
    <GoalsForm postGoals = {this.postGoals}/>
  </div>
  )
};
    }
ReactDOM.render(<App/>, document.getElementById('app'));
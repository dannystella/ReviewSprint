import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Goals from './components/Goals.js';
import GoalsForm from './components/GoalsForm.js';
import Search from './components/Search.js'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
          currentGoal: {},
          currentGoalList: [],
          currentDetail: '',
          listTrigger: false  
        }
    this.getGoals = this.getGoals.bind(this);
    this.postGoals = this.postGoals.bind(this);
    this.getGoalById = this.getGoalById.bind(this);
    this.listTrigger = this.listTrigger.bind(this);
    }
listTrigger(){
  var flag = this.state.listTrigger;
  if(this.state.currentGoalList.length > 0){
    this.setState({
      listTrigger: !flag
    })
  }
}

getGoals(){
  axios.get('/goals')
  .then((data) => {
    this.setState({
      currentGoalList: data.data
    })
  })
}

postGoals(data){
  axios.post('/goals', data)
}

getGoalById(id){
  axios.get('/goals/' + id)
  .then((data) => {
    this.setState({
      currentDetail: data.data[0]
    })
  })
}

click(){
  console.log("fuck")
  // this.getGoals();
  this.listTrigger();
}


render() {
  return (
  <div>
    <h1>Goalposts</h1>
    <Search getGoalById = {this.getGoalById} />
    <button onClick = {this.click}>Retrieve Goals</button>
    {this.state.listTrigger && <Goals currentGoalList = {this.state.currentGoalList} />}
    <GoalsForm postGoals = {this.postGoals}/>
  </div>
  )
};
    }
ReactDOM.render(<App/>, document.getElementById('app'));
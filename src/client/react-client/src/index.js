import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Goals from './components/Goals.js';
import GoalsForm from './components/GoalsForm.js';
import Search from './components/Search.js'
import GoalDetail from './components/goaldetail.js'



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
          currentGoal: {},
          currentGoalList: [],
          currentDetail: {goal: "", description: "", complete: false },
          listTrigger: false,
          detailTrigger: false  
        }
    this.getGoals = this.getGoals.bind(this);
    this.postGoals = this.postGoals.bind(this);
    this.getGoalById = this.getGoalById.bind(this);
    this.listTrigger = this.listTrigger.bind(this);
    this.click = this.click.bind(this);
    this.handleDetailRender = this.handleDetailRender.bind(this);

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
    }, function(){
      this.listTrigger();
    })
  }).catch((err) => {
    console.log(err);
  })
}

handleDetailRender(){
  if(this.state.currentDetail !== null || this.state.currentDetail !== undefined){
      this.setState({
          detailTrigger: true
      })
  }
}


postGoals(data){
  axios.post('/goals', data)
}

getGoalById(id){
  axios.get('/goals/' + id)
  .then((data) => {
    if(data.data[0] === undefined){
      return;
    }
    this.setState({
      currentDetail: data.data[0]
    }, function(){
      this.handleDetailRender()
    })
  }).catch((err) => {
    console.log(err);
  })
}

click(){
  this.getGoals();
console.log("yo")
}


render() {
  return (
  <div>
    <HashRouter>
    <div>    
     <NavLink className = "left" to="/">Home View</NavLink>     
     <NavLink className = "right"  to="/detail">Detail View</NavLink> 
    <Route path="/detail" render={() => (
    <GoalDetail detailTrigger = {this.state.detailTrigger} currentDetail = {this.state.currentDetail} />
  )} />
    </div>
    </HashRouter>    
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


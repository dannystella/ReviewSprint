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
import Search from './components/Search.js';
import GoalDetail from './components/goaldetail.js';
import Login from './login';
import RegisterForm from './register';


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
    this.changeComplete = this.changeComplete.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
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
    console.log("getGoals", data.data)
    this.setState({
      currentGoalList: data.data
    }, function(){
      this.listTrigger();
    })
  }).catch((err) => {
    console.log(err);
  })
}

updateGoals(){
  axios.get('/goals')
  .then((data) => {
    console.log("updateGoals",data.data)
    this.setState({
      currentGoalList: data.data
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

changeComplete(item){
  var flag = !item.complete;
  var id = item.id;
  console.log("axios triggered")
  var bod = {
    id: id,
    complete: flag
  }
  axios.post('/goals/update', bod)
  .then(() => {
    console.log("posted")
    this.updateGoals();
  })
  //
}

postGoals(data){
  if(data.goal === '' || data.description === ''){
    console.log("nope");
    return;
  }
  axios.post('/goals', data)
  .then(() => {
    this.updateGoals();
  })
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

renderHome(){

}


render() {
  return (
  <div>
    <HashRouter>
    <div>    
     <div className = "navbar">
     <NavLink className = "left" to="/home">Home View</NavLink>    
     <NavLink to="/login">Login</NavLink> 
     <NavLink to="/register">Register</NavLink> 
     <NavLink className = "right"  to="/home/detail">Detail View</NavLink> 
     </div>
    <Route path="/home/detail" render={() => (
    <GoalDetail detailTrigger = {this.state.detailTrigger} currentDetail = {this.state.currentDetail} />
  )} />
      <Route path="/login" render={() => (
    <Login/>
  )} />
        <Route path="/register" render={() => (
    <RegisterForm/>
  )} />
        <Route path="/home" render={() => (
    <div>
    <h1>Goalposts</h1>
    
    <Search getGoalById = {this.getGoalById} />
    <button onClick = {this.click}>Retrieve Goals</button>
    <GoalsForm postGoals = {this.postGoals}/>
    {this.state.listTrigger && <Goals changeComplete = {this.changeComplete} getGoalById = {this.getGoalById} currentGoalList = {this.state.currentGoalList} />}      
      </div>
  )} />
    </div>
    </HashRouter>    


  </div>
  )
};
    }
ReactDOM.render(<App/>, document.getElementById('app'));


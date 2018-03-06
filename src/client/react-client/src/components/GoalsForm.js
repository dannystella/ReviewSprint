import React, {Component} from 'react';
class GoalForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentSearched: '',
            currentDescription: ''
        }

    }
  render() {
    return (
      <form name="goal-form">
        <input type = "text" onChange = {(e => {
          this.setState({
            currentSearched: e.target.value
          })
        })}/>
        <input type = "text" onChange = {(e => {
          this.setState({
            currentDescription: e.target.value
          })
        })}/>
        <button onClick = {(e => {
          var goal = {
            goal: this.state.currentSearched,
            description: this.state.currentDescription
          }
          if(e.key === "Enter"){
            this.props.postGoals(goal);
          }
        })}>Click Here</button>
        </form>
    )
}
}
export default GoalForm; 
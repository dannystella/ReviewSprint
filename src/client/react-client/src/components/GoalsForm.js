import React, {Component} from 'react';
class GoalForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          goal: '',
          description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoal = this.handleGoal.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

handleSubmit(e) {
  e.preventDefault();
  this.props.postGoals(this.state);
  e.target.reset();
}

handleGoal(e) {
  this.setState({
    goal: e.target.value
  })
}

handleDescription(e) {
  this.setState({
    description: e.target.value
  })
}

  render() {
    return (
      <div className = "form-group">
        <form name="goal-form" onSubmit = {this.handleSubmit}>
          <input type = "text" placeholder = "Goal Name" onChange = {this.handleGoal} />
          <input type = "text" placeholder = "Goal Details" onChange = {this.handleDescription}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default GoalForm; 
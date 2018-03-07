import React, {Component} from 'react';
class GoalDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

    }


  render() {
      console.log(this.props.detailTrigger, this.props.currentDetail.complete);
    return (
        <div>
        <h1 className = "list-group-item-heading">Goal detail</h1>    
        <h4>Goal: {this.props.detailTrigger && this.props.currentDetail.goal}</h4>
        <p>Description: {this.props.detailTrigger && this.props.currentDetail.description}</p>
        <p>Complete: {this.props.detailTrigger && this.props.currentDetail.complete}</p>
        </div>
    )
}
}
export default GoalDetail; 
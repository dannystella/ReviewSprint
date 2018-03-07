import React, {Component} from 'react';
class GoalDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

    }


  render() {
    return (
        <div>
        <div>Goal detail</div>    
        <h1>{this.props.detailTrigger && this.props.currentDetail.goal}</h1>
        <p>{this.props.detailTrigger && this.props.currentDetail.description}</p>
        <p>{this.props.detailTrigger && this.props.currentDetail.complete}</p>
        </div>
    )
}
}
export default GoalDetail; 
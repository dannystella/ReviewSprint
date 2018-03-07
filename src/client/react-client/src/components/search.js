import React, {Component} from 'react';
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
          currentSearched: '' 
        }

    }



  render() {
    return (
        <input placeholder = "Search a Goal" type = "text" onChange = {(e => {
            this.setState({
                currentSearched: e.target.value
            })

        })}  onKeyPress = {(e) => {
            if(e.key === "Enter"){
                this.props.getGoalById(e.target.value);
            }
        } }/>
    )
}
}
export default Search; 

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import decode from 'jwt-simple'

class RegisterForm extends Component {

    constructor(props){
    super(props);

    this.state = {
        username: '',
        password: '',
        token: ''
    }
this.handleUsername = this.handleUsername.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        
        var username = this.state.username.trim();
		var password = this.state.password.trim();
        var data = {username: username, password: password}

        // form validation goes here
        if (!username || !password) {
          return;
        }
        //request to server
        axios.post('/goals/signup', data)
        .then((data) => {
            this.props.setToken(data.data);
            // var token = data.token;
            // var decoded = jwt_decode(token);
            // console.log(decoded);
        }).catch((err) => {
            console.log(err);
        })

        console.log('form submitted!');

        // this.setState({
        //  username: '',
        //  password: ''           
        // })
        return;
}



handleUsername(e){
  this.setState({
    username: e.target.value
  })
}

handlePassword(e){
  this.setState({
    password: e.target.value
  })
}
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type='username' placeholder='Username' onChange = {this.handleUsername}  />
                <input type='password'  placeholder='Password'  onChange = {this.handlePassword}  />
                <input type='submit' className='btn btn-primary' value='Submit' />
            </form>
        );
    }
}
export default RegisterForm
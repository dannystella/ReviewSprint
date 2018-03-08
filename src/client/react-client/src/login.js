import React, { Component } from 'react';
import axios from 'axios'
import decode from 'jwt-simple'


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }


        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        var username = this.state.username.trim();
		var password = this.state.password.trim();
        var data = {username: username, password: password}

        // form validation goes here
        if (!username || !password) {
          return;
        }
        //request to server
        axios.post('/goals/login', data)
        .then((data) => {
            console.log(data);
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
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <input
                            className="form-item"
                            placeholder="Username"
                            name="username"
                            type="text"
                            onChange={this.handleUsername}
                        />
                        <input
                            className="form-item"
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handlePassword}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
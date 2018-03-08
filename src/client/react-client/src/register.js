
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

var RegisterForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

		var username = this.refs.email.value.trim();
		var password = this.refs.password.value.trim();
        var data = {username: username, password: password}

        // form validation goes here
        if (!username || !password) {
          return;
        }
        //request to server
        axios.post('signup', data)
        .then((data) => {
            console.log(data);
            var token = data.token;
            var decoded = jwt_decode(_token);
            console.log(decoded);
        }).catch((err) => {
            console.log(err);
        })

        console.log('form submitted!');

        this.refs.username.value = '';
        this.refs.password.value = '';
        return;
    },
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type='username' placeholder='Username' className='form-control' />
                <input type='password'  placeholder='Password' className='form-control' />
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>
        );
    }
});

export default RegisterForm
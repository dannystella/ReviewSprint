import React, { Component } from 'react';


class Login extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
        handleChange(e){
            this.setState({
                    [e.target.name]: e.target.value
            })             
    }

    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form>
                        <input
                            className="form-item"
                            placeholder="Username"
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
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
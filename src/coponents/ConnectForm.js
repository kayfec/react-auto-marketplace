import React from 'react';
import './ConnectForm.css';
import {RegisterForm} from "./RegisterForm";

export class ConnectForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submited', this.state.email);
    }

    handleEmailChange(event){
        console.log('email was changet', event.target.value);
        this.setState({email: event.target.value});
    }

    handlePassChange(event){
        console.log('pass was changet', event.target.value);
        this.setState({password: event.target.value});
    }

    render() {
        return(
            <form className='login'>
                <input
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                />
                <div>
                    <button onSubmit={this.handleSubmit}>Login</button>
                </div>

                <div>
                    <button onSubmit={this.Registration}>Registration</button>
                </div>
                <button>Зарегистрироватся{RegisterForm}</button>

            </form>
        )
    }
}

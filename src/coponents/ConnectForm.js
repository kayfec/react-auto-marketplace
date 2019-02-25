import React from 'react';
import './ConnectForm.css';
import {RegisterForm} from "./RegisterForm";

export class ConnectForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            showAdd: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.onChange = this.onChange.bind(this);
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

    onChange() {
        this.setState(prevState => {
            return {
                showAdd: !prevState.showAdd
            };
        });
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
                    <button>Login</button>
                </div>

                <div className="App">
                    <button type='button' onClick={this.onChange}>Register</button>
                    {this.state.showAdd &&
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <h2>Регистрация учётной записи</h2>
                            <a className="close" onClick={this.onChange}>&times;</a>
                            <div className="content">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                    }
                </div>

            </form>
        )
    }
}

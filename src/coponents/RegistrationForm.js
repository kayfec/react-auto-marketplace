import React from 'react';
import './RegistrationForm.css';

export class RegistrationForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        console.log('form is submited');
    }

    handleEmailChange(){
        console.log('email was changet', this);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='login'>
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
            </form>
        )
    }
}

import React from 'react';
import './RegisterForm.css';


export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
            name: '',
            surname: '',
            age: '',
            sex: '',
            phone: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submited', this.state.email);
    }

    handleChange(event){
        console.log('email was changet', event.target.value);
        this.setState({email: event.target.value});
    }


    render() {
        return (
        <div>
            <div>
            <input
                type="text"
                placeholder="Електронная почта"
                value={this.state.email}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Пароль"
                value={this.state.password}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Имя"
                value={this.state.name}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Фамилия"
                value={this.state.surname}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Возраст"
                value={this.state.age}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Пол"
                value={this.state.sex}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                type="number"
                placeholder="Мобильный телефон"
                value={this.state.phone}
                onChange={this.handleChange}
            />
            </div>
            <button>Save</button>
        </div>
        );
    }
}

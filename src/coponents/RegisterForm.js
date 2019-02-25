import React from 'react';
import './RegisterForm.css';


export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
            this.state= {
                user: {
                    email: '',
                    password: '',
                    name: '',
                    surname: '',
                    age: '',
                    sex: '',
                    phone: '',
                },

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    };


    handleSubmit(e) {
        e.preventDefault();
        this.props.onSave(this.state.item);
        this.setState({
            user: {
                email: '',
                password: '',
                name: '',
                surname: '',
                age: '',
                sex: '',
                phone: '',
            },
        });
    };

    handleChange(event, name){
        let value = event.target.value

        this.setState(prewState => {
           prewState.user[name] = value;
           return prewState;
        });
    };



    render() {
        return (
        <div>
            <div>
            <input
                type="text"
                placeholder="Електронная почта"
                value={this.state.user.email}
                onChange={(event) => this.handleChange(event, "email")}
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Пароль"
                value={this.state.user.password}
                onChange={(event) => this.handleChange(event, "password")}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Имя"
                value={this.state.user.name}
                onChange={(event) => this.handleChange(event, "name")}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Фамилия"
                value={this.state.user.surname}
                onChange={(event) => this.handleChange(event, "surname")}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Возраст"
                value={this.state.user.age}
                onChange={(event) => this.handleChange(event, "age")}
            />
            </div>
            <div>
            <input
                type="text"
                placeholder="Пол"
                value={this.state.user.sex}
                onChange={(event) => this.handleChange(event, "sex")}
            />
            </div>
            <div>
            <input
                type="number"
                placeholder="Мобильный телефон"
                value={this.state.user.phone}
                onChange={(event) => this.handleChange(event, "phone")}
            />
            </div>
            <button onClick={this.handleSubmit}>Save</button>
        </div>
        );
    }
}

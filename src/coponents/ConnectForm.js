import React from 'react';
import './ConnectForm.css';
import {RegisterForm} from "./RegisterForm";

export class ConnectForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showAdd: false,
        };
            this.onChange = this.onChange.bind(this);
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
                    placeholder="Логин"
                />

                <input
                    type="password"
                    placeholder="Пароль"
                />
                <div>
                    <button>Login</button>
                </div>

                <div className="App">
                    <button type='button' onClick={this.onChange}>Register</button>
                    {this.state.showAdd &&
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <h2 className='Reg'>Регистрация учётной записи</h2>
                            <a className="close" onClick={this.onChange}>&times;</a>
                            <div className="content">
                                <RegisterForm onClick={this.createClick}/>
                            </div>
                        </div>
                    </div>
                    }
                </div>

            </form>
        )
    }
}

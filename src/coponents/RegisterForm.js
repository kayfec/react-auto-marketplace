import React from 'react';
import './RegisterForm.css';


export class RegisterForm extends React.Component {

    render() {
        return (
        <div>
            <div> * Почта </div>
            <div> * Пароль </div>
            <div> * Имя</div>
            <div> * Фамилия</div>
            <div> * Возраст</div>
            <div> * Пол</div>
            <div> * Телефон</div>
        </div>
        );
    }
}

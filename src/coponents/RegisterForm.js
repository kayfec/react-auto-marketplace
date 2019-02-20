import React from 'react';
import './RegisterForm.css';


export class RegisterForm extends React.Component {
    render() {
        return (
            <div>
                {this.props.RegisterForm &&
                <div id="popup2" className="RegisterForm">
                    <div className="popup">
                        <h2>Полнная информация</h2>
                        <a className="close" onClick={this.props.closeClick}>&times;</a>
                        <div className="content">
                            <div className="vision" id='firstname'>
                                <div> * Почта </div>
                                <div> * Пароль </div>
                                <div> * Имя</div>
                                <div> * Фамилия</div>
                                <div> * Возраст</div>
                                <div> * Пол</div>
                                <div> * Телефон</div>

                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

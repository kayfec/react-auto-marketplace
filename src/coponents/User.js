import React from 'react';
import './User.css';

export class User extends React.Component {
    render() {
        return(
            <div className='login'>
                <div>
                    Login:
                    <input type='text'/>
                </div>
                <div>
                    Password:
                    <input type='text'/>
                </div>
            </div>
        )
    }
}

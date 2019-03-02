import React from 'react';
import './css/Announcement.css'

export class Announcement extends React.Component{

    render() {
        return (
            <div className='box'>
                <h2>Поиск автомобиля по параметрам</h2>
                <input
                    type='text'
                    placeholder='Марка Авто'
                    value={this.props.brand}
                />
                <input
                    type='text'
                    placeholder='Модель Авто'
                    value={this.props.model}
                />
                <input
                    type='number'
                    placeholder='Год Авто'
                    value={this.props.brand}
                />
                <input
                    type='text'
                    placeholder='коробка Авто'
                    value={this.props.brand}
                />
                <input
                    type='number'
                    placeholder='цена Авто'
                    value={this.props.brand}
                />
                <input
                    type='text'
                    placeholder='тип двигателя Авто'
                    value={this.props.brand}
                />
                <div>
                <button onClick={this.props.onView}>Поиск</button>
                </div>
            </div>);

    }
}
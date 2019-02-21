import React from 'react';
import './View.css';
import {FormatItem} from "./FormatItem";


export class View extends React.Component{

    render(){
        let views = [];

        if (this.props.items) {
            views = this.props.items.map(
                (item, index) => (<div className='box'>
                    <div className="item" > * Фото {this.props.items.images}</div>
                    <div > * id: {this.props.items.id} </div>
                    <div> * Марка: {this.props.items.brand} </div>
                    <div> * модель: {this.props.items.model }</div>
                    <div> * Обьем двигателя: {this.props.items.engineVolume}</div>
                    <div> * Цена: <FormatItem value={this.props.items.price} /> {this.props.items.money}</div>
                    <div> * коробка : {this.props.items.transmishion}</div>
                    <div> * Цвет Авто: {this.props.items.color}</div>
                    <div> * Статус: {this.props.items.status}</div>
                    <div> * Описание: {this.props.items.description} </div>
                    <div><button onClick={this.props.onRemove}>Удалить</button></div>
               </div>));
        }

        return(
            <div className="content" >
                {views ? views : <h1 className='box' >пусто!</h1>}
            </div>
        )
    }
}


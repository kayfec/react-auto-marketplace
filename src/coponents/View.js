import React from 'react';
import './View.css';
import {FormatItem} from "./FormatItem";


export class View extends React.Component{

    render(){
        let views = [];

        if (this.props.items) {
            views = this.props.items.map(
                (item, index) => (<div className='box'>
                    <div className="item" > * Фото {item.images}</div>
                    <div > * id: {item.id} </div>
                    <div> * Марка: {item.brand} </div>
                    <div> * модель: {item.model }</div>
                    <div> * Обьем двигателя: {item.engineVolume}</div>
                    <div> * Цена: <FormatItem value={item.price} /> {item.money}</div>
                    <div> * коробка : {item.transmishion}</div>
                    <div> * Цвет Авто: {item.color}</div>
                    <div> * Статус: {item.status}</div>
                    <div> * Описание: {item.description} </div>
                    <div>
                        <button onClick={this.props.onChange}>Изменить</button>
                        <button onClick={this.props.onRemove}>Удалить</button>
                    </div>
               </div>));
        }

        return(
            <div className="content" >
                {views.length ? views : <h1 className='box' >Пока нету обьявлений!</h1>}
            </div>
        )
    }
}


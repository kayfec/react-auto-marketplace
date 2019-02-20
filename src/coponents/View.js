import React from 'react';
import './View.css';
import {AddAnnouncement} from "./AddAnnouncement";
import {FormatItem} from "./FormatItem";


export class View extends React.Component{
    render(){
        let views = [];

        if (this.props.items) {
            views = this.props.items.map(
                (item, index) => (<div>
                    <div> * id: {this.props.items.id} </div>
                    <div> * Марка: {this.props.items.brand} </div>
                    <div> * модель: {this.props.items.model }</div>
                    <div> * Обьем двигателя: {this.props.items.engineVolume}</div>
                    <div> * Цена: <FormatItem value={this.props.items.price} /> {this.props.items.money}</div>
                    <div> * коробка : {this.props.items.transmishion}</div>
                    <div> * Цвет Авто: {this.props.items.color}</div>
                    <div> * Статус: {this.props.items.status}</div>
                    <div> * Описание: {this.props.items.description} </div>
                    <div> * Фото {this.props.items.images}</div>
                </div>));
            //<AddAnnouncement key={item.id} item={item}/>);
        }


        return(
            <div className='box'>
                <div className="item"><img src={require('../images/1.jpg')} alt="photo" /></div>
                <div className="mass" > Ваше обьявления</div>
                <div className="content">
                    {views ? views : <div>пусто!</div>}
                </div>
            </div>
        )
    }
}


import React from 'react';
import './View.css';
import {AddAnnouncement} from "./AddAnnouncement";
import {FormatItem} from "./FormatItem";


export class View extends React.Component{
    render(){
        let view = <div>
            <div> * id: {this.props.item.id} </div>
            <div> * Марка: {this.props.item.brand} </div>
            <div> * модель: {this.props.item.model }</div>
            <div> * Обьем двигателя: {this.props.item.engineVolume}</div>
            <div> * Цена: <FormatItem value={this.props.item.price} /> {this.props.item.money}</div>
            <div> * коробка : {this.props.item.transmishion}</div>
            <div> * Цвет Авто: {this.props.item.color}</div>
            <div> * Статус: {this.props.item.status}</div>
            <div> * Описание: {this.props.item.description} </div>
        </div>

        if(this.props.item != false) {
            view = this.props.item.map(
                (item, index) => <AddAnnouncement key={item.id} item={item}/>);
        } else if (this.props.item == undefined) {
            view = <div>пусто!</div>;
        }


        return(
            <div className='box'>
                <div className="item"><img src={require('../images/1.jpg')} alt="photo" /></div>
                <div className="mass" > Ваше обьявления</div>
                <div className="content">
                    <div>{view}</div>
                </div>
            </div>
        )
    }
}

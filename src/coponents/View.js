import React from 'react';
import './View.css';
import {FormatItem} from "./FormatItem";


export class View extends React.Component{
    constructor() {
        super();
        this.state = {
            editingId: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let brand = this.brand.value;
        let model = this.model.value;

        const currentItem = this.props.items.find(item => item.id === this.state.editingId);
        currentItem.brand = brand;
        currentItem.model = model;
        this.props.onEdit(currentItem);
        this.setState({
            editingId:false
        });
    };

    render(){
        let views = [];

        if (this.props.items) {
            views = this.props.items.map(
                (item) => (
                    this.state.editingId == item.id
                        ?
                        <form className='box' key={item.id} onSubmit={this.onSubmit}>
                            <div className="item" > * Фото {item.images}</div>
                            <div> * id: {item.id} </div>
                            <div> * Марка:<input type="text" ref={el=> this.brand = el} defaultValue={item.brand}/></div>
                            <div> * модель:<input type="text" ref={el=> this.model = el} defaultValue={item.model}/></div>
                            <div> * Обьем двигателя: {item.engineVolume}</div>
                            <div> * Цена: <FormatItem value={item.price} /> {item.money}</div>
                            <div> * коробка : {item.transmishion}</div>
                            <div> * Цвет Авто: {item.color}</div>
                            <div> * Статус: {item.status}</div>
                            <div> * Описание: {item.description} </div>
                            <button type="submit">Сохранить</button>
                        </form>
                        :
                        <div className='box' key={item.id} >
                            <div className="item" > * Фото {item.images}</div>
                            <div> * id: {item.id} </div>
                            <div> * Марка: {item.brand} </div>
                            <div> * модель: {item.model }</div>
                            <div> * Обьем двигателя: {item.engineVolume}</div>
                            <div> * Цена: <FormatItem value={item.price} /> {item.money}</div>
                            <div> * коробка : {item.transmishion}</div>
                            <div> * Цвет Авто: {item.color}</div>
                            <div> * Статус: {item.status}</div>
                            <div> * Описание: {item.description} </div>
                            <div>
                                <button onClick={() => this.setState({editingId: item.id})}>Изменить</button>
                                <button onClick={this.props.onRemove}>Удалить</button>
                            </div>
                        </div>
                ));
        }

        return(
            <div className="content" >
                {views.length ? views  : <h1 className='box' >Пока нету обьявлений!</h1>}
            </div>
        )
    }
}


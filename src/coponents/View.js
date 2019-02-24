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
        let images = this.images.value;
        let brand = this.brand.value;
        let model = this.model.value;
        let engineVolume = this.engineVolume.value;
        let money = this.money.value;
        let transmishion = this.transmishion.value;
        let color = this.color.value;
        let status = this.status.value;
        let description = this.description.value;

        const currentItem = this.props.items.find(item => item.id === this.state.editingId);
        currentItem.images = images;
        currentItem.brand = brand;
        currentItem.model = model;
        currentItem.engineVolume = engineVolume;
        currentItem.money = money;
        currentItem.transmishion = transmishion;
        currentItem.color = color;
        currentItem.status = status;
        currentItem.description = description;

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
                            <div className="item" > * Фото <input type="file" ref={el=> this.images = el} defaultValue={item.images}/></div>
                            <div> * id: {item.id} </div>
                            <div> * Марка:<input type="text" ref={el=> this.brand = el} defaultValue={item.brand}/></div>
                            <div> * модель:<input type="text" ref={el=> this.model = el} defaultValue={item.model}/></div>
                            <div> * Обьем двигателя: <input type="text" ref={el=> this.engineVolume = el} defaultValue={item.engineVolume}/></div>
                            <div> * Цена: <FormatItem value={item.price} /> <input type="text" ref={el=> this.money = el} defaultValue={item.money}/></div>
                            <div> * коробка :<input type="text" ref={el=> this.transmishion = el} defaultValue={item.transmishion}/></div>
                            <div> * Цвет Авто: <input type="text" ref={el=> this.color = el} defaultValue={item.color}/></div>
                            <div> * Статус: <input type="text" ref={el=> this.status = el} defaultValue={item.status}/></div>
                            <div> * Описание: <input type="text" ref={el=> this.description = el} defaultValue={item.description}/></div>
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


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
        let price = this.price.value;
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
        currentItem.price = price;
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
                            <div> * Марка: </div><div><input type="text" ref={el=> this.brand = el} defaultValue={item.brand}/></div>
                            <div> * модель:</div><div><input type="text" ref={el=> this.model = el} defaultValue={item.model}/></div>
                            <div> * Обьем двигателя: </div><div><input type="nomber" ref={el=> this.engineVolume = el} defaultValue={item.engineVolume}/></div>
                            <div>* Цена:</div>
                            <div> <input type="number" ref={el=> this.price = el} defaultValue={item.price}/>
                                <select ref={el=> this.money = el} defaultValue={item.money}>
                                    <option value="$ USD">$ USD</option>
                                    <option value="₴ UAH">₴ UAH</option>
                                    <option value="€ EUR">€ EUR</option>
                                </select>
                            </div>
                            <div>* коробка :</div>
                            <div>
                                <select name="transmishion" ref={el=> this.transmishion = el} defaultValue={item.transmishion}>
                                    <option value="Автомат">Автомат</option>
                                    <option value="Механника">Механника</option>
                                    <option value="Полу-автомат">Полу-автомат</option>
                                    <option value="Робот">Робот</option>
                                </select>
                            </div>
                            <div> * Цвет Авто:</div><div> <input type="text" ref={el=> this.color = el} defaultValue={item.color}/></div>
                            <div> * Статус:</div>
                            <div>
                                <select name="status"  ref={el=> this.status = el} defaultValue={item.status}>
                                    <option value="Продается">Продается</option>
                                    <option value="На сервисе">На сервисе</option>
                                    <option value="В резерве">В резерве</option>
                                    <option value="После ДТП">После ДТП</option>
                                    <option value="Продан">Продан</option>
                                </select>
                            </div>
                            <div> * Описание: </div><div><input type="text" ref={el=> this.description = el} defaultValue={item.description}/></div>
                            <button type="submit">Сохранить</button>
                        </form>
                        :
                        <div className='box' key={item.id} >
                            <div className="item" > * Фото {item.images}</div>
                            <div> * id: {item.id} </div>
                            <div> * Марка: {item.brand} </div>
                            <div> * модель: {item.model }</div>
                            <div> * Обьем двигателя: {item.engineVolume}</div>
                            <div> * Цена: <FormatItem value={item.price} /> {item.money ? item.money : item.money }</div>
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


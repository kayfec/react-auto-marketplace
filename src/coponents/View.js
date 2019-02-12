import React from 'react';
import './View.css';
import { FormatItem } from './FormatItem';

export class View extends React.Component{
    render(){

        return(
            <div className='box'>
                <div class="item"><img src={require('../images/1.jpg')} alt="photo" /></div>
                <div className="mass" > будет статейка</div>
                <div className="content">
                    <div className="vision" id='firstname'>
                        <div>{this.props.item.id}</div>
                        <div>{this.props.item.brand}</div>
                        <div>{this.props.item.model}</div>
                        <div>{this.props.item.engineVolume}</div>
                        <div><FormatItem value={this.props.item.price}  /> {this.props.item.money} </div>
                        <div>{this.props.item.status}</div>
                        <div>
                            <div><button onClick={this.props.onView}>Посмотреть</button></div>
                            <div><button onClick={this.props.onChange}>Изменить</button></div>
                            <div><button onClick={this.props.onRemove}>Удалить</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
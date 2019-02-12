import React, { Component } from 'react';
import {Carousel} from './coponents/Carousel';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {User} from './coponents/User';
import {Announcement} from './coponents/Announcement';
import {AddAnnouncement} from './coponents/AddAnnouncement';
import {View} from './coponents/View'


class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      showAdd: false,
      onView: true,
      items: [],
     curentViewItem : null,
      curentEditItem : null
    };
    this.onRemove = this.onRemove.bind(this);
    this.addClick = this.addClick.bind(this);
    this.onView = this.onView.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.closeViewClick = this.closeViewClick.bind(this);
   
  }

  addClick() {
    this.setState(prevState => {
      return {
        showAdd: !prevState.showAdd
      };
    });
  }

  closeViewClick() {
    this.setState(prevState => {
      delete prevState.curentViewItem;
      return prevState;
    })
  }

  closeEditClick() {
    this.setState(prevState => {
      delete prevState.curentEditItem;
      return prevState;
    })
  }

  onAdd(item) {
    this.setState(prevState => {
      item.id = Date.now();
      prevState.items.push(item);
      prevState.showAdd = false;
      return prevState;
    });
  }

  onEdit(item) {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(i => i.id === item.id);
      prevState.items[itemIndex] = item;
      delete prevState.curentEditItem;
      return prevState;
    });
  }

  onRemove(index) {
    this.setState(prevState => {
      prevState.items.splice(index, 1);

      return {
        items: prevState.items
      };
    });
  }

  onChange(index) {
    this.setState(prevState => {
      prevState.curentEditItem = this.state.items[index];
      return prevState;
    });
  }

  onView(index) {
    this.setState(prevState => {
      prevState.curentViewItem = this.state.items[index];
      return prevState;
    });
  }
  

  
  render() {

    return (
      <Router>
        <div className="App">
          <ul className="mainMenu">
            <li><Link defaultChecked to="/home">Главнная</Link></li>
            <li><Link to="/View">Все Обьявления</Link></li>
            <li><Link to="/AddAnnouncement">Создать Обьявление</Link></li>
            <li><Link to="/Announcement">Все Авто</Link></li>
            <li><Link to="/User">Кабинет</Link></li> 
          </ul>
            
          <Switch>
            <Route path="/home" component={Carousel} />
            <Route path="/View" render={() => <View/>} />
            <Route path="/User" component={User}  />
            <Route path="/Announcement" component={Announcement}  />
            <Route path="/AddAnnouncement" render={() => <AddAnnouncement onSave={this.onAdd} onChange={this.props.handleChange} />} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

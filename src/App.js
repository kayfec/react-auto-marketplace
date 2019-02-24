import React, { Component } from 'react';
import {Home} from './coponents/Home';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import {ConnectForm} from './coponents/ConnectForm';
import {Announcement} from './coponents/Announcement';
import {AddAnnouncement} from './coponents/AddAnnouncement';
import {View} from './coponents/View'
import {RegisterForm} from "./coponents/RegisterForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdd: false,
      onView: true,
      items: [],
      users:[],
      curentViewItem : null,
      curentEditItem : null,
      editing:false
    };

    this.addClick = this.addClick.bind(this);
    this.onView = this.onView.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.closeViewClick = this.closeViewClick.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onEdit = this.onEdit.bind(this);

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

  onAdd(item) {
    this.setState(prevState => {
      item.id = Date.now();
      prevState.items.push(item);
      prevState.showAdd = false;
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

  onEdit = (data) => {
    const newItem = this.state.items.map(item => {
      if(item.id === data.id) {
        return data;
      }
      return item;
    });
    this.setState({
      items: newItem,
    });
  };

  
  render() {

    return (
        <Router>
          <div className="App">
            <ul className="mainMenu">
              <li><Link to="/">Главнная</Link></li>
              <li><Link to="/View">Все Обьявления</Link></li>
              <li><Link to="/AddAnnouncement">Создать Обьявление</Link></li>
              <li><Link to="/Announcement">Поиск Авто</Link></li>
              <li><Link to="/RegistrationForm">Кабинет</Link></li>
            </ul>

            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/home" render={() => <Home />} />
              <Route path="/View" render={() => {
                return (
                    <View
                        onEdit={this.onEdit}
                        items={this.state.items}
                        onRemove={this.onRemove}
                        onChange={this.onChange}
                    />
                )
              }}
              />
              <Route path="/RegistrationForm" render={() => <ConnectForm
                  viewInfo={this.state.curentViewItem} closeClick={this.closeViewClick}
                  render={()=><RegisterForm RegisterForm={this.props.curentViewItem} closeClick={this.closeViewClick} />}
              />}  />
              <Route path="/Announcement" render={() => <Announcement onView={this.onView} />}  />
              <Route path="/AddAnnouncement" render={() => <AddAnnouncement onSave={this.onAdd} onChange={this.props.handleChange} item={this.state.curentEditItem} />} />
            </Switch>

          </div>
        </Router>
    );
  }
}

export default App;

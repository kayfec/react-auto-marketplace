import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

import './components/css/App.css';

import {Home} from './components/Home';
import {ConnectForm} from './components/ConnectForm';
import {Announcement} from './components/Announcement';
import {AddAnnouncement} from './components/AddAnnouncement';
import {View} from './components/View'
import {RegisterForm} from "./components/RegisterForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdd: false,
      onView: true,
      items: [],
      users:[],
      curentViewItem : null,
      curentEditItem : {},
      editing:false
    };

    // this.addClick = this.addClick.bind(this);
    this.onView = this.onView.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    // this.closeViewClick = this.closeViewClick.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onChahgeUser = this.onChahgeUser.bind(this);
  }

  // addClick() {
  //   this.setState(prevState => {
  //     return {
  //       showAdd: !prevState.showAdd
  //     };
  //   });
  // }

  // closeViewClick() {
  //   this.setState(prevState => {
  //     delete prevState.curentViewItem;
  //     return prevState;
  //   });
  // };

  onAdd(item, user) {
    this.setState(prevState => {
      item.id = Date.now();
      prevState.items.push(item);
      prevState.users.push(user);
      // prevState.showAdd = false;
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
    // this.setState({curentEditItem: this.state.items[index]})
  }

  onChahgeUser(index) {
    this.setState(prevState => {
      prevState.curentEditItem = this.state.users[index];
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
            <ul className="main-menu">
              <img className='ico' src={require("./images/favicon.ico")}/>
              <li className="home"><Link to="/"> Главнная</Link></li>
              <li><a href="javascript:void 0" className="submenu-link">Все Обьявления</a>
                <ul className="submenu">
                  <li><Link to="/addAnnouncement">Создать Обьявление</Link></li>
                  <li><Link to="/view">Все Авто</Link></li>
                  <li><Link to="/announcement">поиск авто по пар-м</Link></li>
                </ul>
              </li>

              <li> <a href="javascript:void 0" className="submenu-link">Партнёры</a>
                <ul className="submenu">
                  <li><a href="https://allcars.com/">allCars</a></li>
                  <li><a href="https://auto.ria.com/">Auto Ria</a></li>
                  <li><a href="http://www.bosch-car-service.com.ua">Сервис Авто Bosch</a></li>
                </ul>
              </li>

              <li> <a href="javascript:void 0" className="submenu-link">Кабинет</a>
                <ul className="submenu">
                <li><Link to="/registerAccount">Создать анкету</Link></li>
                <li><a href="javascript:void 0">просотреть мои обьявления</a></li>
                <li><Link to="/connectForm">Кабинет</Link></li>
                </ul>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Router path="/registerAccount" render={() => <RegisterForm onClick={this.onChange} />} />
              <Route path="/view" render={() => {
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
              <Route path="/connectForm" render={() => <ConnectForm
                  viewInfo={this.state.curentViewItem} closeClick={this.closeViewClick}
                  render={()=>
                      <RegisterForm RegisterForm={this.props.curentViewItem}
                                    onChangeUser={this.props.handleChange}
                                    closeClick={this.closeViewClick}
                                    onSave={this.onAdd}
                                    user = {this.state.curentEditItem}
                      />}
              />}  />
              <Route path="/announcement" render={() => <Announcement onView={this.onView} />}  />
              <Route path="/addAnnouncement" render={() => <AddAnnouncement onSave={this.onAdd} onChange={this.props.handleChange} item={this.state.curentEditItem} />} />
            </Switch>

          </div>
        </Router>
    );
  }
}

export default App;

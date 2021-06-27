import React, { Component } from 'react';
import BoardTemplate from './Board/BoardTemplate';
import BoardItemList from './Board/BoardItemList';
import Form from './Board/Form';
import Board from './Board/Board';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideBar from "./SideBar/SideBarTemplate";

class App extends Component {
  render() {
    return (
      <SideBar/>
      

    );
  }
}

export default App;
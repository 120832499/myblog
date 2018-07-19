import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from "./component/nav/nav.js";
import Experience from './component/experience/experience.js';
import Home from './component/home/home.js';
import LeaveWord from './component/leaveWord/leaveWord.js';
import My from './component/my/my.js';
import Technique from './component/technique/technique.js';
import Content from './component/content/content.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="typePage">
            <Nav className="Nav"></Nav>
            <Route exact path="/" component={Home}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/leaveWord" component={LeaveWord}/>
            <Route path="/my" component={My}/> 
            <Route path="/technique" component={Technique}/>
            <Route path="/content" component={Content}/>
       </div>
      </div>
    );
  }
}

export default App;

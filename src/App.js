import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ManagePage}/>
            <Route path="/preview-shows" component={PreviewPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

class App extends Component {
  state = {
    show: {
        name: '',
        rating: '',
        url: ''
    }
  }

  renderManagePage = () => {
    return (<ManagePage show={this.state.show} showDeleted={this.showDeleted} saveShow={this.saveShow}/>)
  }

  renderPreviewPage = () => {
    return (<PreviewPage show={this.state.show} />)
  }

  showDeleted = () => {
    this.setState({
      show: {
        name: '',
        rating: '',
        url: ''
      }
    })
  }

  saveShow = (showToSave) => {
    this.setState({
      show: {
        name: showToSave.name,
        rating: showToSave.rating,
        url: showToSave.url
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={this.renderManagePage}/>
            <Route path="/preview-shows" component={this.renderPreviewPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App

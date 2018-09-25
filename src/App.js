import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'


// set prev state
// pass to manage page
// 

class App extends Component {
  state = {
    tvShows: [],
    show: {
      name: '',
      rating: '',
      url: ''
    }
  }

  renderManagePage = () => {
    return (<ManagePage tvShows={this.state.tvShows} show={this.state.show} showDeleted={this.showDeleted} saveShow={this.saveShow} />)
  }

  renderPreviewPage = () => {
    return (<PreviewPage tvShows={this.state.tvShows} show={this.state.show} />)
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
    this.setState(
      (prevState) => ({
        tvShows: [...prevState.tvShows, {
          name: showToSave.name,
          rating: showToSave.rating,
          url: showToSave.url
        }]
      })
    )
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={this.renderManagePage} />
            <Route path="/preview-shows" component={this.renderPreviewPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App

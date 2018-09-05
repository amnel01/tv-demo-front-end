import React, { Component, Fragment } from 'react'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'

class ManagePage extends Component {
    state = {
        nameInProgress: '',
        ratingInProgress: '',
        urlInProgress: '',
        show: {
            name: '',
            rating: '',
            url: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            nameInProgress: event.target.value
        })
    }
 
    handleRatingChange = (event) => {
        this.setState({
            ratingInProgress: event.target.value
        })
    }
    
    handleUrlChange = (event) => {
        this.setState({
            urlInProgress: event.target.value
        })
    }
    
    showSelected = () => {
        console.log("showSelected")
        this.setState({
            nameInProgress: this.state.show.name,
            ratingInProgress: this.state.show.rating,
            urlInProgress: this.state.show.url,
        })
    }
    
    showDeleted = () => {
        console.log("showDeleted")
        this.setState({
            show: {
                name: '',
                rating: '',
                url: ''
            }
        })
    }
    
    saveShow = () => {
        // console.log("saveShow")
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: '',
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                url: this.state.urlInProgress
            }
        })
    }

    renderShows = () => {
        return (
            <Fragment>
                <TVShow name={this.state.show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted}/>
            </Fragment>
        )
    }
    
    render() {
        return (
            <div>
                <header>
                    <NavSite/>
                </header>
                <main>
                    <section className="sidebar-nav">
                        <h3>Show Titles</h3>
                        <ul>
                            <li>
                                {this.renderShows()}
                            </li>
                        </ul>
                    </section>
                    <section className="show-form">
                        <h4>Create/Edit Show</h4>
                        <div>
                            <ul>
                                <li>
                                    <label>Show Name:</label>
                                    <input type="text" value={this.state.nameInProgress} onChange={this.handleNameChange}/>
                                </li>

                                <li>
                                    <label>Rating:</label>
                                    <input type="text" value={this.state.ratingInProgress} onChange={this.handleRatingChange}/>
                                </li>
                                <li>
                                    <label>Image URL:</label>
                                    <input type="text" value={this.state.urlInProgress} onChange={this.handleUrlChange}/>
                                </li>
                                <li>
                                    <button onClick={this.saveShow}>Submit</button>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default ManagePage
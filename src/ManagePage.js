import React, { Component } from 'react'
// import PropTypes from 'prop-types'
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

    async componentDidMount () {
        await this.getTVShows()
    }

    getTVShows = async () => {
        try {
            const getURL = 'http://localhost:3001/shows'
            const r = await fetch(getURL, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            const tvShows = await r.json()
            this.setState({tvShows})
        } catch(err) {
            return this.setState (err)
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

    }

    showDeleted = () => {
    }

    async postData () {
        try {
            const postURL = 'http://localhost:3001/shows'
            const postBody = {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.state.nameInProgress,
                        rating: this.state.ratingInProgress,
                        url: this.state.urlInProgress
                    }),
                    headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }
            }
            const r = await fetch(postURL, postBody)
            const body = await r.json()
            if (r.status !== 200) {
                const errMessage = body.details.map(item => item.message).join(', ')
                throw new Error(errMessage)
            }
            
            await this.getTVShows()
        } catch(err) {
            return this.setState({message: err.message})
        }
    }

    showPostErrorMessage = () => {
        if (this.state.message) {
            return this.state.message
        }
    }

    clearShowForm () {
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: '',
        })
    }

    saveShow = () => {
        this.postData()
        this.clearShowForm()
    }

    renderShows = () => {
        if (this.state.tvShows)
        return this.state.tvShows.map((show, i) => {
            return (
                <TVShow key={i} name={show.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
                )
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <header>
                    <NavSite />
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
                        {this.showPostErrorMessage()}
                        <div>
                            <ul>
                                <li>
                                    <label>Show Name:</label>
                                    <input type="text" value={this.state.nameInProgress} onChange={this.handleNameChange} />
                                </li>

                                <li>
                                    <label>Rating:</label>
                                    <input type="text" value={this.state.ratingInProgress} onChange={this.handleRatingChange} />
                                 </li>
                                <li>
                                    <label>Image URL:</label>
                                    <input type="text" value={this.state.urlInProgress} onChange={this.handleUrlChange} />
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
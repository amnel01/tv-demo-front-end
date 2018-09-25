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

    componentDidMount () {
        const postURL = 'http://localhost:3000/shows'
        fetch(postURL, {
            headers: {'Content-Type': 'application/json'}
        }).then( (promise) => {
            console.log(promise)
        return promise.json()
        }).then((response) => {
            let res = response
            console.log(res)
            this.setState({tvShows:res})
            return res
        })
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

    saveShow = () => {
        console.log(this.state)
        const postURL = 'http://localhost:3000/shows'
        let postBody = {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        }
        fetch(postURL, postBody)
        .then((response) => {
            console.log(response)
            return response.json()
        }).then((tvShows) => {
            console.log(tvShows)
            this.setState({
                tvShows
            })
        }).catch(error => console.log(error))
    }

    renderShows = () => {
        if (this.state.tvShows)
        return this.state.tvShows.map((show, i) => {
            console.log()
            return (
                <TVShow key={i} name={show.nameInProgress} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
            )
        }
        )
    }

    render() {
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
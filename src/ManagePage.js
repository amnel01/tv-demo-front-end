import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'

class ManagePage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired,
        showDeleted: PropTypes.func.isRequired,
        tvShows: PropTypes.array.isRequired
    }

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        urlInProgress: '',
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
        this.setState({
            nameInProgress: this.props.show.name,
            ratingInProgress: this.props.show.rating,
            urlInProgress: this.props.show.url,
        })
    }

    showDeleted = () => {
        this.props.showDeleted()
    }

    saveShow = () => {
        this.props.saveShow({
            name: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            url: this.state.urlInProgress
        })

        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: '',
        })
    }

    renderShows = () => {
        const showsToRender = []
        // console.log(this.props.tvShows)
        for (const tvShow of this.props.tvShows) {
            // console.log(this.props.tvShow)
            showsToRender.push(
                <TVShow key={tvShow.name} name={tvShow.name} allowDelete={true} selectHandler={this.showSelected} deleteHandler={this.showDeleted} />
            )
        }
        
        return showsToRender
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
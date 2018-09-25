import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'


class PreviewPage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired,
        tvShows: PropTypes.array.isRequired
    }

    state = {
        show: {
            name: '',
            rating: '',
            url: ''
        }
      }

    showSelected = () => {
        this.setState({
            show: {
              name: this.props.show.name,
              rating: this.props.show.rating,
              url: this.props.show.url
            }
          })
    }

    renderTVShows = () => {
        const filteredTVShows = this.props.tvShows.filter((show) => {
            return show.rating < 10
        })
        return filteredTVShows.map((show, i) => {
            console.log("tvShow" + show.name + " || ")
            return (
                <TVShow key={i} name={show.name} allowDelete={false} selectHandler={this.showSelected}/>
            )
        })
    }

    calculateAvgRating = () => {
        if (this.props.tvShows.length < 2) {
            return 0
        }
        const sumOfRatings = this.props.tvShows.reduce(
            (prevValue, curValue, i) => {
                console.log(i, curValue, prevValue)
                return (prevValue.rating || prevValue) + curValue.rating
            }
        )
        console.log(sumOfRatings)
        const avgRating = sumOfRatings / this.props.tvShows.length
        console.log(avgRating)
        return Math.round(avgRating * 10) / 10
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
                        <h4>Avg Rating: {this.calculateAvgRating()}</h4>
                        <ul>
                            <li>
                                {this.renderTVShows()}
                                {/* <TVShow name={this.props.show.name} allowDelete={false} selectHandler={this.showSelected}/> */}
                            </li>
                        </ul>
                    </section>
                    <section className="show-preview">
                        <div>
                            <h4>{this.state.show.name}</h4>
                            <h4>{this.state.show.rating}</h4>
                        </div>
                        <div>
                            <img src={this.state.show.url} alt="Preview of TV Show" height="600px"/>
                        </div>
                    </section>
                </main>
                
                
            </div>
        )
    }
}

export default PreviewPage
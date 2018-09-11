import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'


class PreviewPage extends Component {
    static propTypes = {
        show: PropTypes.object.isRequired
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
                                <TVShow name={this.props.show.name} allowDelete={false} selectHandler={this.showSelected}/>
                            </li>
                        </ul>
                    </section>
                    <section className="show-preview">
                        <div>
                            <h4>{this.state.show.name}</h4>
                            <h4>{this.state.show.rating}</h4>
                        </div>
                        <div>
                            <img src={this.state.show.url} alt="Preview Image" height="600px"/>
                        </div>
                    </section>
                </main>
                
                
            </div>
        )
    }
}

export default PreviewPage
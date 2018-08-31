import React, { Component } from 'react'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'

class PreviewPage extends Component {
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
                                <TVShow name="Stranger Things" allowDelete={false}/>
                            </li>
                        </ul>
                    </section>
                    <section className="show-preview">
                        <div>
                            <h4>Show Name</h4>
                            <h4>Rating</h4>
                        </div>
                        <div>
                            <img src="/show1.jpg" height="600px"/>
                        </div>
                    </section>
                </main>
                
                
            </div>
        )
    }
}

export default PreviewPage
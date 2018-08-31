import React, { Component } from 'react'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'

class ManagePage extends Component {
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
                                <TVShow name="Stranger Things" allowDelete={true}/>
                            </li>
                        </ul>
                    </section>
                    <section className="show-form">
                        <h4>Create/Edit Show</h4>
                        <div>
                            <ul>
                                <li>
                                    <label>Show Name:</label>
                                    <input type="text" required/>
                                </li>

                                <li>
                                    <label>Rating:</label>
                                    <input type="text" required/>
                                </li>
                                <li>
                                    <label>Image URL:</label>
                                    <input type="text" required/>
                                </li>
                                <li>
                                    <button onclick="clickedSubmit()">Create/Edit</button>
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
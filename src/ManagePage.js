import React, { Component } from 'react'
import './App.css'
import NavSite from './NavSite'
import TVShow from './TVShow'

class ManagePage extends Component {
    showSelected = () => {
        console.log("showSelected")
    }
    
    showDeleted = () => {
        console.log("showDeleted")
    }
    
    saveShow = () => {
        console.log("saveShow")
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
                                <TVShow selectHandler={this.showSelected} deleteHandler={this.showDeleted} name="Stranger Things" allowDelete={true}/>
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
                                    <button onClick={this.saveShow}>Create/Edit</button>
                                    {/* <input type="submit" value="Create/Edit"/> */}
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
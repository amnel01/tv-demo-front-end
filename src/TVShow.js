import React, { Component } from 'react'

class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {    
            return <img src="./delete_button.png"></img> 
        }
    }
    
    render() {
        return (
            <div>
                <button>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}
export default TVShow
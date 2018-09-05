import React, { Component } from 'react'

class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {    
            // return <img src="./delete_button.png"></img> 
            return <button onClick={this.props.deleteHandler}>-</button>
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
            </div>
        )
    }



}
export default TVShow
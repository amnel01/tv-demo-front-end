import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.boolean,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler:   PropTypes.func
    }
    
    renderDelete = () => {
        if (this.props.allowDelete === true) {    
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
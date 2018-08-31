import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavSite extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Manage</Link>
                <Link to="/preview-shows">Preview</Link>
            </nav>
        );
    }
}

export default NavSite
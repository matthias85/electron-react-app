import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './toolbar.pcss'

class Toolbar extends Component {
    render() {
        return (
            <div className='toolbar'>
                <ul className='toolbar_nav'>
                    <li className='toolbar_navItem'>/Home</li>
                    <li className='toolbar_navItem'>/List</li>
                    <li className='toolbar_navItem'>/Options</li>
                </ul>
            </div>
        )
    }
}

Toolbar.propTypes = {
    id: PropTypes.string
};

export default Toolbar;

import React from 'react'
import { render } from 'react-dom'

// Import some styles
import './app.css'

import Toolbar from './components/toolbar/toolbar';


// Create main App component
class App extends React.Component {
    render() {
        return (
            <div>
                <Toolbar />
                <h1>Hello, this is your first Electron app!</h1>

                <p>I hope you enjoy using this electron react app.</p>
            </div>
        )
    }
}

// Render the application into the DOM, the div inside index.html
render(<App />, document.getElementById('root'));

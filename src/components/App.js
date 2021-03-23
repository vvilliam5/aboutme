import React, { Component } from 'react';

import Landing from './Landing';
import Projects from './Projects'
import Resume from './Resume';
import '../css/main.css';

class App extends Component {
    render() {
        return (
            <div className="ui fluid container">
                <Landing />
                <Projects />
                <Resume />
            </div>
        )
    }
}
export default App;
import React from 'react';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/App.css';
import logo from '../logo.png';
import Home from './Home';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="content-header">
                    <img className="u-pull-left" src={logo} /><h2>React Numerologist</h2>
                </div>
                <div className="content">
                    {this.props.children || <Home/>}
                </div>
            </div>
        );
    }
}

export default App;
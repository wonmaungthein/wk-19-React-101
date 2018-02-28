import React from 'react';
import {Component} from 'react';
import logo from '../../src/logo.svg';

class Logo extends Component {
    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        )   
    }
}

export default Logo;
import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './application/App';

class IWasHere extends Component {
    render() {
        return (
            <App/>
        );
    }
}


AppRegistry.registerComponent('IWasHere', () => IWasHere);
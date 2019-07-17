import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Navigation from './mainNavigator';


export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    )
  }
}



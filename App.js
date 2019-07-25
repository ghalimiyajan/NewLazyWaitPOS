import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Navigation from './mainNavigator';
const online = '#8EDF88';


export default class App extends React.Component {
  render() {
    return (
      <Navigation online={online} />
    )
  }
}



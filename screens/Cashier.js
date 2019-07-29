import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Sidebar from '../Sidebar';
export default class CashierSettings extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View>
          <Sidebar />
        </View>
        <View>

        </View>
        <Text> CashierSettings </Text>
      </View>
    );
  }
}

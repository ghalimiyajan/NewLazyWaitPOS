import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import Sidebar from '../component/Sidebar';
import Categories from '../component/Categories';
import Products from '../component/Products';
import nav from '../jsons/nav_bar';

import styles from '../style/styleSheet';
import { Icon } from 'expo';
import storeInfo from '../jsons/storeinfo';
import Dictionary from '../services/dictionary';

let lan = 'ar';

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
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View>
          <Sidebar  nav={nav.nav} />
        </View>
        <View style={{ flex: 0.6 }}>
          <Categories />
          <Products />
        </View>
        <View style={{ felx: 1, backgroundColor: '#E4E4E4', flex: 0.4, margin: 2, borderRadius: 16 }}>

          <View style={[styles.selectButton, { flexDirection: 'row', margin: 2 }]}>
            <View>
              <Text>
                Order Type
              </Text>
            </View>
            <View>
              <Text>
                Order Type
              </Text>
            </View>
            <View>
              <Text>
                Order Type
              </Text>
            </View>
            <View>
              <Text>
                Order Type
              </Text>
            </View>
            <View>
              <Text>
                Order Type
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: 2 }}>
              <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.flexTextInput]} placeholder={Dictionary.PHONE_NUMBER[lan]} />
            </View>
            <View style={{ flex: 1, margin: 2 }}>
              <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.flexTextInput]} placeholder={Dictionary.NAME[lan]} />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, margin: 2 }}>
              <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.flexTextInput]} placeholder={Dictionary.PHONE_NUMBER[lan]} />
            </View>
          </View>

          <View style={{ felx: 1, backgroundColor: 'white', margin: 6, borderRadius: 16, }}>
            <View style={{ backgroundColor: '#F3F3F3', padding: 10, flexDirection: 'row', borderTopRightRadius: 16, borderTopLeftRadius: 16 }}>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
            </View>

            <View style={{ backgroundColor: 'white', padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
              <View style={{ flex: 3 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
            </View>

            <View style={{ backgroundColor: 'white', padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
              <View style={{ flex: 3 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {Dictionary.NAME[lan]}
                </Text>
              </View>
            </View>

          </View>

        </View>
      </View >
    );
  }
}

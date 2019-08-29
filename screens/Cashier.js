import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, TextInput, Picker } from 'react-native';
import CashierNav from '../component/CashierNav';
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
          <CashierNav nav={nav.nav} />
        </View>
        <View style={{ flex: 0.6 }}>
          <Categories />
          <Products />
        </View>
        <View style={{ felx: 1, backgroundColor: '#E4E4E4', flex: 0.4, margin: 2, borderRadius: 16 }}>
          <View style={{ flex: 0.9, padding: 10 }}>
            <View style={[styles.selectButton, { flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginBottom: 5 }]}>
              <View style={{ flex: 1 }}>
                <Picker
                  style={{ width: '100%' }}
                  selectedValue={this.state}
                  onValueChange={(lang) => this.setState({ language: lang })}>
                  <Picker.Item label={Dictionary.DELIVERY[lan]} value="" />
                  <Picker.Item label={Dictionary.TABLE[lan]} value="" />
                  <Picker.Item label={Dictionary.PICKUP[lan]} value="" />
                </Picker>
              </View>
              <View style={{ flex: 1 }}>
                <Picker
                  style={{ width: '100%' }}
                  selectedValue={this.state}
                  onValueChange={(lang) => this.setState({ language: lang })}>
                  <Picker.Item label={Dictionary.DELIVERED[lan]} value="java" />
                  <Picker.Item label={Dictionary.READY[lan]} value="js" />
                </Picker>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <View style={{ flex: 1, marginRight: 3 }}>
                <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.flexTextInput]} placeholder={Dictionary.PHONE_NUMBER[lan]} />
              </View>
              <View style={{ flex: 1, marginLeft: 3 }}>
                <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.flexTextInput]} placeholder={Dictionary.NAME[lan]} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <View style={{ flex: 1 }}>
                <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.flexTextInput]} placeholder={Dictionary.NOTES[lan]} />
              </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 16, borderTopLeftRadius: 16, }}>

              <View style={{ felx: 1 }}>
                <View style={{ backgroundColor: '#F3F3F3', padding: 10, flexDirection: 'row', borderTopRightRadius: 16, borderTopLeftRadius: 16 }}>
                  <View style={{ flex: 3, alignItems: 'flex-start' }}>
                    <Text>
                      {Dictionary.NAME[lan]}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>
                      {Dictionary.QUANTITY[lan]}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>
                      {Dictionary.EACH[lan]}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>
                      {Dictionary.TOTAL[lan]}
                    </Text>
                  </View>
                </View>
                <ScrollView>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Burger
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        5
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        10
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        50
                  </Text>
                    </View>
                  </View>

                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10, flexDirection: 'row', borderBottomWidth: 1 }}>
                    <View style={{ flex: 3, alignItems: 'flex-start' }}>
                      <Text>
                        Beef
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        2
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        15
                  </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>
                        30
                  </Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 3, borderBottomRightRadius: 16, borderBottomLeftRadius: 16, }}>
              <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{Dictionary.SUBTOTAL[lan]}</Text>
                  <Text>123</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{Dictionary.DISCOUNT[lan]}</Text>
                  <Text>123</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{Dictionary.VAT[lan]}</Text>
                  <Text>123</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{Dictionary.TOTAL[lan]}</Text>
                  <Text>123</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{Dictionary.RECEIVED[lan]}</Text>
                  <Text>123</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{Dictionary.BALANCE_DUE[lan]}</Text>
                  <Text>123</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ flexDirection: 'row', flex: 0.1 }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: '#C4C4C4', borderBottomLeftRadius: 16, justifyContent: 'center' }}>
                <Text style={{ justifyContent: 'flex-end', color: '#fff', textAlign: 'center' }}>{Dictionary.PAY_ORDER[lan]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 2 }}>
              <View style={{ flex: 1, backgroundColor: '#3FAEA3', borderBottomRightRadius: 16, justifyContent: 'center' }}>
                <Text style={{ justifyContent: 'flex-end', color: '#fff', textAlign: 'center' }}>{Dictionary.SAVE_ORDER[lan]}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>

        {/* <View style={{ flex: 1, width: '100%', heigth: '100%', position: 'absolute', backgroundColor: 'black' }}>
          <TouchableOpacity>
            <View style={styles.cashierBoxes}>
              <View style={{ flex: 2 }}></View>
              <ScrollView style={styles.cashierBoxesText}>
                <Text style={{ fontSize: 10, textAlign: 'center', color: 'white' }}>Soft Drink (2.5 RS) (50 RS) (10 RS)</Text>
              </ScrollView>
            </View>
          </TouchableOpacity>
        </View > */}

      </View >
    );
  }
}

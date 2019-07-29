import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch } from 'react-native';

// ***************************Pages***********************//
import noticeBoard from '../jsons/ojb';
import storeInfo from '../jsons/storeinfo';
// import settingsNav from '../settingsNav';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';

// ************************Libraries*********************//
import { Icon, ImagePicker, Permissions } from 'expo';
import base64 from 'react-native-base64'
import Sidebar from '../component/Sidebar';


let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';


export default class CashierSettings extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      VAT: '10%',
      currencyAR: 'ر.س',
      currencyEN: 'SAR', 
      smsReadyText:'',
    };
  }

  render() {
    return (
      <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', }]}>
        <Sidebar navigationVariable={this} />


        <View style={{ flex: 0.6, }}>
          <View style={{ flex: 1, }}>
            {/* ************************************************Header************************************************* */}
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
              <Text style={styles.title}>Lazywait</Text>
              <View style={{ backgroundColor: online, height: 10, width: 10, borderRadius: 100, margin: '2%' }} />

            </View>

            {/* ************************************************left top************************************************* */}
            <View style={{ flex: 0.45, padding: '5%', margin: '2%', backgroundColor: '#ffff', borderRadius: 16, flexDirection: 'row', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ flex: 0.5 }}>
                <Text style={{ padding: '8%' }}>{Dictionary.VAT[lan]}</Text>
                <Text style={{ padding: '8%' }}>{Dictionary.PRICE_INCLUDE_TAX[lan]}</Text>
                <Text style={{ padding: '8%' }}>{Dictionary.CURRENCY_AR[lan]}</Text>
                <Text style={{ padding: '8%' }}>{Dictionary.CURRENCY_EN[lan]}</Text>
                <Text style={{ padding: '8%' }}>{Dictionary.MADA_BILL_PRINTING[lan]}</Text>
                <Text style={{ padding: '8%' }}>{Dictionary.SHOW_PRICE[lan]}</Text>
              </View>

              <View style={{ flex: 0.5, padding: '5%' }}>
                <TextInput onChangeText={Text => this.setState({ VAT: Text })} style={[styles.smallTextInput,]} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <TextInput onChangeText={Text => this.setState({ currencyAR: Text })} style={[styles.smallTextInput,]} />
                <TextInput onChangeText={Text => this.setState({ currencyEN: Text })} style={[styles.smallTextInput,]} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
              </View>


            </View>

            {/* ************************************************left Bottom************************************************* */}

            <View style={{ flex: 0.45, margin: '2%', backgroundColor: '#ffff', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ padding: '10%' }}>{Dictionary.SHOW_WITHOUT_RECEIPT_PAYMENT[lan]}</Text>
                <Text style={{ padding: '10%' }}>{Dictionary.QUICK_ITEM_ADD[lan]}</Text>
                <Text style={{ padding: '10%' }}>{Dictionary.ALLOW_DEPOSIT[lan]}</Text>
                <Text style={{ padding: '10%' }}>{Dictionary.BARCODE_VIEW[lan]}</Text>

              </View>

              <View style={{ flex: 0.1, padding: '5%' }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />

              </View>
              <View style={{ flex: 0.4 }}>
                <Text style={{ padding: '10%' }}>{Dictionary.SHOW_ALL_CATEGORY[lan]}</Text>
                <Text style={{ padding: '10%' }}>{Dictionary.ADD_ITEM_ON_TOP[lan]}</Text>
                <Text style={{ padding: '10%' }}>{Dictionary.DELIVERY_ACTIVE[lan]}</Text>
                <Text style={{ padding: '10%' }}>{Dictionary.SHOW_STOCK[lan]}</Text>
              </View>

              <View style={{ flex: 0.1, padding: '5%' }}>

                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
              </View>

            </View>

          </View>

        </View>
        <View style={{ flex: 0.5, padding: '0.5%', backgroundColor: '#fff', margin: '1%', borderRadius: 16, }}>
          <View style={{ flex: 0.2, }}>
          <Text style={{ padding: '10%' }}>{Dictionary.READY_SMS_TEXT[lan]}</Text>
          <TextInput onChangeText={Text => this.setState({ smsReadyText: Text })} style={styles.commentInput} placeholder={'The order is ready'} multiline={true}/>
          </View>
          <View style={{ flex: 0.2, }}>

          </View>
          <View style={{ flex: 0.2, }}>

          </View>
          <View style={{ flex: 0.2, }}>

          </View>




        </View>
      </View>
    );
  }
}

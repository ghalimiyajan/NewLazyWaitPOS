import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch, Modal } from 'react-native';

// ***************************Pages***********************//
import noticeBoard from '../jsons/ojb';
import storeInfo from '../jsons/storeinfo';
// import settingsNav from '../settingsNav';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';
import nav from '../jsons/nav_bar';
import cashier_settings from '../jsons/cashier_settings_info';
import Sidebar from '../component/Sidebar';
import AddActionButton from '../component/AddActionButton';
import OptionsTab from '../component/OptionsTab';

// ************************Libraries*********************//
import { Icon, ImagePicker, Permissions } from 'expo';
import base64 from 'react-native-base64'


let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';




export default class PrintOptions extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      VAT: '10%',
      currencyAR: 'ر.س',
      currencyEN: 'SAR',
      smsReadyText: '',
      orderModal: false,
      disabled: false,
      digitVal: 'Zero',
      selectGeneral: true,
      selectOrders: false,
      selectBills: false,
      selectReceipts: false,
      selectLabels: false,
    };
    // this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  setModalVisible(visible) {
    this.setState({ orderModal: visible });
  }
  // _choseItem(){
  //   this.setState({disabled:true})
  // }

  render() {
    const { selectedIndex } = this.state

    return (
      <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', paddingBottom: '2%', paddingTop: '2%' }]}>
        {/* *********************Navigation Sidebar************************** */}
        <View style={{ margin: '1%' }}>
          <Sidebar navigationVariable={this} nav={nav.nav} />
        </View>

        <View style={{ flex: 2, padding: 5, justifyContent: 'space-around' }}>
          {/* ************************************************Header************************************************* */}
          <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <Text style={styles.title}>Lazywait</Text>
            <View style={{ backgroundColor: online, height: 10, width: 10, borderRadius: 100, margin: '2%' }} />

          </View>

          {/* ******************************navigation bar******************************* */}
          <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { this.setState(selectGeneral => ({ selectGeneral: true, selectOrders: false, selectBills: false, selectReceipts: false, selectLabels: false })); this.props.navigation.navigate('PrintOptions') }} >
              <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectGeneral == true ? '#48C4B7' : '#D6D6D6', }}>
                <Text>{Dictionary.GENERAL[lan]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState(selectOrders => ({ selectOrders: true, selectGeneral: false, selectBills: false, selectReceipts: false, selectLabels: false })); this.props.navigation.navigate('PrintOptionsOrders')}}>
              <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectOrders == true ? '#48C4B7' : '#D6D6D6', }}>
                <Text>{Dictionary.ORDERS[lan]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState(selectBills => ({ selectBills: true, selectOrders: false, selectGeneral: false, selectReceipts: false, selectLabels: false }))}>
              <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectBills == true ? '#48C4B7' : '#D6D6D6', }}>
                <Text>{Dictionary.BILLS[lan]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState(selectReceipts => ({ selectReceipts: true, selectOrders: false, selectBills: false, selectGeneral: false, selectLabels: false }))}>
              <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectReceipts == true ? '#48C4B7' : '#D6D6D6', }}>
                <Text>{Dictionary.RECEIPT[lan]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState(selectLabels => ({ selectLabels: true, selectOrders: false, selectBills: false, selectGeneral: false, selectReceipts: false }))}>
              <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectLabels == true ? '#48C4B7' : '#D6D6D6', }}>
                <Text>{Dictionary.LABLES[lan]}</Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* ************************************************left top************************************************* */}
          <View style={{ flex: 0.5, backgroundColor: '#ffff', borderRadius: 16, justifyContent: 'space-around', padding: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.SAVING_PAPER[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.PRINT_INVOICE_ID[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.PRINT_ORDER_NUMBER[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.HIDE_CALORISE[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.ALWAYS_SHOW_SAVE_ONLY_BUTTON[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

          </View >

          {/* ************************************************left Bottom************************************************* */}
          <View style={{ flex: 0.4 }} />
        </View >
        {/* **************************************************Rightside****************************************************** */}
        <View style={{ flex: 1.8 }} />




      </View >
    );
  }
}

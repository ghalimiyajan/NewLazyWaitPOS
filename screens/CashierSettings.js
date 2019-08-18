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
      smsReadyText: '',
      orderModal: false,
      disabled: false,
      digitVal: 'Zero',
    };
    this.updateIndex = this.updateIndex.bind(this)
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

          {/* ************************************************left top************************************************* */}
          <View style={{ flex: 0.37, backgroundColor: '#ffff', borderRadius: 16, justifyContent: 'space-around', padding: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ flex: 1 }}>{Dictionary.VAT[lan]}</Text>
              <TextInput onChangeText={Text => this.setState({ VAT: Text })} style={[styles.smallTextInput, { flex: 1 }]} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.CURRENCY_AR[lan]}</Text>
              <TextInput onChangeText={Text => this.setState({ VAT: Text })} style={[styles.smallTextInput, { flex: 1 }]} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.CURRENCY_EN[lan]}</Text>
              <TextInput onChangeText={Text => this.setState({ VAT: Text })} style={[styles.smallTextInput, { flex: 1 }]} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.MADA_BILL_PRINTING[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1 }}>{Dictionary.SHOW_PRICE[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

          </View>

          {/* ************************************************left Bottom************************************************* */}

          <View style={{ flex: 0.48, backgroundColor: '#ffff', borderRadius: 16, justifyContent: 'space-around', padding: 20, }}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5, }}>
                <Text style={{ flex: 1, }}>{Dictionary.SHOW_WITHOUT_RECEIPT_PAYMENT[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.QUICK_ITEM_ADD[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.ALLOW_DEPOSIT[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.BARCODE_VIEW[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.SHOW_ALL_CATEGORY[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.DELIVERY_ACTIVE[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.SHOW_STOCK[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={{ flex: 1 }}>{Dictionary.ADD_ITEM_ON_TOP[lan]}</Text>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                </View>
              </View>

            </View>

          </View>
        </View>
        {/* **************************************************Rightside****************************************************** */}
        <View style={{ flex: 1, padding: '2%', backgroundColor: '#fff', borderRadius: 16, padding: 20, margin: '1%' }}>

          <View style={{}}>
            {/* Ready SMS text */}
            <View style={{ padding: 20 }}>
              <Text style={{ paddingBottom: 15 }}>{Dictionary.READY_SMS_TEXT[lan]}</Text>
              <TextInput onChangeText={Text => this.setState({ smsReadyText: Text })} style={styles.commentInput} placeholder={'The order is ready'} multiline={true} />
            </View>

            {/* Order Status */}
            <View style={{ padding: 20 }}>
              <Text style={{ paddingBottom: 15, paddingRight: 15, }}>{Dictionary.ORDER_STATUS[lan]}</Text>
              {/* ****************Plus icon to open Modal************** */}

              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <View style={[styles.square, { alignItems: 'center', justifyContent: 'center', marginLeft: 0 }]}>
                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_10, {}]} />
                  </View>
                </TouchableOpacity>

                <ScrollView horizontal >
                  {cashier_settings.order_status.map((item, key) =>
                    (
                      <View style={[styles.square]}>
                        <Text>{item.name[lan]}</Text>
                      </View>
                    )
                  )
                  }
                </ScrollView>
              </View>


            </View>


            {/* Rounding order total */}
            <View style={{ padding: 20 }}>
              <Text style={{ paddingBottom: 15 }}>{Dictionary.ROUNDING_ORDER_TOTAL[lan]}</Text>
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => this.setState({ digitVal: 'zero' })}>
                  <View style={{ padding: 10, borderRadius: 16, marginHorizontal: 3, backgroundColor: this.state.digitVal == "Zero" ? "#48C4B7" : '#fffff' }}>
                    <Text>{Dictionary.ZERO_DIGITS[lan]}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ digitVal: 'One' })}>
                  <View style={{ padding: 10, borderRadius: 16, marginHorizontal: 3, backgroundColor: this.state.digitVal == "One" ? "#48C4B7" : '#fffff' }}>
                    <Text>{Dictionary.ONE_DIGITS[lan]}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ digitVal: 'Two' })}>
                  <View style={{ padding: 10, borderRadius: 16, marginHorizontal: 3,  backgroundColor: this.state.digitVal == "Two" ? "#48C4B7" : '#fffff' }}>
                    <Text>{Dictionary.TWO_DIGITS[lan]}</Text>
                  </View>
                </TouchableOpacity>
            
              </View>
            </View>
          </View>
          {/* switches */}

          <View style={{ justifyContent: 'space-around', padding: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 15 }}>
              <Text style={{ flex: 1 }}>{Dictionary.FLEXIBLE_PRICE[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 15 }}>
              <Text style={{ flex: 1 }}>{Dictionary.EMAIL_ADMIN_WHEN_VOIDING_ORDER[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 15 }}>
              <Text style={{ flex: 1 }}>{Dictionary.MISSING_NAME_ALERT[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 15 }}>
              <Text style={{ flex: 1 }}>{Dictionary.HIDE_CLOSING_STATE[lan]}</Text>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
              </View>

            </View>

          </View>


          {/* ********************************Order Status Modal************************ */}
          <Modal
            transparent={true}
            visible={this.state.orderModal}

          >
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <TouchableOpacity onPress={() => {
                this.setModalVisible(!this.state.orderModal);
              }}
                style={{ flex: 1, width: '100%', height: '100%', position: 'absolute' }}
              />
              <View style={{
                backgroundColor: '#ffffffff',
                width: '40%',
                height: '70%',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                position: 'absolute',
                flex: 1,
                borderRadius: 16,
              }}>
                <View style={{ flex: 0.4, backgroundColor: '#ffff', borderRadius: 16, padding: 20, justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ flex: 1 }}>{Dictionary.NAME_AR[lan]}</Text>
                    <TextInput onChangeText={Text => this.setState({ VAT: Text })} style={[styles.smallTextInput, { flex: 1 }]} />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ flex: 1 }}>{Dictionary.NAME_EN[lan]}</Text>
                    <TextInput onChangeText={Text => this.setState({ VAT: Text })} style={[styles.smallTextInput, { flex: 1 }]} />
                  </View>



                  {/* 
                  <View style={{ flexDirection: 'row', }}>
                    <Text style={{ padding: '5%' }}>{Dictionary.NAME_AR[lan]}</Text>
                    <TextInput style={[styles.smallTextInput,]} />

                  </View>
                  <View style={{ flexDirection: 'row', }}>
                    <Text style={{ padding: '5%' }}>{Dictionary.NAME_EN[lan]}</Text>
                    <TextInput style={[styles.smallTextInput,]} />
                  </View> */}
                </View>
                <View style={{ flex: 0.5 }}>

                </View>

                {/* ***********************Add button inside modal************** */}
                <AddActionButton />
              </View>
            </View>
          </Modal>

        </View>
      </View>
    );
  }
}

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';

/*************************************** Library ********************************************/
import Swiper from 'react-native-swiper';
import { Icon } from 'expo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
/*************************************** Pages ********************************************/
import noticeBoard from '../ojb';
import storeInfo from '../storeinfo';
import Dictionary from '../dictionary';
import styles from '../style/styleSheet';
/*************************************** Variables ********************************************/
const color1 = "#707070";
let pass = "1234";
let version = ' V3.4.2';
const online = '#8EDF88';
const offline = '#8EDF88';


export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    name: 'ghali',
    Screens: [1, 2, 3, 45],
    enterdPass: '',
  };
  _renderItem = item => {
    console.log(item)
    return (

      <View>
        <View style={{ alignItems: 'center', padding: hp('1%'), justifyContent: 'center' }}>
          <Text style={[styles.title, { color: color1 }]}>{noticeBoard.title[lan]}</Text>
        </View>
        <ScrollView style={{ backgroundColor: '#F8F8F8', height: hp('60%'), width: wp('32%'), padding: hp('1%'), borderRadius: 16 }}>
          <Text style={[styles.plustitle, { fontWeight: 'bold' }]}>{noticeBoard.day[lan]}</Text>
          <View>
            <Text style={[styles.subTitle, { color: '#C4C4C4' }]}>{noticeBoard.Month[lan]}</Text>
          </View>
          <View>
            <Text style={[styles.subTitle, { color: '#D92E28' }]}>{noticeBoard.tag[lan]}</Text>
          </View>
          <View>
            <Text style={[styles.subTitle, { color: '#48C4B7' }]}>{item.title[lan]}:</Text>
          </View>
          <View>
            <Text style={styles.text}>- {item.detail[lan]}</Text>
          </View>
        </ScrollView>
      </View>


    )
  }

  _getPass = val => {
    var ep = this.state.enterdPass;
    ep = ep + val;
    console.log(ep)
    if (ep.length.toString() == 4) {
      console.log(ep + "*********" + pass)
      if (ep == pass) {
        alert("Welocome")
        this.props.navigation.navigate('Dashboard')

      } else {
        alert("No way");
        ep = '';
      }
    }
    this.setState({ enterdPass: ep });

  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        {/* ******************************************************Backgrounds**************************************************************** */}
        <View style={styles.loginLeftSideBackground} />
        <View style={styles.loginRightSideBackground} />
        {/* ***************************************************Store Information************************************************************** */}
        <View style={{ alignSelf: 'center', zIndex: 2, flexDirection: 'row', position: 'absolute', paddingTop: '10%' }}>
          <View style={{ backgroundColor: '#E6E6E6', borderRadius: 100, height: wp('6%'), width: wp('6%') }}></View>
          <View style={{ paddingTop: '8%', paddingLeft: '3%' }}>
            <Text style={[styles.text, { color: '#464A4D', fontWeight: 'bold' }]}>{storeInfo.name}</Text>
          </View>
          <View style={{ paddingTop: '10%', paddingLeft: '3%' }}>
            <View style={{ backgroundColor: online, height: wp('1.5%'), width: wp('1.5%'), borderRadius: 100, }} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', zIndex: 2 }}>
          {/********************************************************************************* leftside **************************************************************************************/}
          <View style={{ flex: 1 }}>
            {/* **************************Menu********************************** */}
            <View style={{ flex: 0.2, padding: '2%' }}>
              <TouchableOpacity
                //   onPress={() =>}
                style={{ zIndex: 3 }}>
                <View style={{ backgroundColor: '#E6E6E6', borderRadius: 100, height: wp('5%'), width: wp('5%'), justifyContent: 'center', alignItems: 'center', marginLeft: '2%' }}>
                  <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} style={styles.menuIcon} />
                </View>
              </TouchableOpacity>
            </View>
            {/* **************************Notice Board********************************** */}
            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>

              <View
                style={styles.noticeBoard}>

                  {/* **Swiper** */}
                <Swiper height={240}

                  dot={<View style={{ backgroundColor: '#C1E5E1', height: wp('1.5%'), width: wp('1.5%'), borderRadius: 100, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                  activeDot={<View style={{ backgroundColor: '#FFFFFF', height: wp('1.5%'), width: wp('1.5%'), borderRadius: 100, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                  paginationStyle={{
                    bottom: '-8%', left: '10%', right: '10%'
                  }} loop>
                  {noticeBoard.details.map((item, key) =>
                    (
                      <View>
                        {this._renderItem(item)}
                      </View>
                    )
                  )
                  }
                </Swiper>
              </View>
            </View>
            {/* ****************************LazyWait Info ********************************* */}
            <View style={{ flex: 0.2, alignItems: 'flex-end', flexDirection: 'row', padding: '1%' }}>
              <View style={{ borderWidth: 1, height: hp('10%'), width: hp('10%'), alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderColor: color1 }}>
                <Text style={[styles.title, { color: '#484C4F' }]}>LW</Text>
              </View>
              <View style={{ alignSelf: 'center', paddingTop: '8%', paddingLeft:'3%'  }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.text, { color: '#484C4F' }]}>Lazywait POS </Text>
                  <Text style={[styles.versionNumber, { color: '#484C4F', alignSelf: 'flex-end' }]}> {version}</Text>
                </View>
                <Text style={[styles.LWinfo, { color: '#484C4F' }]}>support@cloudapps.net.sa </Text>
                <Text style={[styles.LWinfo, { color: '#484C4F' }]}>Dammam, Saudi Arabia </Text>


              </View>
            </View>

          </View>
          {/************************************************************************************** rightside *******************************************************************************************/}
          <View style={{ flex: 1 }}>
            {/* **********EMPTY View************* */}
            <View style={{ flex: 0.2 }}>
            </View>
            {/* *******************************Password View********************************* */}
            <View style={{ flex: 0.8, width: "100%", alignItems: 'center', justifyContent: 'center', }}>
              <Text style={[styles.text, { color: '#33877F', paddingBottom:'2%' }]}>{Dictionary.ADD_PIN_CODE[lan]}</Text>
              <View style={{ backgroundColor: color1, justifyContent: 'center', alignItems: 'center', borderColor: color1, width: '60%', height: '10%', borderRadius: 16, marginBottom: '2%' }} >
                <Text numberOfLines={1} style={[styles.text, { color: '#fff'}]}>{this.state.enterdPass}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this._getPass("1")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("2")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>2</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("3")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this._getPass("4")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>4</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("5")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>5</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("6")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>6</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this._getPass("7")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>7</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("8")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>8</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("9")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>9</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.setState({ enterdPass: this.state.enterdPass.slice(0, -1) })}>
                  <View style={styles.numberContainer}>
                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} style={styles.loginNumber} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("0")}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>0</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ enterdPass: ' ' })}>
                  <View style={styles.numberContainer}>
                    <Text style={styles.loginNumber}>C</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
            {/* *****************************EMPTY View****************************** */}
            <View style={{ flex: 0.2, }}>
            </View>
          </View>
        </View>
      </View >
    )
  };
}


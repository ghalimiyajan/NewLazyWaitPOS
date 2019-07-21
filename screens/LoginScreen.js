import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, ScrollView, Platform, TouchableOpacity } from 'react-native';

/*************************************** Library ********************************************/
import Swiper from "react-native-web-swiper";
import { Icon } from 'expo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
/*************************************** Pages ********************************************/
import noticeBoard from '../ojb';
import Dictionary from '../dictionary';
import styles from '../style/styleSheet';
/*************************************** Variables ********************************************/
let lan = 'en';
const color1 = "#707070";
let pass = "1234"
let version = ' V3.4.2'


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
          <Text style={[styles.title, { color: color1 }]}>{noticeBoard.title}</Text>
        </View>
        <ScrollView style={{ backgroundColor: '#F8F8F8', height: hp('60%'), width: wp('32%'), padding: hp('1%'), borderRadius: 16 }}>
          <Text style={[styles.plustitle, { fontWeight: 'bold' }]}>{noticeBoard.day}</Text>
          <View>
            <Text style={[styles.subTitle, { color: '#C4C4C4' }]}>{noticeBoard.Month}</Text>
          </View>
          <View>
            <Text style={[styles.subTitle, { color: '#D92E28' }]}>{noticeBoard.tag}</Text>
          </View>
          <View>
            <Text style={[styles.subTitle, { color: '#48C4B7' }]}>{item.title}:</Text>
          </View>
          <View>
            <Text style={styles.text}>- {item.detail}</Text>
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
        <View style={styles.loginBackground} />
        <View style={styles.loginLeftSideBackground} />
        <View style={{ flex: 1, flexDirection: 'row', zIndex: 2 }}>
          {/********************************************************************************* leftside **************************************************************************************/}
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.2, padding: '2%' }}>
              <TouchableOpacity
                //   onPress={() =>}
                style={{ zIndex: 3 }}>
                <View style={{ backgroundColor: '#E6E6E6', borderRadius: 100, height: wp('5%'), width: wp('5%'), justifyContent: 'center', alignItems: 'center', marginLeft: '2%' }}>
                  <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} style={styles.menuIcon} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>

              <View
                style={styles.noticeBoard}>
                <Swiper
                >
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
            <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginLeft: '2%' }}>
              <View style={{ borderWidth: 1, height: hp('10%'), width: hp('10%'), alignItems: 'center', justifyContent: 'center', }}>
                <Text>LW</Text>
              </View>
              <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.LWinfo} > Lazywait POS {version} </Text>
                <Text style={styles.LWinfo}> support@cloudapps.net.sa </Text>
                <Text style={styles.LWinfo}> Dammam, Saudi Arabia </Text>


              </View>
            </View>

          </View>
          {/************************************************************************************** rightside *******************************************************************************************/}
          <View style={{ flex: 1, alignItems: "center", }}>
            <View style={{ flex: 0.2 }}>
            </View>
            <View style={{ width: "50%", alignItems: "center", flex: 0.8, }}>
              <Text style={[styles.text, { color: '#33877F' }]}>{Dictionary.ADD_PIN_CODE[lan]}</Text>
              <View style={{ backgroundColor: color1, justifyContent: 'center', alignItems: 'center', borderColor: color1, width: '100%', height: '10%', borderRadius: 16 }} >

                <Text numberOfLines={1} style={[styles.text, { color: '#fff', textDecorationStyle: 'dashed' }]}>{this.state.enterdPass}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => this._getPass("1")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("2")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>2</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("3")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this._getPass("4")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>4</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("5")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>5</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("6")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>6</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this._getPass("7")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>7</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("8")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>8</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("9")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>9</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.setState({ enterdPass: this.state.enterdPass.slice(0, -1) })}>
                  <View style={styles.NumberContainer}>
                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} style={styles.LoginNumber} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getPass("0")}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>0</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ enterdPass: ' ' })}>
                  <View style={styles.NumberContainer}>
                    <Text style={styles.LoginNumber}>C</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
            <View style={{ flex: 0.2, }}>
            </View>
          </View>
        </View>
      </View >
    )
  };
}


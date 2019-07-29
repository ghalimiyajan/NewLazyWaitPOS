import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
// ***************************Pages***********************//
import noticeBoard from '../jsons/ojb';
import storeInfo from '../jsons/storeinfo';
// import settingsNav from '../settingsNav';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';
// import Sidebar from '../Sidebar';

// ************************Libraries*********************//
import { Icon, ImagePicker, Permissions } from 'expo';
import base64 from 'react-native-base64'



import Sidebar from '../component/Sidebar';
export default class CashierSettings extends React.Component {
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
      <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', }]}>
          <Sidebar/>
        <View>

        </View>
        <Text> CashierSettings </Text>
      </View>
    );
  }
}

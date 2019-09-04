import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch, Modal, Button } from 'react-native';
// ***************************Pages***********************//
import noticeBoard from '../jsons/ojb';
import storeInfo from '../jsons/storeinfo';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';
import nav from '../jsons/nav_bar';
import Sidebar from '../component/Sidebar';
import AddActionButton from '../component/AddActionButton';
import DeleteActionButton from '../component/DeleteActionButton';
import OptionsTab from '../component/OptionsTab';
import usersInfo from '../jsons/usersInfo';
import printersInfo from '../jsons/printersInfo';

// ************************Libraries*********************//
import { Icon } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';




let lan = 'ar';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class PrintersSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'Admin',
      language: 'English',
      sidebarAdd: false,
      ingrendientsModal: false,

    };
  }

  // when click on add user box
  handleClick() {
    this.setState({ sidebarAdd: true });
  }
  // when click on edit user box
  handleClick2() {
    this.setState({ sidebarAdd: false });
  }



  // Users Boxes View 
  _renderItem = item => {
    return (
      <TouchableOpacity onPress={() => this.handleClick()}>
        <View style={[styles.usersCards, { margin: 10 }]}>
          <View style={styles.greenTag}>
            <Text style={[styles.fs_7, { color: '#ffff', fontWeight: 'bold', }]}>{item.Id}</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.fs_4, { color: '#707070', flex: 1 }]}>{item.printerName}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.fs_4, { color: '#707070', flex: 1 }]}>{item.printerID}</Text>
          </View>
        </View>
      </TouchableOpacity>



    )
  }

  render() {
    let printer = [{
      value: 'main',
    }, {
      value: 'pos',
    }, {
      value: 'barcode',
    }];
    let PaperSize = [{
      value: '80mm',
    }, {
      value: '100mm',
    }, {
      value: '60mm',
    }];


    // if statment thet handel the click in edit or add users 
    const sidebarAdd = this.state.sidebarAdd;
    if (!sidebarAdd) {
      button = <AddActionButton />;

    } else {
      button = <DeleteActionButton />;

    }

    return (
      <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', }]}>
        {/* *********************Navigation Sidebar************************** */}
        <View style={{ margin: '1%' }}>
          <Sidebar navigationVariable={this} nav={nav.nav} />
        </View>
        {/* *************************************************Left Side********************************************* */}
        <View style={{ flex: 2, padding: 5, justifyContent: 'space-around' }}>
          {/* ************************************************Header************************************************* */}
          <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <Text style={styles.title}>Lazywait</Text>
            <View style={{ backgroundColor: online, height: 10, width: 10, borderRadius: 100, margin: '2%' }} />
          </View>
          {/* *************************************************Cards********************************************* */}
          <View style={{ flex: 0.9, flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* Add Printer View */}
            <TouchableOpacity onPress={() => this.handleClick2()}>
              <View style={[styles.usersCards, { justifyContent: 'center', alignItems: 'center', margin: 10 }]}>
                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_20, {}]} />
              </View>
            </TouchableOpacity>

            {/* Edit user View */}
            {printersInfo.Info.map((item, key) =>
              (
                <View>
                  {this._renderItem(item)}
                </View>
              )
            )
            }

          </View>
        </View>
        {/* ****************************************************Right Side********************************************** */}
        <View style={{ flex: 1.2, borderRadius: 16, padding: 20, }}>
          {/* *****************************sidebar ******************************************* */}

          <View style={[styles.sidebar,]}>
            <View style={{ borderBottomWidth: 2, borderBottomColor: '#4DB4AA', padding: 10, margin: 10 }}>
              <Text>{Dictionary.PRINTERS[lan]}</Text>

            </View>
            <View style={{ flex: 0.9, padding: 20, }}>


              <View style={{ flex: 1, }}>

                {/* name  */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                  <Text style={{ flex: 1 }}>{Dictionary.NAME[lan]}</Text>
                  <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                </View>
                {/* printers list */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                  <Text style={{ flex: 1 }}>{Dictionary.PRINTERS_LIST[lan]}</Text>
                  <Dropdown
                    containerStyle={{ width: '50%' }}
                    data={printer}
                    style={{ flex: 1 }}
                  />
                </View>
                {/* main terminal */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Text style={{ flex: 1 }}>{Dictionary.MAIN_TERMINAL[lan]}</Text>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                  </View>
                </View>
                {/*  Barcode Printer */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Text style={{ flex: 1 }}>{Dictionary.BARCODE_PRINTER[lan]}</Text>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                  </View>
                </View>
                {/* paper size */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                  <Text style={{ flex: 1 }}>{Dictionary.PAPER_SIZE[lan]}</Text>
                  <Dropdown
                    containerStyle={{ width: '50%' }}
                    data={PaperSize}
                    style={{ flex: 1 }}
                  />
                </View>
                <View style={{ paddingTop: 15, paddingBottom: 15, }}>
                  <Text style={{ color: '#707070', paddingBottom: 5, flexDirection: lan == 'en' ? 'row' : 'row-reverse', }}>
                    {Dictionary.MAIN_PRINTER_WARN[lan]}
                  </Text>
                  <Text style={{ color: '#707070', paddingBottom: 10, flexDirection: lan == 'en' ? 'row' : 'row-reverse', }}>
                    {Dictionary.BARCODE_PRINTER_WARN[lan]}
                  </Text>
                  <Text>

                  </Text>
                </View>
              </View>
              {/* test printer */}
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#59C9BF', height: 50, width: 150, borderRadius: 40, justifyContent: 'center', }}>
                    <Text style={{ color: '#fff' }}>{Dictionary.TEST_PRINTER[lan]}</Text>
                  </View>
                </TouchableOpacity>
              </View>








            </View>
            {/* Add or Delete button */}
            {button}

          </View>

        </View>


      </View>
    );
  }
}

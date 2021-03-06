import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch, Modal, } from 'react-native';
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

// ************************Libraries*********************//
import { Icon } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';




let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class Terminals extends Component {
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
                        <Text style={[styles.fs_7, { color: '#ffff', fontWeight: 'bold', }]}>{item.user_Id}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.fs_4, { color: '#707070', flex: 1 }]}>{item.name}</Text>
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
        let terminals = [{
            value: 'Ruqaya',
        }, {
            value: 'Main',
        }, {
            value: 'Tap',
        }];

        // if statment thet handel the click in edit or add users 
        const sidebarAdd = this.state.sidebarAdd;
        if (!sidebarAdd) {
            button = <AddActionButton />;
            drawer =
                < View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                    <Text style={{ flex: 1 }} >{Dictionary.WHICH_TERMINAL_DRAWER[lan]}</Text>
                    <Dropdown
                        containerStyle={{ width: '50%' }}
                        data={terminals}
                        style={{ flex: 1 }}
                    />
                </View >

        } else {
            button = <DeleteActionButton />;
            drawer = null;

        }

        return (
            <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', }]}>
                {/* *********************Navigation Sidebar************************** */}
                <View style={{ margin: '1%' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#E4E4E4', justifyContent: 'center' }}>
                        {/* *****Home******* */}
                        <TouchableOpacity onPress={() => this.props.navigate('Dashboard')} style={{ marginTop: 10 }}>
                            <View style={[styles.sidebarBoxes, { alignItems: 'center', justifyContent: 'center', alignContent: 'center', }]}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} style={[styles.homeIcon, { alignSelf: 'center', }]} />
                            </View>
                        </TouchableOpacity>
                        {/* *****Empty View***** */}
                        <View style={{ marginBottom: 50 }}>

                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} >

                            <TouchableOpacity onPress={() => this.handleClick2()}>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, styles.fs_5, { textAlign: 'center' }]}>{Dictionary.ADD[lan]}</Text>
                                </View>
                            </TouchableOpacity>


                        </ScrollView>
                        {/* *************Version Number************* */}

                        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                            <Text style={styles.versionNumber}>{storeInfo.LWPOSVersion}</Text>
                        </View>
                    </View>
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

                        {/* Edit user View */}
                        {usersInfo.Info.map((item, key) =>
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

                    <View style={styles.sidebar}>
                        <View style={{ flex: 0.9, padding: 20, }}>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#4DB4AA', padding: 5 }}>
                                <Text>{Dictionary.TERMINALS[lan]}</Text>

                            </View>

                            <View style={{ flex: 1,  }}>

                                {/* name  */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* Bill printer */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.BILL_PRINTER[lan]}</Text>
                                    <Dropdown
                                        containerStyle={{ width: '50%' }}
                                        data={printer}
                                        style={{ flex: 1 }}
                                    />
                                </View>
                                {/* Receipt printer */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }} >{Dictionary.RECEIPT_PRINTER[lan]}</Text>
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
                                {/* bank pos */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.BANK_POS[lan]}</Text>
                                    <View style={{ flex: 1, justifyContent: "center" }}>
                                        <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                                    </View>
                                </View>
                                {/* has drawer*/}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.HAS_DRAWER[lan]}</Text>
                                    <View style={{ flex: 1, justifyContent: "center" }}>
                                        <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                                    </View>
                                </View>

                                {drawer}





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

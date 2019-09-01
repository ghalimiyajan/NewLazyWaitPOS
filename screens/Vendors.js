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
// ************************Libraries*********************//
import { Icon } from 'expo';
import usersInfo from '../jsons/usersInfo';



let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class Vendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: 'Admin',
            language: 'English',
            sidebarAdd: false,
            ingrendientsModal: false,
            groups1Modal: false,
            itemsModal: false,
            groups2Modal: false,
            





        };
    }
    setIngModalVisible(visible) {
        this.setState({ ingrendientsModal: visible });
    }
    setGro1ModalVisible(visible) {
        this.setState({ groups1Modal: visible });
    }
    setItemsModalVisible(visible) {
        this.setState({ itemsModal: visible });
    }
    setGro1ModalVisible(visible) {
        this.setState({ groups2Modal: visible });
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
                                <Text>{Dictionary.ADD_USER[lan]}</Text>

                            </View>

                            <View style={{ flex: 1, justifyContent: 'space-around', }}>

                                {/* name EN */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME_EN[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* name AR */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME_AR[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* phone number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.PHONE_NUMBER[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* VAT */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.VAT[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* enable Email */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.ENABLE_EMAIL[lan]}</Text>
                                    <View style={{ flex: 1, justifyContent: "center" }}>
                                        <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                                    </View>
                                </View>
                                {/* enable SMS */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.ENABLE_SMS[lan]}</Text>
                                    <View style={{ flex: 1, justifyContent: "center" }}>
                                        <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} />
                                    </View>
                                </View>
                                {/* Ingredients */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.INGREDIENTS[lan]}</Text>
                                    {/* ****************Plus icon to open Modal************** */}
                                    <View style={{ flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={() => this.setIngModalVisible(true)}>
                                            <View style={[styles.square, { alignItems: 'center', justifyContent: 'center', marginLeft: 0 }]}>
                                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_10, {}]} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Groups */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.GROUPS[lan]}</Text>
                                    {/* ****************Plus icon to open Modal************** */}
                                    <View style={{ flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={() => this.setGro1ModalVisible(true)}>
                                            <View style={[styles.square, { alignItems: 'center', justifyContent: 'center', marginLeft: 0 }]}>
                                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_10, {}]} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Items */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.ITEMS[lan]}</Text>
                                    {/* ****************Plus icon to open Modal************** */}
                                    <View style={{ flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={() => this.setItemsModalVisible(true)}>
                                            <View style={[styles.square, { alignItems: 'center', justifyContent: 'center', marginLeft: 0 }]}>
                                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_10, {}]} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* Groups */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.GROUPS[lan]}</Text>
                                    {/* ****************Plus icon to open Modal************** */}
                                    <View style={{ flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={() => this.setGro2ModalVisible(true)}>
                                            <View style={[styles.square, { alignItems: 'center', justifyContent: 'center', marginLeft: 0 }]}>
                                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_10, {}]} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>

                        </View>
                        {/* Add or Delete button */}
                        {button}

                    </View>

                </View>
                {/* ********************************Ingrendients Modal************************ */}
                <Modal
                    transparent={true}
                    visible={this.state.ingrendientsModal}

                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableOpacity onPress={() => {
                            this.setIngModalVisible(!this.state.ingrendientsModal);
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
                {/* ********************************Groups 1 Modal************************ */}
                <Modal
                    transparent={true}
                    visible={this.state.groups1Modal}

                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableOpacity onPress={() => {
                            this.setGro1ModalVisible(!this.state.groups1Modal);
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
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME_EN[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
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
                {/* ********************************Items Modal************************ */}
                <Modal
                    transparent={true}
                    visible={this.state.itemsModal}

                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableOpacity onPress={() => {
                            this.setItemsModalVisible(!this.state.itemsModal);
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
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME_EN[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
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
                {/* ********************************Groups 2 Modal************************ */}
                <Modal
                    transparent={true}
                    visible={this.state.groups2Modal}

                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableOpacity onPress={() => {
                            this.setGro2ModalVisible(!this.state.groups2Modal);
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
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME_EN[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
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
        );
    }
}

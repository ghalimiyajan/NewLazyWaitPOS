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
import { Icon, ImagePicker, Permissions } from 'expo';
import base64 from 'react-native-base64'
import { Button, ButtonGroup } from 'react-native-elements';
import usersInfo from '../jsons/usersInfo';


let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';
const component1 = () => <Text>{Dictionary.CASHIER[lan]}</Text>
const component2 = () => <Text>{Dictionary.ADMIN[lan]}</Text>
// const component3 = () => <Text>{Dictionary.ARABIC[lan]}</Text>
// const component4 = () => <Text>{Dictionary.ENGLISH[lan]}</Text>


export default class UsersSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUsersModal: false,
            editUsersModal: false,
            image: null,
            selectedIndex: 1,
        };
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    setAddModalVisible(visible) {
        this.setState({ addUsersModal: visible });
    }
    setEditModalVisible(visible) {
        this.setState({ editUsersModal: visible });
    }
    _pickImage = async () => {

        if (Platform.OS === 'ios') {
            Permissions.askAsync(Permissions.CAMERA_ROLL)
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
            base64: true,
        });

        this.setState({ image: result.cancelled ? this.state.image : result });
    };
    deleteImage() {
        this.setState({ image: null })
    }
    _renderItem = item => {
        return (
            <TouchableOpacity onPress={() => this.setEditModalVisible(true)}>
                <View style={[styles.usersCards, { margin: 10 }]}>
                    <View style={styles.greenTag}>
                        <Text style={[styles.fs_10, {color:'#ffff', flex:1}]}>{item.user_Id}</Text>
                    </View>
                    <View style={{justifyContent: 'space-around', padding:10, }}>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.fs_7, {flex:0.2}]} />
                            <Text style={[styles.fs_4, {color:'#707070', flex:1}]}>{item.name}</Text>
                        </View>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} style={[styles.fs_7, {flex:0.2}]} />
                            <Text style={[styles.fs_4, {color:'#707070',flex:1}]}>{item.phone_number}</Text>
                        </View>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} style={[styles.fs_7, {flex:0.2}]} />
                            <Text style={[styles.fs_4, {color:'#707070',flex:1,}]}>{item.Email}</Text>
                        </View>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'} style={[styles.fs_7, {flex:0.2}]} />
                            <Text style={[styles.fs_4, {color:'#707070',flex:1,}]}>{item. user_type}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>



        )
    }

    render() {
        const { image } = this.state
        let pic = image
        const buttons = [{ element: component1 }, { element: component2 },]
        const { selectedIndex } = this.state
        return (
            <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', paddingBottom: '2%', paddingTop: '2%' }]}>
                {/* *********************Navigation Sidebar************************** */}
                <View style={{ margin: '1%' }}>
                    <Sidebar navigationVariable={this} nav={nav.nav} />
                </View>
                {/* *************************************************Left Side********************************************* */}
                <View style={{ flex: 2, padding: 5, justifyContent: 'space-around' }}>
                    {/* ************************************************Header************************************************* */}
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                        <Text style={styles.title}>Lazywait</Text>
                        <View style={{ backgroundColor: online, height: 10, width: 10, borderRadius: 100, margin: '2%' }} />
                    </View>
                    {/* *************************************************Cards********************************************* */}
                    <View style={{ flex: 0.8, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* Add user View */}
                        <TouchableOpacity onPress={() => this.setAddModalVisible(true)}>
                            <View style={[styles.usersCards, { justifyContent: 'center', alignItems: 'center', margin: 10 }]}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_20, {}]} />
                            </View>
                        </TouchableOpacity>
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
                <View style={{ flex: 1, padding: '2%', borderRadius: 16, padding: 20, margin: '1%' }}>
                    {/* *****************************Add user Modal ******************************************* */}
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.addUsersModal}

                    >
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', }}>
                            <TouchableOpacity onPress={() => {
                                this.setAddModalVisible(!this.state.addUsersModal);
                            }}
                                style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', }}
                            />

                            <View style={styles.sidebar}>
                                <View style={{ flex: 0.9, padding: 20, }}>
                                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#4DB4AA', padding: 5 }}>
                                        <Text>{Dictionary.ADD_USER[lan]}</Text>
                                    </View>
                                    {/* Image picker */}

                                    <TouchableOpacity onPress={() => this._pickImage()} style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                                        <View style={[styles.imagePickerSquareView, { justifyContent: 'center', alignItems: 'center' }]}>
                                            <Image source={pic} style={styles.imagePickerSquare} />
                                            {/* <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} style={[styles.fs_30, {}]} /> */}
                                        </View>
                                    </TouchableOpacity>
                                    {/* Delete Image */}
                                    <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.deleteImage()}>
                                            <View style={styles.IconsView}>
                                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'} style={styles.trashIcon} />
                                            </View>
                                        </TouchableOpacity>
                                        {/* Search */}
                                        <TouchableOpacity >
                                            <View style={styles.IconsView}>
                                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} style={styles.trashIcon} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{ flex: 0.6, justifyContent: 'space-around', }}>
                                        {/* user type */}

                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                            <Text style={{ flex: 1 }}>{Dictionary.USER_TYPE[lan]}</Text>
                                            {/* <ButtonGroup
                                                onPress={this.updateIndex}
                                                selectedIndex={selectedIndex}
                                                buttons={buttons}
                                                containerStyle={{ borderWidth: 0, }}
                                                buttonStyle={{ borderRadius: 10, }}
                                                underlayColor={'#48C4B7'}
                                                innerBorderStyle={{ width: 0, }}
                                                selectedButtonStyle={{ backgroundColor: '#48C4B7' }}
                                                disabledSelectedStyle={{ borderColor: 'gray', borderWidth: 1 }}
                                                style={{ flex: 1 }}
                                            /> */}
                                        </View>
                                        {/* name */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                            <Text style={{ flex: 1 }}>{Dictionary.NAME[lan]}</Text>
                                            <TextInput onChangeText={text => this.setState({ businessName: text })} style={[styles.smallTextInput, { flex: 1 }]} />
                                        </View>
                                        {/* Email */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                            <Text style={{ flex: 1 }}>{Dictionary.EMAIL[lan]}</Text>
                                            <TextInput onChangeText={text => this.setState({ businessAddress: text })} style={[styles.smallTextInput, { flex: 1 }]} />
                                        </View>
                                        {/* phone number */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                            <Text style={{ flex: 1 }}>{Dictionary.PHONE_NUMBER[lan]}</Text>
                                            <TextInput onChangeText={Number => this.setState({ phoneNumber: Number })} style={[styles.smallTextInput, { flex: 1 }]} />
                                        </View>
                                        {/* Language */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                            <Text style={{ flex: 1 }}>{Dictionary.LANGUAGE[lan]}</Text>
                                            {/* <ButtonGroup
                                                onPress={this.updateIndex}
                                                selectedIndex={selectedIndex}
                                                buttons={buttons}
                                                containerStyle={{ borderWidth: 0, }}
                                                buttonStyle={{ borderRadius: 10, }}
                                                underlayColor={'#48C4B7'}
                                                innerBorderStyle={{ width: 0, }}
                                                selectedButtonStyle={{ backgroundColor: '#48C4B7' }}
                                                disabledSelectedStyle={{ borderColor: 'gray', borderWidth: 1 }}
                                                style={{ flex: 1 }}
                                            /> */}
                                        </View>

                                    </View>

                                </View>
                                <AddActionButton />





                            </View>
                        </View>
                    </Modal>
                    {/* **********************************************Edit users Modal******************************************* */}
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.editUsersModal}

                    >
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', }}>
                            <TouchableOpacity onPress={() => {
                                this.setEditModalVisible(!this.state.editUsersModal);
                            }}
                                style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', }}
                            />

                            <View style={styles.sidebar}>
                                <View style={{ flex: 0.9, padding: 20, }}>
                                </View>

                                <DeleteActionButton />





                            </View>
                        </View>
                    </Modal>
                </View>

            </View>
        );
    }
}

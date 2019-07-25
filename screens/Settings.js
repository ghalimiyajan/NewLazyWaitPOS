import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch } from 'react-native';

// ***************************Pages***********************//
import noticeBoard from '../ojb';
import storeInfo from '../storeinfo';
import settingsNav from '../settingsNav';
import Dictionary from '../dictionary';
import styles from '../style/styleSheet';
import Sidebar from '../Sidebar';

// ************************Libraries*********************//
import { Icon, ImagePicker, Permissions } from 'expo';
import base64 from 'react-native-base64'





export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };
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

    render() {
        const { image } = this.state
        let pic = image ? image : require('../assets/img/no-image.jpg')
        return (
            <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', }]}>
                <View style={{ flex: 0.11, margin: '1%', borderRadius: 16, backgroundColor: '#E4E4E4', justifyContent: 'center' }}>
                    {/* **********************************************Sidebar Navigation************************************************************** */}

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {/* *****Home******* */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <View style={[styles.sidebarBoxes, { alignItems: 'center', justifyContent: 'center', alignContent: 'center' }]}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            </View>
                        </TouchableOpacity>
                        {/* *********Nav list******* */}
                        <ScrollView showsVerticalScrollIndicator={false} showsHorizantalScrollIndicator={false} style={{ flex: 0.6, backgroundColor: 'red', }}>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>General</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-print' : 'md-print'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Printers</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Print Options</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-pricetags' : 'md-pricetags'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Discounts</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-tablet-portrait' : 'md-tablet-portrait'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Tablet Settings</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>


                        {/* *************Version Number************* */}

                        <View style={{ flex: 0.05, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[styles.versionNumber, { color: '#484C4F' }]}>{noticeBoard.VERSIONnUMBER}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 0.5, }}>
                    <View style={{ flex: 1, }}>
                        {/* ************************************************Header************************************************* */}
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={styles.title}>Lazywait</Text>

                        </View>

                        {/* ************************************************left top************************************************* */}
                        <View style={{ flex: 0.4, margin: '1%', backgroundColor: '#ffff', borderRadius: 16, alignItems: 'center', flexDirection: 'row',  }}>
                           
                                <View style={{ margin:'3%' }}>
                                    <Text style={{ padding: '8%', }}>Auto Lock</Text>
                                    <Text style={{ padding: '8%', }}>Show Tables</Text>
                                    <Text style={{ padding: '8%', }}>Cut of Time</Text>
                                    <Text style={{ padding: '8%', }}>Customize Colors</Text>
                                </View>
                                <View>
                                    <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{ margin: '1%'}} />
                                    <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{ margin: '1%'}}/>
                                    <TextInput style={{ margin: '1%', width: 100, height: 50, backgroundColor: '#F3F3F3', borderRadius: 16 }} />

                                </View>


                           
                        </View>

                        {/* ************************************************left Bottom************************************************* */}

                        <View style={{ flex: 0.45, margin: '2%', backgroundColor: '#ffff', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'pink', alignItems: 'center', }}>
                                <Text style={{ padding: '4%', }}>Business Name</Text>
                                <Text style={{ padding: '4%', }}>Business Address</Text>
                                <Text style={{ padding: '4%', }}>Phone Number</Text>
                                <Text style={{ padding: '4%', }}>VAT Number</Text>
                            </View>
                            <View style={{}}>
                                <TextInput style={styles.textInput} />
                                <TextInput style={styles.textInput} />
                                <TextInput style={styles.textInput} />
                                <TextInput style={styles.textInput} keyboardType={'numeric'} />
                            </View>

                        </View>

                    </View>

                </View>
                <View style={{ flex: 0.4, padding: '0.5%' }}>
                    <View style={{ flex: 1 }}>
                        {/* ************************************************right top************************************************* */}
                        <View style={{ margin: '2%', flex: 0.5, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}>
                            <TouchableOpacity onPress={() => this.deleteImage()}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this._pickImage()}>
                                <Image source={pic} style={styles.imagePicker} />
                            </TouchableOpacity>

                        </View>
                        {/* ************************************************right botttom************************************************* */}
                        <View style={{ margin: '2%', flex: 0.5, backgroundColor: '#ffff', padding: '5%', borderRadius: 16 }}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.lwPic}>
                                    <Text style={[styles.plustitle, { color: '#484C4F' }]}>LW</Text>
                                </View>
                                <View style={{ paddingLeft: '3%' }}>
                                    <View style={{ flexDirection: 'row', paddingTop: '2%' }}>
                                        <Text style={[styles.title, { color: '#484C4F' }]}>Lazywait POS </Text>
                                        <Text style={[styles.versionNumber, { color: '#484C4F', alignSelf: 'center' }]}> {noticeBoard.VERSIONnUMBER}</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>support@cloudapps.net.sa </Text>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>Dammam, Saudi Arabia </Text>
                                    </View>
                                    <View style={{ paddingTop: '2%' }}>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>LW.POS Version: {noticeBoard.VERSIONnUMBER} </Text>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>UUID: 3.3.3 </Text>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>TeamViewr ID:1234567 </Text>

                                    </View>
                                </View>
                            </View>

                        </View>


                    </View>


                </View>
            </View>
        );
    }
}

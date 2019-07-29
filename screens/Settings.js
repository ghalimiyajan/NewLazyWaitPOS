import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch } from 'react-native';

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
import Sidebar from '../Sidebar';


let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';




export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            businessName: '',
            businessAddress: '',
            phoneNumber: '',
            VATNumber: '',
            AutoLock: false,
            showTables: false,
            time: {
                hour: 0,
                minute: 0
            },
            cutomizeColor: {
                pallet1: '',
                pallet2: '',
                default: '',

            }
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
    autoLock() {
        this.props.navigation.navigate('Login')
    }

    render() {
        const { image } = this.state
        let pic = image ? image : require('../assets/img/no-image.jpg')
        return (
            <View style={[styles.mainBackgroundColor, { flex: 1, flexDirection: 'row', }]}>
                <Sidebar />

                <View style={{ flex: 0.6, }}>
                    <View style={{ flex: 1, }}>
                        {/* ************************************************Header************************************************* */}
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                            <Text style={styles.title}>Lazywait</Text>
                            <View style={{ backgroundColor: online, height: 10, width: 10, borderRadius: 100, margin: '2%' }} />

                        </View>

                        {/* ************************************************left top************************************************* */}
                        <View style={{ flex: 0.45, margin: '2%', backgroundColor: '#ffff', borderRadius: 16, flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ justifyContent: 'flex-start', padding: '5%', }}>
                                <Text style={{ paddingBottom: '8%', paddingTop: '8%' }}> {Dictionary.AUTO_LOCK[lan]}</Text>
                                <Text style={{ paddingBottom: '8%', paddingTop: '8%' }}>{Dictionary.SHOW_TABLES[lan]}</Text>
                                <Text style={{ paddingBottom: '8%', paddingTop: '8%' }}>{Dictionary.CUT_OF_TIME[lan]}</Text>
                                <Text style={{ paddingBottom: '8%', paddingTop: '8%' }}>{Dictionary.CUSTOMIZE_COLORS[lan]}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-start', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: '5%', paddingTop: '5%' }}>
                                    <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} onChange={this.autoLock()} />
                                    <TextInput onChangeText={time => this.setState({ time: time })} style={[styles.smallTextInput,]} />
                                </View>
                                <View style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                                    <Switch ios_backgroundColor={'#59C9BF'} trackColor={{ false: '#707070', true: '#707070' }} style={{}} />
                                </View>
                                <View style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                                    <TextInput onChangeText={time => this.setState({ time: time })} style={[styles.smallTextInput,]} />
                                </View>
                                <View style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-color-palette' : 'md-color-palette'} style={styles.colorPalette} />
                                </View>

                            </View>



                        </View>

                        {/* ************************************************left Bottom************************************************* */}

                        <View style={{ flex: 0.45, margin: '2%', backgroundColor: '#ffff', borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'flex-start', }}>
                                <Text style={{ marginBottom: '15%', marginTop: '15%' }}>{Dictionary.BUSINESS_NAME[lan]}</Text>
                                <Text style={{ marginBottom: '15%', marginTop: '15%' }}>{Dictionary.BUSINESS_ADDRESS[lan]}</Text>
                                <Text style={{ marginBottom: '15%', marginTop: '15%' }}>{Dictionary.PHONE_NUMBER[lan]}</Text>
                                <Text style={{ marginBottom: '15%', marginTop: '15%' }}>{Dictionary.VAT_NUMBER[lan]}</Text>
                            </View>
                            <View style={{}}>
                                <TextInput onChangeText={text => this.setState({ businessName: text })} style={styles.textInput} />
                                <TextInput onChangeText={text => this.setState({ businessAddress: text })} style={styles.textInput} />
                                <TextInput onChangeText={Number => this.setState({ phoneNumber: Number })} style={styles.textInput} />
                                <TextInput onChangeText={Number => this.setState({ VATNumber: Number })} style={styles.textInput} keyboardType={'numeric'} />
                            </View>

                        </View>

                    </View>

                </View>
                <View style={{ flex: 0.5, padding: '0.5%' }}>
                    <View style={{ flex: 1 }}>
                        {/* ************************************************right top************************************************* */}
                        <View style={{ margin: '2%', flex: 0.5, backgroundColor: '#ffff', justifyContent: 'center', alignItems: 'center', borderRadius: 16, }}>
                            <Text>{Dictionary.BUSINESS_LOGO[lan]}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => this.deleteImage()}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F3F3', borderRadius: 16, width: 50, height: 50 }}>
                                        <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'} style={styles.trashIcon} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this._pickImage()}>
                                    <Image source={pic} style={styles.imagePicker} />
                                </TouchableOpacity>
                            </View>

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
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>LW.POS Version: {storeInfo.LWPOSVersion} </Text>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>UUID: {storeInfo.UUID} </Text>
                                        <Text style={[styles.text, { color: '#484C4F', textAlign: 'center' }]}>TeamViewr ID:{storeInfo.TeamViewerID} </Text>

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

import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch, Modal, } from 'react-native';
import Sidebar from '../component/Sidebar';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';
import nav from '../jsons/nav_bar2';
import ProcurementsReportsInfo from '../jsons/ProcurementsReportsInfo';
import billsReportInfo from '../jsons/billsReportInfo';
import storeInfo from '../jsons/storeinfo';
import usersInfo from '../jsons/usersInfo';
import AddActionButton from '../component/AddActionButton';
import DeleteActionButton from '../component/DeleteActionButton';
import OptionsTab from '../component/OptionsTab';
// ************************Libraries*********************//
import { Icon, ImagePicker, Permissions } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';





let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class ProcurementsReports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectActive: true,
            selectReceived: false,
            modalVisible: false,

        };
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    render() {
        let vendors = [{
            value: 'Ruqaya ',
        }, {
            value: 'Ghali',
        }, {
            value: 'Feda',
        }];
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

                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'me-add'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, styles.fs_5, { textAlign: 'center' }]}>{Dictionary.ADD_PURCHASE_ORDER[lan]}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'me-add'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, styles.fs_5, { textAlign: 'center' }]}>{Dictionary.ADD_ORDER_Bill[lan]}</Text>
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
                    {/* Filter Bar */}
                    <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.setState(selectActive => ({ selectActive: true, selectReceived: false, })); }} >
                            <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectActive == true ? '#48C4B7' : '#D6D6D6', }}>
                                <Text>{Dictionary.ACTIVE_ORDERS[lan]}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setState(selectReceived => ({ selectReceived: true, selectActive: false, })); }}>
                            <View style={{ alignItems: 'center', borderBottomWidth: 3, paddingHorizontal: 25, paddingVertical: 5, borderBottomColor: this.state.selectReceived == true ? '#48C4B7' : '#D6D6D6', }}>
                                <Text>{Dictionary.RECEIVED_ORDERS[lan]}</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    {/* **********************************************Reports*************************************************** */}
                    <View style={{ flex: 0.75, backgroundColor: '#ffffff', borderRadius: 16, }}>
                        {/* ***schedule Header**** */}
                        <View style={{ backgroundColor: '#E6E6E6', flex: 0.1, borderTopLeftRadius: 16, borderTopRightRadius: 16, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 5 }}>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.ID[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.DATE[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.ORDER_ID[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.VENDOR_NAME[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.STATUS[lan]}</Text>


                        </View>
                        <View style={{ flex: 1 }}>
                            {ProcurementsReportsInfo.Procurements.map((item, key) =>
                                (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#F1F1F1', paddingVertical: 10 }}>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.ID}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.date}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.orderID}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.vendorName}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.status}</Text>

                                    </View>
                                )
                            )
                            }

                        </View>



                    </View>

                    <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'} style={[styles.fs_13, { paddingHorizontal: 10, }]} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.fs_8, { paddingHorizontal: 10, }]}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-round-forward' : 'md-arrow-round-forward'} style={[styles.fs_13, { paddingHorizontal: 10, }]} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* ****************************************************Right Side********************************************** */}
                <View style={{ flex: 1, borderRadius: 16, padding: 20, }} />
                <View style={{ flex: 0.15, alignItems: 'center', flexDirection: 'row', paddingLeft: '5%' }}>
                    <Modal
                        transparent={true}
                        visible={this.state.modalVisible}

                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                                style={{ flex: 1, width: '100%', height: '100%', position: 'absolute' }}
                            />
                            <View style={{
                                backgroundColor: '#ffffffff',
                                width: '90%',
                                height: '90%',
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
                                {/* vendors */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.SERVICE[lan]}</Text>
                                    <Dropdown
                                        containerStyle={{ width: '50%' }}
                                        data={vendors}
                                        style={{ flex: 1 }}
                                    />
                                </View>

                            </View>

                        </View>
                    </Modal>
                </View>

            </View >
        );
    }
}

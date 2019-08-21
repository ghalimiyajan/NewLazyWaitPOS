import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Image, Switch, Modal, } from 'react-native';
import Sidebar from '../component/Sidebar';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';
import nav from '../jsons/nav_bar2';
import ProcurementsReportsInfo from '../jsons/ProcurementsReportsInfo';
import billsReportInfo from '../jsons/billsReportInfo';

import AddActionButton from '../component/AddActionButton';
import DeleteActionButton from '../component/DeleteActionButton';
import OptionsTab from '../component/OptionsTab';
// ************************Libraries*********************//
import { Icon, ImagePicker, Permissions } from 'expo';
import usersInfo from '../jsons/usersInfo';




let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class ProcurementsReports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDay: true,
            selectWeek: false,
            selectMonth: false,
            selectCustom: false,
        };
    }


    render() {
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

                    {/* **********************************************Reports*************************************************** */}
                    <View style={{ flex: 0.75, backgroundColor: '#ffffff', borderRadius: 16, }}>
                        {/* ***schedule Header**** */}
                        <View style={{ backgroundColor: '#E6E6E6', flex: 0.1, borderTopLeftRadius: 16, borderTopRightRadius: 16, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 5 }}>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.ID[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.DATE[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.ORDER_ID[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.VENDOR_NAME[lan]}</Text>
                            <Text style={{ flex: 0.2, textAlign: 'center' }}>{Dictionary.AFTER_VAT[lan]}</Text>
                            
                        
                        </View>
                        <View style={{ flex: 1 }}>
                            {ProcurementsReportsInfo.Procurements.map((item, key) =>
                                (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#F1F1F1', paddingVertical: 10 }}>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.ID}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.date}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.orderID}</Text> 
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.vendorName}</Text>
                                        <Text style={{ flex: 0.2, textAlign: 'center' }}>{item.afterVAT}</Text>
                                 
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
                <View style={{ flex: 1, borderRadius: 16, padding: 20, }}>

                    <View style={[styles.whiteSidebar, { justifyContent: 'space-around' }]}>
                        {/* ******************************Filter bar******************************* */}
                        <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.setState(selectDay => ({ selectDay: true, selectWeek: false, selectMonth: false, selectCustom: false }))} >
                                <View style={{ alignItems: 'center', borderBottomWidth: 5, paddingHorizontal: 10, borderBottomColor: this.state.selectDay == true ? '#48C4B7' : '#D6D6D6', }}>
                                    <Text>{Dictionary.DAY[lan]}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState(selectWeek => ({ selectWeek: true, selectDay: false, selectMonth: false, selectCustom: false }))}>
                                <View style={{ alignItems: 'center', borderBottomWidth: 5, paddingHorizontal: 10, borderBottomColor: this.state.selectWeek == true ? '#48C4B7' : '#D6D6D6', }}>
                                    <Text>{Dictionary.WEEK[lan]}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState(selectMonth => ({ selectMonth: true, selectWeek: false, selectDay: false, selectCustom: false }))}>
                                <View style={{ alignItems: 'center', borderBottomWidth: 5, paddingHorizontal: 10, borderBottomColor: this.state.selectMonth == true ? '#48C4B7' : '#D6D6D6', }}>
                                    <Text>{Dictionary.MONTH[lan]}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState(selectCustom => ({ selectCustom: true, selectWeek: false, selectMonth: false, selectDay: false }))}>
                                <View style={{ alignItems: 'center', borderBottomWidth: 5, paddingHorizontal: 10, borderBottomColor: this.state.selectCustom == true ? '#48C4B7' : '#D6D6D6', }}>
                                    <Text>{Dictionary.CUSTOM[lan]}</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* *******************************Right Up********************************* */}
                        <View style={{ flex: 0.4, padding: 20, backgroundColor: '#ffffff', borderRadius: 16, justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[styles.fs_11, { color: '#707070' }]}>{Dictionary.ORDERS_TYPE[lan]}</Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, }}>
                                <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignItems: 'center' }}>
                                    <View style={{ flex: 0.4 }} />
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#3FAEA3', flex: 0.2 }]}>{Dictionary.PAID[lan]}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#D92E28', flex: 0.2 }]}>{Dictionary.VOID[lan]}</Text>

                                </View>
                                <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.fs_5, { fontWeight: 'bold', flex: 0.4, color: '#707070' }]}>{Dictionary.PICKUP[lan]}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#3FAEA3', flex: 0.2 }]}>{ProcurementsReportsInfo.pickup.paid}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#D92E28', flex: 0.2 }]}>{ProcurementsReportsInfo.pickup.VOID}</Text>
                                </View>
                                <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.fs_5, { fontWeight: 'bold', flex: 0.4, color: '#707070' }]}>{Dictionary.DELIVERY[lan]}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#3FAEA3', flex: 0.2 }]}>{ProcurementsReportsInfo.delivery.paid}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#D92E28', flex: 0.2 }]}>{ProcurementsReportsInfo.delivery.VOID}</Text>
                                </View>
                                <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.fs_5, { fontWeight: 'bold', flex: 0.4, color: '#707070' }]}>{Dictionary.TABLE[lan]}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#3FAEA3', flex: 0.2 }]}>{ProcurementsReportsInfo.table.paid}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#D92E28', flex: 0.2 }]}>{ProcurementsReportsInfo.table.VOID}</Text>
                                </View>
                                <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.fs_5, { fontWeight: 'bold', flex: 0.4, color: '#707070' }]}>{Dictionary.APPLICATION[lan]}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#3FAEA3', flex: 0.2 }]}>{ProcurementsReportsInfo.application.paid}</Text>
                                    <Text style={[styles.fs_5, { textAlign: 'center', fontWeight: 'bold', color: '#D92E28', flex: 0.2 }]}>{ProcurementsReportsInfo.application.VOID}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[styles.fs_8, { fontWeight: 'bold', color: '#707070' }]}>{Dictionary.TOTAL_ORDERS[lan]}</Text>
                                <View style={{ paddingVertical: 5, flexDirection: 'row' }}>
                                    <Text style={[styles.fs_5, { fontWeight: 'bold', color: '#D92E28', paddingHorizontal: 5 }]}>{ProcurementsReportsInfo.totalOrders}</Text>
                                    <Text style={[styles.fs_5, { fontWeight: 'bold', color: '#D92E28', paddingHorizontal: 5 }]}>{Dictionary.ORDERS[lan]}</Text>
                                </View>
                            </View>


                        </View>
                        {/* *******************************Right Bottom********************************* */}
                        <View style={{ flex: 0.4, backgroundColor: '#ffffff', borderRadius: 16 }}>
                            <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.fs_12, { color: '#707070' }]}> {Dictionary.TOTAL_SALES[lan]}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[styles.fs_12, { padding: 10, color: '#3FAEA3' }]}>{ProcurementsReportsInfo.totalSales}</Text>
                                    <Text style={[styles.fs_8, { color: '#707070' }]}>{ProcurementsReportsInfo.curruncy[lan]}</Text>
                                </View>


                            </View>
                            {/* ******************Send Report Button**************** */}
                            <TouchableOpacity style={{ flex: 0.2 }}>
                                <View style={{ flex: 1, backgroundColor: '#3FAEA3', borderBottomEndRadius: 16, borderBottomStartRadius: 16, justifyContent: 'center', height: '100%', width: '100%' }}>
                                    <Text style={{ justifyContent: 'flex-end', color: '#fff', textAlign: 'center' }}>{Dictionary.SEND_REPORT[lan]}</Text>
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>
                </View>
            </View >
        );
    }
}

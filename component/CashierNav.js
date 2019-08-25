import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity } from 'react-native';

/*************************************** Library ********************************************/
import Dictionary from '../services/dictionary';

/*************************************** Pages ********************************************/
import styles from '../style/styleSheet';
import { Icon } from 'expo';
import storeInfo from '../jsons/storeinfo';
/*************************************** Variables ****************************************/
let lan = 'en'

export default class CashierNav extends Component {


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#E4E4E4', justifyContent: 'center' }}>
                {/* *****Home******* */}
                <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('Dashboard')} style={{ marginTop: 10 }}>
                    <View style={[styles.sidebarBoxes, { alignItems: 'center', justifyContent: 'center', alignContent: 'center', }]}>
                        <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} style={[styles.homeIcon, { alignSelf: 'center', }]} />
                    </View>
                </TouchableOpacity>
                {/* *****Empty View***** */}
                <View style={{ marginBottom: 20 }}>

                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center', fontSize:10 }]}>{Dictionary.CASHIER_NEW_ORDER[lan]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center', fontSize:10 }]}>{Dictionary.CASHIER_ORDERS[lan]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center', fontSize:10 }]}>{Dictionary.CASHIER_DISCOUNTS[lan]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center', fontSize:10 }]}>{Dictionary.CASHIER_FUNCTION[lan]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center', fontSize:10 }]}>{Dictionary.CASHIER_CLOSING[lan]}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-print' : 'md-print'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center', fontSize:10 }]}>{Dictionary.CASHIER_TAKE_CASH[lan]}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                {/******Empty View******/}
                <View style={{ marginTop: 20 }}></View>

                {/****** Drawer********/}
                <TouchableOpacity>
                    <View style={[styles.sidebarBoxes, { backgroundColor: '#D92E28' }]}>
                        <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-tablet-portrait' : 'md-tablet-portrait'} style={[styles.sidebarIcon, { alignSelf: 'center', color: 'white' }]} />
                        <Text style={[styles.p_1, { textAlign: 'center', color: 'white', fontSize:10 }]}>Drawer</Text>
                    </View>
                </TouchableOpacity>

                {/* *************Version Number************* */}

                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                    <Text style={styles.versionNumber}>{storeInfo.LWPOSVersion}</Text>
                </View>
            </View>
        );
    }
}
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
                <View style={{ marginBottom: 40 }}>

                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                        <View style={styles.sidebarBoxes}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                            <Text style={[styles.p_1, { textAlign: 'center' }]}>{Dictionary.CASHIER_NEW_ORDER[lan]}</Text>
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

                {/******Empty View******/}
                <View style={{ marginTop: 40 }}></View>

                {/****** Drawer********/}
                <TouchableOpacity>
                    <View style={[styles.sidebarBoxes, { backgroundColor: '#D92E28' }]}>
                        <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-tablet-portrait' : 'md-tablet-portrait'} style={[styles.sidebarIcon, { alignSelf: 'center', color: 'white' }]} />
                        <Text style={[styles.p_1, { textAlign: 'center', color: 'white' }]}>Drawer</Text>
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
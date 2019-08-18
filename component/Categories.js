import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity } from 'react-native';

/*************************************** Library ********************************************/

/*************************************** Pages ********************************************/
import styles from '../style/styleSheet';
import { Icon } from 'expo';
import storeInfo from '../jsons/storeinfo';
/*************************************** Variables ****************************************/

export default class Sidebar extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: '1%', borderRadius: 16, backgroundColor: '#E4E4E4', flexDirection: 'row' }}>
                {/* *****Home******* */}
                <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('Dashboard')}>
                    <View style={[styles.sidebarBoxes, { alignItems: 'center', justifyContent: 'center', alignContent: 'center' }]}>
                        <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                    </View>
                </TouchableOpacity>
                {/* *********Nav list******* */}
                <ScrollView horizontal={true} showsVerticalScrollIndicator={false} style={{ flex: 0.6, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
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
                    </View>

                </ScrollView>
            </View>
        );
    }
}

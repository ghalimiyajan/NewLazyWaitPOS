import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';

/*************************************** Library ********************************************/

/*************************************** Pages ********************************************/
import styles from '../style/styleSheet';
import { Icon } from 'expo';
import storeInfo from '../jsons/storeinfo';
/*************************************** Variables ****************************************/
let personImage = 'https://placekitten.com/200/240';
export default class Sidebar extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: '1%', borderRadius: 16, backgroundColor: '#E4E4E4', justifyContent: 'center', flexDirection: 'row' }}>

                <ScrollView style={{ flex: 0.6, }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Image source={{ uri: personImage }} style={styles.productImage} />
                                <View style={{ flex: 2 }}>

                                </View>
                                <ScrollView style={{ flex: 1 }}>
                                    <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier Cashier Cashier CashierCashier Cashier</Text>
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity><TouchableOpacity onPress={() => this.props.navigationVariable.props.navigation.navigate('CashierSettings')} >
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Cashier</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Products</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Add-ons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Users Roles</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-print' : 'md-print'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Printers</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Print Options</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
                                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-pricetags' : 'md-pricetags'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                <Text style={[styles.p_1, { textAlign: 'center' }]}>Discounts</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.cashierBoxes}>
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

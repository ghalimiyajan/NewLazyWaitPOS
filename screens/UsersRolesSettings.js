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
import usersInfo from '../jsons/usersInfo';
import Checkbox from '../component/Checkbox';



let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class UsersRolesSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            userType: 'Admin',
            sidebarAdd: true,



        };
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
            <TouchableOpacity onPress={() => this.handleClick2()}>
                <View style={[styles.usersCards, { margin: 10 }]}>
                    <View style={styles.greenTag}>
                        <Text style={[styles.fs_7, { color: '#ffff', fontWeight: 'bold', }]}>{item.user_Id}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flex:1, justifyContent:'center' }}>
                        <Text style={[styles.fs_8, { color: '#707070', }]}>{item.user_type}</Text>
                    </View>
                </View>
            </TouchableOpacity>



        )
    }

    render() {
        // if statment thet handel the click in edit or add users 
        const sidebarAdd = this.state.sidebarAdd;
        if (sidebarAdd) {
            button = <AddActionButton />;
        } else {
            button = <DeleteActionButton />;
        }

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
                    {/* *************************************************Cards********************************************* */}
                    <View style={{ flex: 0.9, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {/* Add user View */}
                        <TouchableOpacity onPress={() => this.handleClick()}>
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
                <View style={{ flex: 1.2, borderRadius: 16, padding: 20, }}>
                    {/* *****************************Add user Modal ******************************************* */}

                    <View style={styles.sidebar}>
                        <View style={{ flex: 0.9, padding: 20, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                <Text style={{ flex: 1 }}>{Dictionary.NAME[lan]}</Text>
                                <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                            </View>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#4DB4AA', padding: 5 }}>
                                <Text>{Dictionary.USER_TYPE[lan]}</Text>

                            </View>

                            <ScrollView style={{padding: 10,}} showsVerticalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding:5 }}>
                                    <View style={{ flex: 0.3, justifyContent: "center" }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.OPEN_CASHIER_DRAWER_WITHOUT_TRANSACTION[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.RETURN_SOLD_ITEMS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.CANCEL_KITCHEN_ORDERS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.CLOSE_CASHIER[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_PRODUCTS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_ADDONS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_USERS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_PRINTERS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_GENERAL_SETTINGS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_TABELS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_DISCOUNTS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.VIEW_SALES[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.CANCEL_UNPAID_ORDERS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.CANCEL_PAID_ORDERS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.ALLOW_MANUAL_DISCOUNTS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_CASHIER_SETTINGS[lan]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View style={{ flex: 0.3, justifyContent: "center", justifyContent: "center", padding:5 }}>
                                        <Checkbox/>
                                    </View>
                                    <Text style={{ flex: 2 }}>{Dictionary.MODIFY_TABLET_SETTINGS[lan]}</Text>
                                </View>









                            </ScrollView>

                        </View>
                        {/* Add or Delete button */}
                        {button}

                    </View>
                </View>
            </View>
        );
    }
}

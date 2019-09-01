import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, TextInput, Switch, Modal, } from 'react-native';
// ***************************Pages***********************//
import noticeBoard from '../jsons/ojb';
import storeInfo from '../jsons/storeinfo';
import Dictionary from '../services/dictionary';
import styles from '../style/styleSheet';
import Sidebar from '../component/Sidebar';
import AddActionButton from '../component/AddActionButton';
import DeleteActionButton from '../component/DeleteActionButton';
import OptionsTab from '../component/OptionsTab';
// ************************Libraries*********************//
import { Icon } from 'expo';
import waitingInfo from '../jsons/waitingInfo';



let lan = 'en';
const online = '#8EDF88';
const offline = '#8EDF88';

export default class Waiting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableType: 'closed',
            waitingPlace: 'inside',
            sidebarAdd: false,
            people: 1,



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

    // To increasing or decreasing the number of poeple
    addCount() {
        var count = this.state.people;
        count = count + 1;
        this.setState({ people: count });
    }
    delCount() {
        var count = this.state.people;
        if (count != 1) {

            count = count - 1;
            this.setState({ people: count });
        }

    }


    // Users Boxes View 
    _renderItem = item => {
        return (
            <TouchableOpacity onPress={() => this.handleClick()}>
                <View style={[styles.usersCards, { margin: 10 }]}>
                    <View style={styles.greenTag}>
                        <Text style={[styles.fs_7, { color: '#ffff', fontWeight: 'bold', }]}>{item.user_Id}</Text>
                    </View>
                    <View style={{ justifyContent: 'space-around', padding: 10, alignItems: 'center', paddingTop: 35 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} style={[styles.fs_7, { flex: 0.2 }]} />
                            <Text style={[styles.fs_4, { color: '#707070', flex: 1 }]}>{item.name}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} style={[styles.fs_7, { flex: 0.2 }]} />
                            <Text style={[styles.fs_4, { color: '#707070', flex: 1 }]}>{item.phone_number}</Text>
                        </View>

                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} style={[styles.fs_7, { flex: 0.2 }]} />
                            <Text style={[styles.fs_4, { color: '#707070', flex: 1, }]}>{item.people_count}</Text>
                        </View>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-clock' : 'md-clock'} style={[styles.fs_7, { flex: 0.2 }]} />
                            <Text style={[styles.fs_4, { color: '#707070', flex: 1, }]}>{item.waiting_time}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>



        )
    }

    render() {

        // if statment thet handel the click in edit or add users 
        const sidebarAdd = this.state.sidebarAdd;
        if (!sidebarAdd) {
            button = <AddActionButton />;
        } else {
            button = <DeleteActionButton />;
        }

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

                            <TouchableOpacity onPress={() => this.handleClick2()}>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'me-add'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, styles.fs_5, { textAlign: 'center' }]}>{Dictionary.ADD[lan]}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-cash' : 'me-cash'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, styles.fs_5, { textAlign: 'center' }]}>{Dictionary.CURRENT[lan]}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.sidebarBoxes}>
                                    <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-close-circle' : 'me-close-circle'} style={[styles.sidebarIcon, { alignSelf: 'center', }]} />
                                    <Text style={[styles.p_1, styles.fs_5, { textAlign: 'center' }]}>{Dictionary.HISTORY[lan]}</Text>
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
                    {/* *************************************************Cards********************************************* */}
                    <View style={{ flex: 0.9, flexDirection: 'row', flexWrap: 'wrap', }}>
                       
                        {/* Edit user View */}
                        {waitingInfo.Info.map((item, key) =>
                            (
                                <View >
                                    {this._renderItem(item)}
                                </View>
                            )
                        )
                        }

                    </View>
                </View>
                {/* ****************************************************Right Side********************************************** */}
                <View style={{ flex: 1.2, borderRadius: 16, padding: 20, }}>
                    {/* *****************************Add waiting Modal ******************************************* */}

                    <View style={styles.sidebar}>
                        <View style={{ flex: 0.9, padding: 20, }}>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#4DB4AA', padding: 5 }}>
                                <Text>{Dictionary.ADD_WAITING[lan]}</Text>

                            </View>




                            <View style={{ flex: 0.8, justifyContent: 'space-around', }}>
                                {/* name */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* phone number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.PHONE_NUMBER[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* People Count */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15, }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.PEOPLE_COUNT[lan]}</Text>
                                    <TouchableOpacity onPress={() => this.delCount()}>
                                        <View style={{ borderWidth: 1.5, borderColor: '#707070', height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', }}>
                                            <Text style={styles.fs_10}>-</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', }}>
                                        <Text style={styles.fs_10}>{this.state.people}</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => this.addCount()}>
                                        <View style={{ borderWidth: 1.5, borderColor: '#707070', height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', }}>
                                            <Text style={styles.fs_10}>+</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* table type */}

                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.TABLE_TYPE[lan]}</Text>
                                    <TouchableOpacity onPress={() => this.setState({ tableType: 'closed' })}>
                                        <View style={{ padding: 10, borderWidth: 1, borderRadius: 16, marginHorizontal: 3, backgroundColor: this.state.tableType == "closed" ? "#fff" : 'rgba(0,0,0,0)', borderColor: this.state.tableType == "closed" ? "rgba(0,0,0,0)" : '#707070' }}>
                                            <Text>{Dictionary.CLOSED[lan]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ tableType: 'any' })}>
                                        <View style={{ padding: 10, borderWidth: 1, borderRadius: 16, marginHorizontal: 3, backgroundColor: this.state.tableType == "any" ? "#fff" : 'rgba(0,0,0,0)', borderColor: this.state.tableType == "any" ? "rgba(0,0,0,0)" : '#707070' }}>
                                            <Text>{Dictionary.ANY_AVAILABLE_TABLE[lan]}</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                {/* waiting place */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.WAITING_PLACE[lan]}</Text>
                                    <TouchableOpacity onPress={() => this.setState({ waitingPlace: 'inside' })}>
                                        <View style={{ padding: 10, borderWidth: 1, borderRadius: 16, marginHorizontal: 3, backgroundColor: this.state.waitingPlace == "inside" ? "#fff" : 'rgba(0,0,0,0)', borderColor: this.state.waitingPlace == "inside" ? "rgba(0,0,0,0)" : '#707070' }}>
                                            <Text>{Dictionary.INSIDE[lan]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ waitingPlace: 'outside' })}>
                                        <View style={{ padding: 10, borderWidth: 1, borderRadius: 16, marginHorizontal: 3, backgroundColor: this.state.waitingPlace == "outside" ? "#fff" : 'rgba(0,0,0,0)', borderColor: this.state.waitingPlace == "outside" ? "rgba(0,0,0,0)" : '#707070' }}>
                                            <Text>{Dictionary.OUTSIDE[lan]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                {/* Note */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NOTES[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>


                            </View>

                        </View>
                        {/* Add or Delete button */}
                        {button}

                    </View>
                </View>
            </View>
        );
    }
}

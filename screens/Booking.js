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
import BookingInfo from '../jsons/BookingInfo';


// ************************Libraries*********************//
import { Icon } from 'expo';
import CalendarPicker from 'react-native-calendar-picker';
import { Dropdown } from 'react-native-material-dropdown';




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
            selectedStartDate: null,



        };
        this.onDateChange = this.onDateChange.bind(this);
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
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }


    // Users Boxes View 
    _renderItem = item => {
        return (
            <TouchableOpacity onPress={() => this.handleClick()}>
                <View style={[styles.usersCards2, { margin: 10 }]}>
                    <View style={{ flex: 0.3, backgroundColor: '#3FAEA3', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.fs_6, { color: '#ffff', }]}>{item.date}</Text>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={[styles.fs_6, {}]}>{item.name}</Text>
                        <Text style={[styles.fs_6, {}]}>{item.service[lan]}</Text>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#C4C4C4', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, }}>
                        <Text style={[styles.fs_6, { color: '#ffff', }]}>{item.stateus[lan]}</Text>
                        <View style={{ backgroundColor: online, height: 10, width: 10, borderRadius: 100, margin: '2%' }} />
                    </View>
                </View>
            </TouchableOpacity>



        )
    }


    render() {
        let services = [{
            value: 'Haircut ',
        }, {
            value: 'Massage',
        }, {
            value: 'package',
        }];
        let employee = [{
            value: 'Ruqaya',
        }, {
            value: 'Ghali',
        }];
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        // if statment thet handel the click in edit or add users 
        const sidebarAdd = this.state.sidebarAdd;
        if (!sidebarAdd) {
            button = <AddActionButton />;
            calander = <CalendarPicker
                onDateChange={this.onDateChange}
                width={350}
                height={300}
                selectedDayColor={'#48C4B7'}
                previousTitle={'<'}
                nextTitle={'>'}
                style={{ flex: 1 }}
            />;
        } else {
            calander = <View style={{ paddingTop: 25 }}>
                <Text style={[styles.fs_20, { textAlign: 'center', color: '#464A4D' }]}>10:35</Text>
                <View style={{}} />
            </View>;
            button = <View style={{ flexDirection: 'row', flex: 0.1 }}>
                <TouchableOpacity style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#3FAEA3', borderBottomLeftRadius: 16, justifyContent: 'center' }}>
                        <Text style={{ justifyContent: 'flex-end', color: '#fff', textAlign: 'center' }}>{Dictionary.EDIT[lan]}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 2 }}>
                    <View style={{ flex: 1, backgroundColor: '#D92E28', borderBottomRightRadius: 16, justifyContent: 'center' }}>
                        <Text style={{ justifyContent: 'flex-end', color: '#fff', textAlign: 'center' }}>{Dictionary.DELETE[lan]}</Text>
                    </View>
                </TouchableOpacity>
            </View>;
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
                        {BookingInfo.Info.map((item, key) =>
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
                        <ScrollView style={{ flex: 1, padding: 20, }}>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#4DB4AA', padding: 5 }}>
                                <Text>{Dictionary.ADD_WAITING[lan]}</Text>

                            </View>

                            <View style={{  flex: 1, justifyContent: 'space-around', }}>

                                {/* Calander */}
                                <View style={{ alignItems: 'center', }}>
                                    {calander}
                                    {/* <View >
                                        <Text>{startDate}</Text>
                                    </View> */}
                                </View>
                                {/* Service */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.SERVICE[lan]}</Text>
                                    <Dropdown
                                        containerStyle={{ width: '50%' }}
                                        data={services}
                                        style={{ flex: 1 }}
                                    />
                                </View>
                                {/* employee */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingButtom: 15 }}>
                                    <Text style={{ flex: 1 }} >{Dictionary.EMPLOYEE[lan]}</Text>
                                    <Dropdown
                                        containerStyle={{ width: '50%' }}
                                        data={employee}
                                        style={{ flex: 1 }}
                                    />
                                </View>
                                {/* name */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NAME[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>

                                {/* phone number */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.PHONE_NUMBER[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/* fee */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.FEE[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                {/*Note */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                                    <Text style={{ flex: 1 }}>{Dictionary.NOTES[lan]}</Text>
                                    <TextInput style={[styles.smallTextInput, { flex: 1 }]} />
                                </View>
                                







                            </View>

                        </ScrollView>
                        {/* Add or Delete button */}
                        {button}

                    </View>
                </View>
            </View>
        );
    }
}

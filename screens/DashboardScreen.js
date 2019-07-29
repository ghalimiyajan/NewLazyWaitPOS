import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';

/*************************************** Library    ****************************************/
import { Icon } from 'expo';

/*************************************** Pages      ****************************************/
/*************************************** Variables  ****************************************/
let lan = 'ar';
let currentDate = new Date();
let version = ' V3.4.2';

let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dayName = days[currentDate.getDay()];
let monthName = monthNames[currentDate.getMonth()];

let personImage = 'https://placekitten.com/200/240';
const online = '#8EDF88';
const offline = '#8EDF88';
/*************************************** JSONS      ****************************************/
import Dictionary from '../services/dictionary';
import storeInfo from '../jsons/storeinfo';

/*************************************** StyleSheet ****************************************/
import styles from '../style/styleSheet';

export default class DashboardScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.mainBackgroundColor, styles.flex1]}>
        {/************************ TOP *************************/}
        <View style={[styles.flex02, styles.dashboardHeaderContainer]} >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', paddingLeft: '20%', flexDirection: 'row' }}>
              <Text style={[styles.text, { color: '#464A4D', fontWeight: 'bold' }]}>{storeInfo.name}</Text>
              <View style={{ backgroundColor: online, height: 20, width: 20, borderRadius: 100, marginLeft: 5 }} />
            </View>
          </View>
          <View style={{ alignItems: 'center', flex: 2 }}>
            <Text style={styles.fs_13}>
              {currentDate.getHours()}:{currentDate.getMinutes()}
            </Text>
            <Text style={styles.fs_7}>
              {dayName} {currentDate.getDay()} {monthName}
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end', flex: 1, paddingRight: '5%' }}>
            <Text style={{ borderWidth: 1, borderRadius: 100, padding: 10 }}>
              <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'} style={styles.menuIcon} />

            </Text>
          </View>
        </View>
        {/************************ BODY *************************/}
        <View style={[styles.flex08, styles.dashboardBodyContainer]}>
          <View style={[styles.flex08, styles.dashboardBodyContainer]}>

            {/**************left side***************/}

            {/***********Report************/}
            <View style={styles.flex07}>

              <View style={[styles.flex1, styles.dashboardItem_h]}>

                <View style={[styles.flex1, styles.p_7, styles.dashboardItemInfo]}>
                  <View style={styles.flexCenter}>
                    <View style={styles.circleBotton}>
                      <Text style={[styles.whiteFont, styles.fs_8]}>1</Text>
                    </View>
                    <View>
                      <Text style={styles.fs_7rem}>
                        {Dictionary.REPORT[lan]}
                      </Text>
                    </View>
                    <View style={styles.dashboardLine}>
                    </View>
                  </View>
                </View>

                <View style={[styles.flex07, styles.p_5, { flex: 1 }]}>
                  <View style={{ alignItems: 'flex-end', justifyContent: "center", flex: 0.3 }}>
                    <View>
                      <Text style={[styles.fs_7rem, { textAlign: 'right' }]}>
                        {Dictionary.TODAY[lan]}
                      </Text>
                    </View>
                    <View style={[styles.dashboardLine]}>
                    </View>
                  </View>
                  <View style={{ justifyContent: "center", flex: 0.7 }}>
                    <View style={styles.dashboardItemInfo}>
                      <Text>
                        5
                      </Text>
                      <Text>
                        {Dictionary.BILLS[lan]}
                      </Text>
                    </View>

                    <View style={styles.dashboardItemInfo}>
                      <Text>
                        Salam
                      </Text>
                      <Text>
                        {Dictionary.MOST_SALES[lan]}
                      </Text>
                    </View>

                    <View style={styles.dashboardItemInfo}>
                      <Text>
                        Hala
                     </Text>
                      <Text>
                        {Dictionary.MOST_SECTION_SALES[lan]}
                      </Text>
                    </View>
                  </View>
                </View>

              </View>

              <View style={[styles.flex1, styles.dashboardItemContainer]}>

                {/***********Waiting************/}

                <View style={[styles.flex03, styles.dashboardItem_h, styles.p_7]}>
                  <View style={styles.flexCenter}>
                    <View style={styles.circleBotton}>
                      <Text style={[styles.whiteFont, styles.fs_8]}>1</Text>
                    </View>
                    <Text style={styles.fs_7rem}>
                      {Dictionary.WAITING[lan]}
                    </Text>
                    <View style={styles.dashboardLine}>
                    </View>
                    <Text>
                      {Dictionary.BILLS[lan]}
                    </Text>
                  </View>
                </View>


                {/***********Setting************/}
                <View style={[styles.flex1, styles.dashboardItem_h, styles.p_7]}>
                  <View style={styles.flexCenter}>
                    <View style={styles.circleBotton}>
                      <Text style={[styles.whiteFont, styles.fs_8]}>1</Text>
                    </View>
                    <Text style={styles.fs_7rem}>
                      {Dictionary.SETTING[lan]}
                    </Text>
                    <View style={styles.dashboardLine}>
                    </View>
                  </View>
                  <View style={[styles.flex1, styles.p_5, { justifyContent: "center", }]}>
                    <View style={styles.dashboardItemInfo}>
                      <Text>
                        5
                      </Text>
                      <Text>
                        {Dictionary.BILLS[lan]}
                      </Text>
                    </View>
                    <View style={styles.dashboardItemInfo}>
                      <Text>
                        Salam
                      </Text>
                      <Text>
                        {Dictionary.MOST_SALES[lan]}
                      </Text>
                    </View>
                    <View style={styles.dashboardItemInfo}>
                      <Text>
                        Hala
                     </Text>
                      <Text>
                        {Dictionary.MOST_SECTION_SALES[lan]}
                      </Text>
                    </View>
                  </View>
                </View>

              </View>

            </View>

            {/************** right side ***************/}
            {/************** Cashier    ***************/}

            <View style={styles.flex03}>
              <View style={[styles.flex1, styles.dashboardItem_v, styles.p_7]}>
                <View style={[styles.flexCenter, { alignItems: 'flex-start', justifyContent: "center", flex: 0.3 }]}>
                  <View style={styles.circleBotton}>
                    <Text style={[styles.whiteFont, styles.fs_8]}>190</Text>
                  </View>
                  <Text style={styles.fs_7rem}>
                    {Dictionary.CASHIER[lan]}
                  </Text>
                  <View style={styles.dashboardLine}>
                  </View>
                </View>

                <View style={[styles.flex07, styles.p_5, { justifyContent: "center", }]}>
                  <View style={styles.dashboardItemInfo}>
                    <Text>
                      5
                      </Text>
                    <Text>
                      {Dictionary.BILLS[lan]}
                    </Text>
                  </View>
                  <View style={styles.dashboardItemInfo}>
                    <Text>
                      Salam
                      </Text>
                    <Text>
                      {Dictionary.MOST_SALES[lan]}
                    </Text>
                  </View>
                  <View style={styles.dashboardItemInfo}>
                    <Text>
                      Hala
                     </Text>
                    <Text>
                      {Dictionary.MOST_SECTION_SALES[lan]}
                    </Text>
                  </View>
                </View>

              </View>
            </View>

          </View>
        </View>
        {/************************ BOTTOM *************************/}
        <View style={[styles.flex02, styles.dashboardFooterContainer, { alignItems: 'center' }]}>
          <View style={[styles.dashboardFooterContainer, { flex: 1 }]}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <Text>
                {version}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
              <Image source={{ uri: personImage }} style={styles.personImage} />
              <Text>
                WELCOME,Salam
            </Text>
            </View>
          </View>
        </View>
      </View >
    );
  }
}
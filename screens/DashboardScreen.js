
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, ScrollView, Platform, TouchableOpacity } from 'react-native';

/*************************************** Library ********************************************/
import { Icon } from 'expo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
/*************************************** Pages ********************************************/
/*************************************** Variables ********************************************/
let lan = 'en';

/*************************************** JSONS ********************************************/
import Dictionary from '../dictionary';
/*************************************** StyleSheet ********************************************/
import styles from '../style/styleSheet';

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.mainBackgroundColor, styles.flex1]}>
        {/************************ TOP *************************/}
        <View style={[styles.flex02, styles.dashboardHeaderContainer]} >
          <View>
            <Text>
              LazuWait
          </Text>
          </View>
          <View>
            <Text>
              Time
          </Text>
          </View>
          <View>
            <Text>
              Logout
          </Text>
          </View>
        </View>
        {/************************ BODY *************************/}
        <View style={[styles.flex08, styles.dashboardBodyContainer]}>
          <View style={[styles.flex08, styles.dashboardBodyContainer]}>

            {/***********left************/}
            <View style={styles.flex07}>
              <View style={[styles.flex1, styles.dashboardItem_h]}>
                <View style={styles.flex1}>
                  <View style={styles.circleBotton}>
                    <Text >1</Text>
                  </View>
                  <Text>
                    {Dictionary.REPORT[lan]}
                  </Text>
                </View>
                <View style={styles.flex1}>
                  <View>
                    <Text>
                      {Dictionary.TODAY[lan]}
                    </Text>
                  </View>
                  <View>
                  <View style={styles.dashboardItemInfo}>
                      <Text>{Dictionary.BILLS[lan]}
                      </Text>
                      <Text>
                        5
                    </Text>
                  </View>
                  <View style={styles.dashboardItemInfo}>
                        <Text>
                          {Dictionary.MOST_SALES[lan]}
                        </Text>
                        <Text>
                          Salam
                    </Text>
                      </View>
                      <View>
                        <Text style={styles.dashboardItemInfo}>
                          {Dictionary.MOST_SECTION_SALES[lan]}

                        </Text>
                        <Text>
                          Hala
                    </Text>
                      </View>
                  </View>
                </View>
              </View>
              <View style={[styles.flex1, styles.dashboardItemContainer]}>
                <View style={[styles.flex1, styles.dashboardItem_h]}>
                  <Text>
                    Dashboard
                </Text>
                </View>
                <View style={[styles.flex1, styles.dashboardItem_h]}>
                  <Text>
                    Dashboard
                </Text>
                </View>
              </View>
            </View>

            {/***********right************/}
            <View style={styles.flex03}>
              <View style={[styles.flex1, styles.dashboardItem_v]}>
                <Text>
                  Dashboard
              </Text>
              </View>
            </View>
          </View>
        </View>
        {/************************ BOTTOM *************************/}
        <View style={[styles.flex02, styles.dashboardContainer]}>
          <View>
            <Text>
              WELCOME
              </Text>
          </View>
        </View>
      </View>
    );
  }
}

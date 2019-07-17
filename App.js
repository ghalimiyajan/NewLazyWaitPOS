import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'expo';
// import MainNavigator from './mainNavigator'
import noticeBoard from './ojb';
import Dictionary from './dictionary';

const { width } = Dimensions.get('screen');
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

let lan = 'en';
export default class App extends React.Component {
  state = {
    name: 'ghali',
    Screens: [1, 2, 3, 45],
    pass:'',
  }
  _renderItem = item => {
    console.log(item)
    return (

      <View>
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color: '#707070' }}>{noticeBoard.title}</Text>
        </View>
        <View style={{ backgroundColor: '#F8F8F8', height: 450, width: 300, alignItems: 'flex-start', marginLeft: 25, padding: 10, borderRadius: 16 }}>
          <Text style={{ fontSize: 65 }}>{noticeBoard.day}</Text>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 28, color: '#C4C4C4' }}>{noticeBoard.Month}</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 21, color: '#D92E28', fontWeight: 'bold' }}>{noticeBoard.tag}</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 21, color: '#48C4B7', fontWeight: 'bold' }}>{item.title}:</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15, }}>- {item.detail}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#3FAEA3', height: "100%", width: "100%", transform: [{ rotate: '43deg' }], borderRadius: 100, position: "absolute", zIndex: 1, right: '50%' }} />

        <View style={{ flex: 1, flexDirection: 'row', zIndex: 2 }}>
          {/* leftside */}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 0.2, alignItems: "flex-end" }}>
              <TouchableOpacity
                // onPress={() => }
                style={{ zIndex: 3 }}>
                <View style={{ backgroundColor: '#E6E6E6', borderRadius: 50 / 2, height: 50, width: 50, justifyContent: 'center', alignItems: 'center', }}>

                  <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={30} color={'#707070'} />

                </View>
              </TouchableOpacity>
            </View>
            <View
              style={styles.Shadow}>

              <FlatList
                horizontal
                data={noticeBoard.details}
                renderItem={({ item }) => this._renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={{ flex: 0.2, justifyContent: 'flex-start', flexDirection: 'row' }}>
              <View style={{ borderWidth: 1, height: hp('10%'), width: hp('10%'), alignItems: 'center', justifyContent: 'center', }}>
                <Text>LW</Text>
              </View>
              <View>
                <Text>Lazywait POS</Text>

              </View>




            </View>

          </View>
          {/* rightside */}
          <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", }}>
            <View style={{ flex: 0.2, }}>
            </View>
            <View style={{ width: "50%", justifyContent: "flex-end", alignItems: "center", flex: 0.9, }}>
              <Text>{Dictionary.ADD_PIN_CODE[lan]}</Text>
              <View style={{ flex: 1, backgroundColor: color1, justifyContent:'center', alignItems:'center', borderColor:color1, width:wp('30%'), height:-100,  borderRadius:16}} >
              <Text numberOfLines={1} style={{fontSize:32, fontWeight:'bold', color:'#fff'}}>{this.state.pass}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
               <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 1 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>1</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 2 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>2</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 3 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>3</Text>
                </View>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
              <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 4 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>4</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 5 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>5</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 6})}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>6</Text>
                </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
              <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 7 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>7</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 8 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>8</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 9 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>9</Text>
                </View>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
              <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass.slice(0,-1) })}>
                <View style={styles.NumberContainer}>
                <Icon.Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={43} color={color1} />                
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ pass: this.state.pass + 0 })}>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>0</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.NumberContainer}>
                  <Text style={styles.LoginNumber}>C</Text>
                </View>
                </TouchableOpacity>
              </View>

            </View>
            <View style={{ flex: 0.2, }}>
            </View>
          </View>
        </View>
      </View>
    )
  };
}
const color1 = "#707070";
const styles = StyleSheet.create({
  Shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    height: hp('70%'),
    width: wp('35%'),
    borderRadius: 16,
    flex: 0.9
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  InputStyle: {
    backgroundColor: color1,
    color: 'white',
    borderColor: 'black',
    borderRadius:16,
    width: "110%",
    height:'10%',
    justifyContent: "center",
     alignItems: "center"
  },
  NumberContainer: {
    // flexDirection: "row",
    width: wp('10%'),
    height:wp('10%'),
    alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 2,
   borderColor: color1,
   borderRadius: wp('10%'),
   margin:'1%',

  },
  LoginNumber: {
   fontSize:43,
   color: color1
  },
   
   
  ViewStyle: {
    flex: 1,
  },

});

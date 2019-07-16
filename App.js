import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList } from 'react-native';
// import MainNavigator from './mainNavigator'
import Obj from './ojb';


const { width } = Dimensions.get('screen');
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }


export default class App extends React.Component {
  state = {
    name: 'ghali',
    Screens: [1, 2, 3, 45],
  }
  _renderItem = item => {
    console.log(item)
    return (
      <View>
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color: '#707070' }}>{Obj.title}</Text>
        </View>
        <View style={{ backgroundColor: '#F8F8F8', height: 450, width: 300, alignItems: 'flex-start', marginLeft: 25, padding: 10, borderRadius: 16 }}>
          <Text style={{ fontSize: 65 }}>{Obj.day}</Text>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 28, color: '#C4C4C4' }}>{Obj.Month}</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 21, color: '#D92E28', fontWeight: 'bold' }}>New!</Text>
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

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.Shadow}>

              <FlatList
                horizontal
                data={Obj.details}
                renderItem={({ item }) => this._renderItem(item)}
              />
            </View>


          </View>
          <View style={{ flex: 1 }}>

          </View>
        </View>
      </View>
    )
  };

}





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
    height: 550,
    width: 350,
    borderRadius: 16,

  }

});

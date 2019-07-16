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
    Screens:[],
  }





  render() {
    return (
 
      <View style={{ backgroundColor: '#3FAEA3', height: 900, width: 500}}>
      <View style={{ backgroundColor: '#FFFFFF', height: 550, width: 350, marginTop: '25%', marginLeft: '10%',borderRadius:16 }}>   
    <View style={{ marginTop: 30, alignItems: 'center' }}>
      <Text style={{ fontSize: 40,color:'#707070' }}>{Obj.title}</Text>
    </View>
    <View style={{ backgroundColor: '#F8F8F8', height: 450, width: 300, alignItems: 'flex-start', marginLeft: 25,padding:10,borderRadius:16 }}>
      <Text style={{ fontSize: 65 }}>{Obj.day}</Text>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 28, color: '#C4C4C4' }}>{Obj.Month}</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 21, color: '#D92E28', fontWeight:'bold' }}>New!</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 21, color: '#48C4B7', fontWeight:'bold' }}>{Obj.details[0].title}:</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 15,}}>- {Obj.details[0].detail}</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 15,}}>- {Obj.details[1].detail}</Text>
      </View>  
    </View>
  </View>

     
      </View>
    )
  };

}





const styles = StyleSheet.create({

});

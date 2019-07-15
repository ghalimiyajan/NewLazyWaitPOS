import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList } from 'react-native';
import Obj from './ojb'


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
  }

  changeName(val) {
    this.setState({ name: val + 1 });
  }


  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.ViewStyle}>
          <TextInput style={styles.InputStyle} placeholder='Enter value'></TextInput>
        </View>
        <View style={styles.ViewStyle}>
          <Text>Open up App.js to start working on your app!</Text>
          <NameHolder name={this.state.name}>

          </NameHolder>
          <Button onPress={() => { this.changeName(123) }} title="Change your name"></Button>
          {Obj.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
        </View> */}
{/* 
        <FlatList
          data={Obj}
          renderItem={({item}) => (
            <Text key={index}>{item.name}</Text>
          )}
        /> */}

          {Obj.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
      </View>
    )
  };

}



const NameHolder = props => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  InputStyle: {
    backgroundColor: 'red',
    color: 'white',
    borderColor: 'black',
    borderRadius: 15,
    width: width / 2
  },
  ViewStyle: {
    flex: 1,
  },
});

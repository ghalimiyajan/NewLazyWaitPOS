import React from 'react';
import { AppLoading, Asset, Font } from 'expo';


import { createStackNavigator, createAppContainer } from 'react-navigation';
import Navigation from './mainNavigator';
const online = '#8EDF88';


export default class App extends React.Component {
  render() {
    return (
      <Navigation online={online} />
    )
  }
}
// _loadResourcesAsync = async () => {
//   return Promise.all([
//     Font.loadAsync({
//       'space-mono': require('./assets/fonts/Quicksand-Regular.ttf'),
//       'Tajawal-Regular': require('./assets/fonts/Tajawal-Regular.ttf'),
//       'Tajawal-Medium': require('./assets/fonts/Tajawal-Medium.ttf'),
//       'Tajawal-Light': require('./assets/fonts/Tajawal-Light.ttf'),
//       'Tajawal-ExtraLight': require('./assets/fonts/Tajawal-ExtraLight.ttf'),
//       'Tajawal-ExtraBold': require('./assets/fonts/Tajawal-ExtraBold.ttf'),
//       'Tajawal-Bold': require('./assets/fonts/Tajawal-Bold.ttf'),
//       'Tajawal-Black': require('./assets/fonts/Tajawal-Black.ttf'),
//     }),
//   ]);
// };



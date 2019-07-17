import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: App},
  Dashboard: {screen: DashboardScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
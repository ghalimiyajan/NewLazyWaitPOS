import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';

const Navigation = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Login: { screen: Login },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
const Nav = createAppContainer(Navigation);

export default Nav;

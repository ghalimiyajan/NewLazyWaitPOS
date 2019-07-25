import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';
import Test from './screens/test';

const Navigation = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Login:     { screen: Login },
  Test:      { screen: Test },

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

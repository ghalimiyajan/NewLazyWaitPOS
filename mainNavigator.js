import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';

const Navigation = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
})
const Nav = createAppContainer(Navigation);

export default Nav;
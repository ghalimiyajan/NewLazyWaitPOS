import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';
import Settings from './screens/Settings';
import CashierSettings from './screens/CashierSettings';


const Navigation = createStackNavigator({ 
  // Login: { screen: Login },
  // Dashboard: { screen: Dashboard },
  Settings: { screen: Settings},
  CashierSettings:{screen:CashierSettings },


  

  
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

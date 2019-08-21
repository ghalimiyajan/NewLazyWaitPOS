import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';
import Settings from './screens/Settings';
import CashierSettings from './screens/CashierSettings';
import Sidebar from './component/Sidebar';
import Cashier from './screens/Cashier';
import UsersSettings from './screens/UsersSettings';
import UsersRolesSettings from './screens/UsersRolesSettings';
import PrintOptions from './screens/PrintOptions';
import ProductsSettings from './screens/ProductsSettings';
import AddonsSettings from './screens/AddonsSettings';
import PrintersSettings from './screens/PrintersSettings';
import DiscountsSettings from './screens/DiscountsSettings';
import TabletSettings from './screens/TabletSettings';
import Reports from './screens/Reports';
import CategoriesReport from './screens/CategoriesReport';


const Navigation = createSwitchNavigator({
  // Login: { screen: Login },
  // Dashboard: { screen: Dashboard },
  // Settings: { screen: Settings },
  // CashierSettings: { screen: CashierSettings },
  // Cashier: { screen: Cashier },
  // UsersSettings:{screen: UsersSettings},
  // UsersRolesSettings:{screen:UsersRolesSettings},
  // PrintOptions:{screen:PrintOptions},
  // ProductsSettings:{screen:ProductsSettings},
  // AddonsSettings:{screen:AddonsSettings},
  // PrintersSettings:{screen:PrintersSettings}, 
  // DiscountsSettings:{screen:DiscountsSettings},  
  // TabletSettings:{screen:TabletSettings}, 
  Reports: { screen: Reports },
  CategoriesReport: { screen: CategoriesReport },








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

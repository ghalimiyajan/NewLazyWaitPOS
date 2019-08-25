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
import ProductsReports from './screens/ProductsReports';
import DiscountsReposrts from './screens/DiscountsReposrts';
import UsersReports from './screens/UsersReports';
import CustomersReports from './screens/CustomersReports';
import PaymentMethodReports from './screens/PaymentMethodReports';
import OrderTypeReports from './screens/OrderTypeReports';
import CashMovementsReports from './screens/CashMovementsReports';
import profitsReports from './screens/profitsReports';
import TaxesReports from './screens/TaxesReports';
import SignInReports from './screens/SignInReports';
import CashierClosingReports from './screens/CashierClosingReports';
import ProcurementsReports from './screens/ProcurementsReports';



const Navigation = createSwitchNavigator({
  // Login: { screen: Login },
  // Dashboard: { screen: Dashboard },
  // Settings: { screen: Settings },
  // CashierSettings: { screen: CashierSettings },
  Cashier: { screen: Cashier },
  // UsersSettings:{screen: UsersSettings},
  // UsersRolesSettings:{screen:UsersRolesSettings},
  // PrintOptions:{screen:PrintOptions},
  // ProductsSettings:{screen:ProductsSettings},
  // AddonsSettings:{screen:AddonsSettings},
  // PrintersSettings:{screen:PrintersSettings}, 
  // DiscountsSettings:{screen:DiscountsSettings},  
  // TabletSettings:{screen:TabletSettings}, 
  // Reports: { screen: Reports },
  // CategoriesReport: { screen: CategoriesReport },
  // ProductsReports: { screen: ProductsReports },
  // DiscountsReposrts: { screen: DiscountsReposrts },
  // UsersReports: { screen: UsersReports },
  // CustomersReports: { screen: CustomersReports },
  // PaymentMethodReports: { screen: PaymentMethodReports },
  // OrderTypeReports: { screen: OrderTypeReports },
  // CashMovementsReports: { screen: CashMovementsReports },
  // profitsReports: { screen: profitsReports },
  // TaxesReports: { screen: TaxesReports },
  // SignInReports: { screen: SignInReports },
  // CashierClosingReports: { screen: CashierClosingReports },
  // ProcurementsReports: { screen: ProcurementsReports },










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

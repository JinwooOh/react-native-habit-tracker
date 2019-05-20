import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AddHabit from './screens/AddHabit';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Home',
    },
  },
  AddHabit: {
    screen: AddHabit,
  },
});
const SettingStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Settings',
    },
  },
});

const RootStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
  },
  Settings: {
    screen: SettingStack,
  },
});

// const App = createAppContainer(RootStack);
export default createAppContainer(RootStack);

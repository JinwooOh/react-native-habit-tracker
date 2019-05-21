import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AddHabit from './screens/AddHabit';
import Progress from './screens/Progress';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      headerTitle: '',
    },
  },
  AddHabit: {
    screen: AddHabit,
    navigationOptions: {
      headerTitle: 'New Habit',
      headerTitleStyle: {
        color: '#343434',
      },
    },
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

const ProgressStack = createStackNavigator({
  Progress: {
    screen: Progress,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Progress',
    },
  },
});

const RootStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
  },
  Progress: {
    screen: ProgressStack,
  },
  Settings: {
    screen: SettingStack,
  },
});

// const App = createAppContainer(RootStack);
export default createAppContainer(RootStack);

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import Home from './screens/Home';
import Settings from './screens/Settings';
import AddHabit from './screens/AddHabit';
import Progress from './screens/Progress';
import SelectRepeat from './screens/SelectRepeat';
import ViewHabit from './screens/ViewHabit';
import { DeleteHabit } from './components/DeleteHabit';

// import clipboard from './img/clipboard';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  AddHabit: {
    screen: AddHabit,
    navigationOptions: {
      headerTitle: 'Add Habit',
      headerTitleStyle: {
        color: '#343434',
      },
    },
  },
  SelectRepeat: {
    screen: SelectRepeat,
  },
  ViewHabit: {
    screen: ViewHabit,
  },
  DeleteHabit: {
    screen: DeleteHabit,
  },
});

const SettingStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: () => null,
    },
  },
});

const ProgressStack = createStackNavigator({
  Progress: {
    screen: Progress,

    navigationOptions: {
      header: () => null,
    },
  },
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Progress: {
      screen: ProgressStack,
      navigationOptions: {
        title: 'Habit List',
      },
    },

    // Settings: {
    //   screen: SettingStack,
    // },
  },
  {
    tabBarOptions: {
      style: {
        paddingBottom: 16,
        paddingTop: 16,
      },
    },
  }
);

export default createAppContainer(RootStack);

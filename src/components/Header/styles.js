import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    // marginBottom: 24,
    width: '100%',
    backgroundColor: '$white',
    '@media ios': {
      paddingTop: 20,
    },
  },
  addHabit: {
    width: '10%',
  },
});

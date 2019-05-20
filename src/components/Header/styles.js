import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24,
    width: '100%',
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // right: 0,
    backgroundColor: 'white',
    '@media ios': {
      paddingTop: 20,
    },
  },
});

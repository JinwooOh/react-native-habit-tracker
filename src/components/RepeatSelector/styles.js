import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  btnContainer: {
    backgroundColor: '$white',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: BORDER_RADIUS,
    marginHorizontal: 11,
    marginVertical: 11,
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: '$inputText',
    fontSize: 18,
  },
});

import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  inputIOS: {
    backgroundColor: 'white',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginHorizontal: 11,
    marginVertical: 11,

    paddingHorizontal: 8,
    color: 'gray',
    fontSize: 18,
    // color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: 'white',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginHorizontal: 11,
    marginVertical: 11,

    paddingHorizontal: 8,
    color: 'gray',
    fontSize: 18,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '$lightGray',
    padding: 5,
  },
  habitItemContainer: {
    marginTop: 5,
    // flexDirection: 'row',
    borderBottomWidth: 3,
    backgroundColor: '$white',
    borderRadius: 5,
    borderBottomColor: '$border',
  },
  habitItem: {
    flexDirection: 'row',
    padding: 5,
  },
  textBox: {
    flex: 3,
    justifyContent: 'center',
  },
  text: {
    color: '$inputText',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '500',
  },
});

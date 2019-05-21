import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    // flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '$lightGray',
  },
  habitItem: {
    marginTop: 5,
    flexDirection: 'row',
    borderBottomWidth: 2,
    backgroundColor: '$white',
    borderRadius: 5,
    borderBottomColor: '$lightGray',
    padding: 5,
  },
  textBox: {
    flex: 3,
    justifyContent: 'center',
  },
  text: {
    color: '#696969',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  icon: {},
});

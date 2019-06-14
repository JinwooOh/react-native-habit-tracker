import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    // flexDirection: 'column',
    flexBasis: '50%',
    flex: 1,

    alignItems: 'center',
    padding: 12,
    marginVertical: 3,
    backgroundColor: '$lightGray',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  infoText: {
    color: '$primaryYellow',
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    color: '$inputText',
    fontSize: 18,
    fontWeight: '500',
  },
  deleteBtn: {
    flex: 1,
  },
});

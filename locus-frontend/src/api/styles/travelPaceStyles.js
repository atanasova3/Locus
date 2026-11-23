import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  popup: {},
  heading: {
    fontWeight: '600',
    color: '#CF928A',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CF928A',
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    backgroundColor: '#CF928A',
  },
  ratingLabel: {
    color: '#CF928A',
    fontStyle: 'italic',
    marginLeft: 5,
  },
  nextButton: {
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(210,150,140,0.25)',
  },
  nextText: {
    color: '#F1EFCD',
    fontWeight: '500',
  },
});

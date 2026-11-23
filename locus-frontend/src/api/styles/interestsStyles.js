import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  popup: {},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 19,
  },
  typeButton: {
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(190,140,130,0.25)',
  },
  selectedType: {
    borderColor: '#F1EFCD',
  },
  typeText: {
    color: '#F1EFCD',
  },
  selectedText: {
    color: '#CF928A',
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

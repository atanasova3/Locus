import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    paddingHorizontal: 16,
  },
  popup: {},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  divider: {
    backgroundColor: '#CF928A',
  },
  heading: {
    fontWeight: '600',
    color: '#CF928A',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    borderColor: '#CF928A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    backgroundColor: '#CF928A',
  },
  stars: {
    color: '#F1EFCD',
    letterSpacing: 1,
  },
  ratingLabel: {
    color: '#CF928A',
    fontStyle: 'italic',
    marginLeft: 5,
  },
  filtersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    borderColor: '#CF928A',
  },
  checkmark: {
    color: '#F1EFCD',
    fontWeight: '500',
    marginTop: -2,
  },
  filterText: {
    color: '#CF928A',
    fontStyle: 'italic',
  },
  stepContainer: {
    alignSelf: 'flex-end',
  },
  step: {
    color: '#F1EFCD',
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

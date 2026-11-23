import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  popup: {},
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceText: {
    color: '#F1EFCD',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 23,
  },
  currentBudget: {
    color: '#CF928A',
    textAlign: 'right',
    marginBottom: -3,
  },
  slider: {
    width: '100%',
  },
  selectButton: {
    borderWidth: 2,
    borderColor: '#CF928A',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(210,150,140,0.25)',
  },
  selectText: {
    color: '#F1EFCD',
    fontWeight: '500',
  },
});

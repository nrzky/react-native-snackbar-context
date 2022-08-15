import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: 5,
  },
  messageText: {
    flex: 1,
    fontSize: 14,
    color: '#ffffff',
  },
  timerIndicatorView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 5,
    backgroundColor: 'white',
  },
});

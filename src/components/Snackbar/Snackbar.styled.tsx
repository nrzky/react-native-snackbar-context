import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    paddingVertical: 15,
    borderRadius: 7.5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
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
    right: 0,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 7.5,
  },
});

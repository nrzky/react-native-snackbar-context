import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    height: 50,
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
});

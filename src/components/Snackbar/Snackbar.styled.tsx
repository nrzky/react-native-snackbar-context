import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    paddingVertical: 15,
    borderRadius: 7.5,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  messageText: {
    flex: 1,
    fontSize: 15,
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '900',
  },
  threadList: {
    flex: 1,
    flexDirection: 'column',
  },
  threadContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    gap: 5,
  },
  threadProfileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  threadProfileImage: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  threadUser: {
    fontSize: 16,
    fontWeight: '700',
  },
  threadMessage: {
    fontSize: 16,
    marginLeft: 25 + 10,
  },
  threadThinkingGif: {
    width: 25,
    height: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 30,
    padding: 10,
  },
});

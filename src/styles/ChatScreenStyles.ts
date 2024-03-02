import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  },
  threadContainer: {
    paddingVertical: 10,
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
});

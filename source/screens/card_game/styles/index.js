import {StyleSheet} from 'react-native';

export const gameBoard = StyleSheet.create({
  container: {backgroundColor: 'grey', flex: 1},
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  reset: {color: 'blue', fontWeight: 'bold', fontSize: 15},
  steps: {color: 'blue', fontWeight: 'bold', fontSize: 15},
});

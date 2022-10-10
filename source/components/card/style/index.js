import {StyleSheet} from 'react-native';
import {deviceheight, deviceWidth} from '../../../utils/util';

export const cardStyle = StyleSheet.create({
  fontStyle: {fontWeight: 'bold'},
  card: {margin: 10},
  back: {
    width: (deviceWidth * 28) / 100,
    height: (deviceheight * 22) / 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  front: {
    width: (deviceWidth * 28) / 100,
    height: (deviceheight * 22) / 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  flipped: {
    transform: [{rotateY: '90deg'}],
  },
});

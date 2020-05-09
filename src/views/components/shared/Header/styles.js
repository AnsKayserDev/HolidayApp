import {
  ZeplinGetHeight,
  ZeplinGetWidth,
} from '../../../../infrastructure/assets/Metrics';
import {StyleSheet} from 'react-native';
import {Colors} from '../../../../infrastructure/assets/themes/Colors';

const styles = StyleSheet.create({
  headercontainer: {
    alignItems: 'center',
    paddingHorizontal: ZeplinGetWidth(10),
    width: ZeplinGetWidth(350),
    height: ZeplinGetHeight(50),
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 20,
    color: Colors.darkish_pink,
  }
});
export default styles;

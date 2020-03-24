import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import fonts from '../../Themes/Fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  picker: {
    height: 40,
    width: 180,
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    borderColor: colors.borderColor,
  },
  country: {
    position: 'absolute',
    top: 15,
    right: 2,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: fonts.fontTitle,
    fontWeight: '700',
  },
});
export default styles;

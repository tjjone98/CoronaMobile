import {StyleSheet} from 'react-native';
import fonts from '../../../Themes/Fonts';
import colors from '../../../Themes/Colors';
import base from '../../../Themes/Base';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 4,
    borderWidth: 0.4,
    borderColor: 'transparent',
    borderRadius: 4,
    margin: 6,
    ...base.shadow,
  },
  title: {
    flex: 2,
    justifyContent: 'center',
  },
  content: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: fonts.fontTitle,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  txtContent: {
    fontSize: fonts.fontTitleArticle,
  },
  wrapImage: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 325,
    height: 150,
    marginTop: 5,
    marginBottom: 5,
  },
});
export default styles;

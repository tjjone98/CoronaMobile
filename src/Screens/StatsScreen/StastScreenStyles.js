import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import fonts from '../../Themes/Fonts';
import base from '../../Themes/Base';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    borderWidth: 0.4,
    borderRadius: 4,
    ...base.shadow,
    borderColor: 'transparent',
    padding: 2,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  tableHead: {
    flex: 1,
    borderRightWidth: 0.4,
    borderBottomWidth: 0.4,
    borderLeftWidth: 0.3,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    backgroundColor: colors.cardBackground,
    borderColor: colors.borderColor,
  },
  columnData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderBottomWidth: 0.4,
    paddingTop: 5,
    paddingBottom: 5,
    borderLeftWidth: 0.3,
    borderColor: colors.borderColor,
  },
  textData: {
    fontSize: fonts.fontTitleArticle,
    fontWeight: 'bold',
  },
});
export default styles;

import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../../Themes/Fonts';
import colors from '../../../Themes/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryOver: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 14,
    right: 15,
  },
  countryDetail: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  overview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  columnOverview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textConfirm: {
    fontSize: fonts.fontTitle,
    fontWeight: 'bold',
    color: colors.confirmText,
  },
  textRecovered: {
    fontSize: fonts.fontTitle,
    color: colors.recoverText,
    fontWeight: 'bold',
  },
  textDeath: {
    fontSize: fonts.fontTitle,
    color: colors.deathText,
    fontWeight: 'bold',
  },
  explain: {
    fontSize: fonts.fontTitleArticle,
    fontWeight: 'bold',
    color: colors.borderColor,
  },
  textDescriptionConfirm: {
    fontSize: fonts.fontDescription,
    color: colors.confirmText,
  },
  textDescriptionDeath: {
    fontSize: fonts.fontDescription,
    color: colors.deathText,
  },
  chart: {
    flex: 8,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    borderRadius: 4,
    marginTop: 10,
  },
});
export default styles;

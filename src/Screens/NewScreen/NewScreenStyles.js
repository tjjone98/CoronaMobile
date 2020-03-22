import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import fonts from '../../Themes/Fonts';
import base from '../../Themes/Base';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  live: {
    color: colors.confirmText,
    fontSize: fonts.fontTitle,
    fontWeight: '700',
  },
  stats: {
    flex: 2,
    flexDirection: 'column',
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    margin: 4,
    borderRadius: 4,
    padding: 4,
  },
  statsDetail: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    flex: 6,
    padding: 10,
  },
  card: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: colors.cardBackground,
    margin: 3,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    ...base.shadow,
  },
  confirmText: {
    fontSize: fonts.fontTitle,
    fontWeight: 'bold',
    color: colors.confirmText,
  },
  confirmView: {
    height: 1,
    width: '80%',
    backgroundColor: colors.confirmBackground,
  },
  recoverText: {
    fontSize: fonts.fontTitle,
    fontWeight: 'bold',
    color: colors.recoverText,
  },
  recoverView: {
    height: 1,
    width: '80%',
    backgroundColor: colors.recoverBackground,
  },
  deathText: {
    fontSize: fonts.fontTitle,
    fontWeight: 'bold',
    color: colors.deathText,
  },
  deathView: {
    height: 1,
    width: '80%',
    backgroundColor: colors.deathBackground,
  },
  confirm: {
    color: colors.confirmText,
  },
  death: {
    color: colors.deathText,
  },
  recover: {
    color: colors.recoverText,
  },
  item: {
    flex: 1,
    borderWidth: 0.4,
    borderRadius: 5,
    padding: 5,
    margin: 4,
    height: 80,
    justifyContent: 'center',
    borderColor: colors.borderColor,
    alignItems: 'center',
  },
  item_view: {
    flex: 8,
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 5,
    paddingTop: 5,
    flexDirection: 'column',
  },
  item_image: {
    flex: 2,
    width: '100%',
    height: '100%',
    padding: 2,
    borderRadius: 50,
  },
  title: {
    flex: 7,
    fontSize: fonts.fontTitleArticle,
    fontWeight: '700',
  },
  siteName: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSiteName: {
    fontSize: fonts.fontTime,
    fontWeight: '400',
    color: colors.timeColor,
  },
  textPublishAt: {
    fontSize: fonts.fontTime,
    color: colors.timeColor,
  },
});
export default styles;

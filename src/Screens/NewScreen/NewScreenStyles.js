import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import fonts from '../../Themes/Fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  list: {
    flex: 6,
  },
  card: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: colors.cardBackground,
    margin: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.01,
    shadowRadius: 1,
    elevation: 2,
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
});
export default styles;

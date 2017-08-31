import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listItem: {
    marginTop: metrics.doubleBaseMargin,
  },

  'listItem-first': {
    marginTop: 0,
  },

  emptyList: {
    color: colors.textInactive,
    fontSize: fonts.medium,
    alignSelf: 'center',
  },
});

export default styles;

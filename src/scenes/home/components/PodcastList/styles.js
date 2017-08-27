import { StyleSheet } from 'react-native';
import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listSection: {
    marginHorizontal: 0,
  },

  list: {
    marginTop: metrics.doubleBaseMargin,
  },

  listItem: {
    marginHorizontal: metrics.baseMargin,
  },

  'listItem-first': {
    marginLeft: metrics.doubleBaseMargin,
  },

  'listItem-last': {
    marginRight: metrics.doubleBaseMargin,
  },
});

export default styles;

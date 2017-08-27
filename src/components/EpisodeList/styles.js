import { StyleSheet } from 'react-native';
import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  list: {
    marginTop: metrics.doubleBaseMargin,
  },

  listItem: {
    marginTop: metrics.doubleBaseMargin,
  },

  'listItem-first': {
    marginTop: 0,
  },
});

export default styles;

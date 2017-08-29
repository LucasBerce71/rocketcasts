import { StyleSheet } from 'react-native';
import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listItem: {
    marginTop: metrics.doubleBaseMargin,
  },

  'listItem-first': {
    marginTop: 0,
  },
});

export default styles;

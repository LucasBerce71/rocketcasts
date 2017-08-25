import { StyleSheet } from 'react-native';
import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listSection: {
    marginHorizontal: 0,
  },

  listSectionTitle: {
    marginHorizontal: metrics.section,
  },

  list: {
    marginTop: metrics.marginVertical,
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

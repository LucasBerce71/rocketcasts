import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  ...general,

  searchInput: {
    alignSelf: 'stretch',
    backgroundColor: colors.inputBackground,
    borderRadius: metrics.baseRadius,
    height: 28,
    fontSize: 11,
    paddingHorizontal: metrics.marginHorizontal,
  },
});

export default styles;

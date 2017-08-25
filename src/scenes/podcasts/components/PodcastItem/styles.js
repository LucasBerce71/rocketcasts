import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 150,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },

  image: {
    height: 150,
    resizeMode: 'cover',
    borderRadius: metrics.baseRadius,
  },

  title: {
    color: colors.text,
    fontSize: fonts.regular,
    marginTop: metrics.smallMargin,
    lineHeight: 20,
  },
});

export default styles;

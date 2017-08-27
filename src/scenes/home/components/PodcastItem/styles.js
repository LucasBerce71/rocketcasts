import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

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
    fontWeight: 'bold',
    color: colors.text,
    marginTop: metrics.baseMargin,
    alignSelf: 'center',
  },

  description: {
    fontSize: fonts.medium,
    color: colors.textInactive,
    alignSelf: 'center',
  },
});

export default styles;

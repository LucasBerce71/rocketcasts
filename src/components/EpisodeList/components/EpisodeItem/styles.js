import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },

  image: {
    width: 50,
    resizeMode: 'cover',
    borderRadius: metrics.baseRadius,
  },

  episodeInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: metrics.marginHorizontal,
  },

  title: {
    color: colors.text,
  },

  description: {
    fontSize: fonts.medium,
    color: colors.textInactive,
  },

  moreButton: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
  },

  progress: {
    height: 2,
    backgroundColor: colors.headerSearch,
  },

  content: {
    height: 42,
    backgroundColor: colors.header,
    borderColor: colors.background,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.section,
    justifyContent: 'space-between',
  },

  current: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    color: colors.text,
    fontSize: fonts.medium,
  },

  description: {
    color: colors.textInactive,
    fontSize: fonts.tiny,
  },
});

export default styles;

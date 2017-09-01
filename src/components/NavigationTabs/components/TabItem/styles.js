import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: fonts.small,
  },

  activeTitle: {
    color: colors.text,
  },

  inactiveTitle: {
    color: colors.textInactive,
  },

  activeIcon: {
    color: colors.text,
  },

  inactiveIcon: {
    color: colors.textInactive,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.marginHorizontal,
    height: metrics.navBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.header,
  },
  title: {
    color: colors.text,
    fontSize: fonts.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;

import { TabNavigator } from 'react-navigation';
import { colors } from 'styles';

import Home from 'scenes/home';
import PodcastsPending from 'scenes/podcasts/pages/pending';
import PodcastsSearch from 'scenes/podcasts/pages/search';
import Profile from 'scenes/profile';

const Routes = TabNavigator({
  Home: { screen: Home },
  PodcastsPending: { screen: PodcastsPending },
  PodcastsSearch: { screen: PodcastsSearch },
  Profile: { screen: Profile },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: colors.text,
    inactiveTintColor: colors.textInactive,
    style: {
      backgroundColor: colors.header,
      paddingVertical: 5,
      height: 54,
    },
    labelStyle: {
      fontSize: 11,
      fontFamily: 'Roboto',
    },
  },
});

export default Routes;

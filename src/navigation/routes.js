import { TabNavigator } from 'react-navigation';

import Footer from 'components/Footer';

import Trending from 'scenes/trending';
import PodcastsPending from 'scenes/podcasts/pages/pending';
import PodcastsSearch from 'scenes/podcasts/pages/search';
import Profile from 'scenes/profile';

const Routes = TabNavigator({
  Trending: { screen: Trending },
  PodcastsPending: { screen: PodcastsPending },
  PodcastsSearch: { screen: PodcastsSearch },
  Profile: { screen: Profile },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarComponent: Footer,
});

export default Routes;

import { StackNavigator } from 'react-navigation';

import PodcastList from 'scenes/podcasts/pages/list';

const Routes = StackNavigator({
  PodcastList: { screen: PodcastList },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#333',
    },
    headerTitleStyle: {
      fontSize: 12,
      color: '#FFF',
    },
  },
});

export default Routes;

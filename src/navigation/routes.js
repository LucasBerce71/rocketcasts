import { StackNavigator } from 'react-navigation';

import Main from 'scenes/main';

const Routes = StackNavigator({
  Main: { screen: Main },
});

export default Routes;

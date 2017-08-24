import { NavigationActions } from 'react-navigation';
import Immutable from 'seamless-immutable';
import Routes from './routes';

const initialState = Immutable(Routes.router.getStateForAction(NavigationActions.init()));

const navReducer = (state = initialState, action) => {
  const nextState = Routes.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;

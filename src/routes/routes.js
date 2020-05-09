import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from '../views/components/screens/Home/index';

const AppStack = createSwitchNavigator({
  Home: Home,
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Home: AppStack,
  }),
);

export default Routes;

import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import NewScreen from '../Screens/NewScreen/NewScreen';
class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene component={NewScreen} key={'newTab'} navTransparent initial />
        </Scene>
      </Router>
    );
  }
}
export default Navigation;

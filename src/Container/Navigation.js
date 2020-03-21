import React from 'react';
import {View, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewScreen from '../Screens/NewScreen/NewScreen';
import AboutScreen from '../Screens/AboutScreen/AboutScreen';
import TravelAlertScreen from '../Screens/TravelAlertScreen/TravelAlertScreen';
class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene tabs={true} key="main">
            <Scene
              key="newTab"
              title="New Tab"
              hideNavBar={true}
              component={NewScreen}
              navTransparent={true}
              icon={() => {
                return <Icon name="newspaper-o" size={25} />;
              }}
              initial
            />
            <Scene
              key="aboutTab"
              title="About Tab"
              hideNavBar={true}
              component={AboutScreen}
              icon={() => {
                return <Icon name="info" size={25} />;
              }}
            />
            <Scene
              key="travelAlertTab"
              title="Travel Alert Tab"
              hideNavBar={true}
              component={TravelAlertScreen}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
export default Navigation;

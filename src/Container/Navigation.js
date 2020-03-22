import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewScreen from '../Screens/NewScreen/NewScreen';
import AboutScreen from '../Screens/AboutScreen/AboutScreen';
import TravelAlertScreen from '../Screens/TravelAlertScreen/TravelAlertScreen';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';
class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene tabs={true} key="main" hideNavBar={true}>
            <Scene
              key="newTab"
              title="News"
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
          <Scene key="detailScreen" component={DetailScreen} />
        </Scene>
      </Router>
    );
  }
}
export default Navigation;

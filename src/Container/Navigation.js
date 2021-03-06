import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {BackHandler} from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import NewScreen from '../Screens/NewScreen/NewScreen';
import TravelAlertScreen from '../Screens/TravelAlertScreen/TravelAlertScreen';
import DetailScreen from '../Screens/DetailScreen/DetailNews/DetailScreen';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';
import StatsCountry from '../Screens/DetailScreen/DetailStatsCountry/StatsCountry';
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
                return <IconEntypo name="news" size={25} />;
              }}
              initial
            />
            <Scene
              key="statsTab"
              title="Stats"
              hideNavBar={true}
              component={StatsScreen}
              icon={() => {
                return <IconIonic name="md-stats" size={25} />;
              }}
            />
            <Scene
              key="travelTab"
              title="Travel Alert"
              hideNavBar={true}
              icon={() => {
                return <IconFeather name="alert-circle" size={25} />;
              }}
              component={TravelAlertScreen}
            />
          </Scene>
          <Scene key="detailScreen" component={DetailScreen} />
          <Scene key="statsCountry" component={StatsCountry} navTransparent />
        </Scene>
      </Router>
    );
  }
}
export default Navigation;

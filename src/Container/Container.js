import React from 'react';
import {View, BackHandler, Alert} from 'react-native';
import Navigation from './Navigation';
class Container extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    );
  }
}
export default Container;

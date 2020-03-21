import React from 'react';
import {View, Text} from 'react-native';
import styles from './TravelAlertScreenStyles';
class TravelAlertScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is travel alert tab</Text>
      </View>
    );
  }
}
export default TravelAlertScreen;

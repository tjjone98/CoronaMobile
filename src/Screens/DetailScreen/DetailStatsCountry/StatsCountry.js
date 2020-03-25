import React from 'react';
import {View, Text} from 'react-native';
import styles from './StatsCountryStyles';
class StatsCountry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is stats view</Text>
      </View>
    );
  }
}
export default StatsCountry;

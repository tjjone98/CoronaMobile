import React from 'react';
import {View, Text} from 'react-native';
import styles from './AboutScreenStyles';
class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is tab about</Text>
      </View>
    );
  }
}
export default AboutScreen;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './NewScreenStyles';
class NewScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is new tab</Text>
      </View>
    );
  }
}
export default NewScreen;

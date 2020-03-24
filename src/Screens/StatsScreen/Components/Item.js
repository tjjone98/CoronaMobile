import React from 'react';
import {View, Text} from 'react-native';
import styles from '../StastScreenStyles';
class Item extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.tableHead}>
          <Text style={styles.textData}>{this.props.item.country}</Text>
        </View>
        <View style={styles.columnData}>
          <Text style={styles.textData}>{this.props.item.confirmed}</Text>
        </View>
        <View style={styles.columnData}>
          <Text style={styles.textData}>{this.props.item.deaths}</Text>
        </View>
        <View style={styles.columnData}>
          <Text style={styles.textData}>{this.props.item.recovered}</Text>
        </View>
      </View>
    );
  }
}
export default Item;

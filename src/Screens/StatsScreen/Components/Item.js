import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../StastScreenStyles';
import {Actions} from 'react-native-router-flux';
class Item extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            Actions.statsCountry({country: this.props.item});
          }}
          style={styles.tableHead}>
          <Text style={styles.textData}>{this.props.item.countryName}</Text>
        </TouchableOpacity>
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

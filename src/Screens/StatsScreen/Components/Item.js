import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../StastScreenStyles';
import {Actions} from 'react-native-router-flux';
import Flag from 'react-native-flags';
// import {Flag} from 'react-native-svg-flagkit';
class Item extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            Actions.statsCountry({country: this.props.item});
          }}
          style={styles.tableHead}>
          <Flag code={`${this.props.item.countryCode}`} size={24} />
          <Text style={styles.textData}>{this.props.item.country}</Text>
        </TouchableOpacity>
        <View style={styles.columnData}>
          <Text style={styles.textData}>{this.props.item.totalConfirmed}</Text>
        </View>
        <View style={styles.columnData}>
          <Text style={styles.textData}>{this.props.item.totalDeaths}</Text>
        </View>
        <View style={styles.columnData}>
          <Text style={styles.textData}>{this.props.item.totalRecovered}</Text>
        </View>
      </View>
    );
  }
}
export default Item;

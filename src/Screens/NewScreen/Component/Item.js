import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../NewScreenStyles';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';

class Item extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          Actions.detailScreen({article: this.props.item});
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.item_image}
            source={{uri: this.props.item.urlToImage}}
          />
          <View style={styles.item_view}>
            <Text style={styles.title}>{this.props.item.title}</Text>
            <View style={styles.siteName}>
              <Text style={styles.textSiteName}>
                {this.props.item.siteName}
              </Text>
              <Text style={styles.textPublishAt}>
                {moment(`${this.props.item.publishedAt}`, 'YYYYMMDD').fromNow()}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item;

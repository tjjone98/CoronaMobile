import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './DetailScreenStyles';
class DetailScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.txtTitle}>{this.props.article.title}</Text>
          </View>
          <View style={styles.wrapImage}>
            <Image
              style={styles.image}
              source={{uri: this.props.article.urlToImage}}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.txtContent}>{this.props.article.content}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default DetailScreen;

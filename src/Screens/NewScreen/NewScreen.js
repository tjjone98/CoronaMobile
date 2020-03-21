import React from 'react';
import {View, Text} from 'react-native';
import styles from './NewScreenStyles';
import {inject, observer} from 'mobx-react';
@inject('statsStore')
@observer
class NewScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.statsStore.getStats();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Live now</Text>
        <View style={styles.stats}>
          <View style={styles.card}>
            <Text style={styles.confirmText}>Confirmed</Text>
            <View style={styles.confirmView} />
            <Text style={styles.confirm}>
              {this.props.statsStore.stats.confirmed}
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.deathText}>Deaths</Text>
            <View style={styles.deathView} />
            <Text style={styles.death}>
              {this.props.statsStore.stats.deaths}
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.recoverText}>Recovered</Text>
            <View style={styles.recoverView} />
            <Text style={styles.recover}>
              {this.props.statsStore.stats.recovered}
            </Text>
          </View>
        </View>
        <View style={styles.list} />
      </View>
    );
  }
}
export default NewScreen;

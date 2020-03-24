import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './StastScreenStyles';
import colors from '../../Themes/Colors';
import {inject, observer} from 'mobx-react';
import Item from './Components/Item';
@inject('analyticsStore')
@inject('statsStore')
@observer
class StatsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  async componentDidMount() {
    await this.fetchAnalytics();
  }

  /*
   *  function support fetch data
   * */
  fetchAnalytics = async () => {
    await this.props.analyticsStore.getListAnalytics();
    await this.props.statsStore.getStats();
    this.setState({
      isLoading: false,
    });
  };

  /*
   *  render view
   * */
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.4,
            paddingLeft: 3,
          }}>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 1,
              }}>
              Country
            </Text>
            <Text style={{flex: 1, color: colors.confirmText}}>
              {this.props.analyticsStore.listAnalytics.length}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{flex: 1, color: colors.confirmText, fontWeight: 'bold'}}>
              Confirmed
            </Text>
            <Text style={{flex: 1, color: colors.confirmText}}>
              {this.props.statsStore.stats.confirmed}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 0.4,
              alignItems: 'center',
            }}>
            <Text
              style={{flex: 1, color: colors.deathText, fontWeight: 'bold'}}>
              Deaths
            </Text>
            <Text style={{flex: 1, color: colors.deathText}}>
              {this.props.statsStore.stats.deaths}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text
              style={{flex: 1, color: colors.recoverText, fontWeight: 'bold'}}>
              Recovered
            </Text>
            <Text style={{flex: 1, color: colors.recoverText}}>
              {this.props.statsStore.stats.recovered}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 9,
          }}>
          <FlatList
            data={this.props.analyticsStore.listAnalytics}
            removeClippedSubviews={true}
            keyExtractor={({item}, index) => index.toString()}
            renderItem={({item}) => {
              return <Item item={item} />;
            }}
          />
        </View>
      </View>
    );
  }
}
export default StatsScreen;

import React from 'react';
import {View, Text} from 'react-native';
import styles from './StatsCountryStyles';
import {inject, observer} from 'mobx-react';
@inject('statsStore')
@observer
class StatsCountry extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.fetchStatsCountry();
  }

  /**
   * function support
   */
  fetchStatsCountry = async () => {
    await this.props.statsStore.getStatsCountry(this.props.country.countryCode);
  };
  /**
   * render view
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countryOver}>
          <Text>{this.props.statsStore.statsCountry.country}</Text>
        </View>
        <View style={styles.countryDetail}>
          <View style={{flex: 1, marginTop: 40}}>
            <View style={styles.overview}>
              <View style={styles.columnOverview}>
                <Text style={styles.textConfirm}>
                  {this.props.statsStore.statsCountry.totalConfirmed}
                </Text>
                <Text style={styles.explain}>Confirmed</Text>
                <Text style={styles.textDescriptionConfirm}>
                  + {this.props.statsStore.statsCountry.dailyConfirmed} since
                  yesterday
                </Text>
              </View>
              <View style={styles.columnOverview}>
                <Text style={styles.textDeath}>
                  {this.props.statsStore.statsCountry.totalDeaths}
                </Text>
                <Text style={styles.explain}>Deaths</Text>
                <Text style={styles.textDescriptionDeath}>
                  + {this.props.statsStore.statsCountry.dailyDeaths} since
                  yesterday
                </Text>
              </View>
              <View style={styles.columnOverview}>
                <Text style={styles.textRecovered}>
                  {this.props.statsStore.statsCountry.totalRecovered}
                </Text>
                <Text style={styles.explain}>Recovered</Text>
                <Text style={styles.textDescriptionDeath} />
              </View>
            </View>
            <View style={styles.chart}>
              <Text>This is chart</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default StatsCountry;

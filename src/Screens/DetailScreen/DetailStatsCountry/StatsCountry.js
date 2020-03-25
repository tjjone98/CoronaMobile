import React from 'react';
import {View, Text} from 'react-native';
import styles from './StatsCountryStyles';
import {inject, observer} from 'mobx-react';
// import {Flag} from 'react-native-svg-flagkit';
import {StackedBarChart} from 'react-native-svg-charts';
@inject('statsStore')
@inject('analyticsStore')
@observer
class StatsCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      colors: ['#65B0FC', '#84EBB6', '#F7C75F'],
      keys: ['total_confirmed', 'total_recovered', 'total_deaths'],
    };
  }
  async componentDidMount() {
    await this.fetchStatsCountry().then(() => {
      this.setState({
        data: this.props.analyticsStore.countryAnalytics,
      });
    });
  }

  /**
   * function support
   */
  fetchStatsCountry = async () => {
    await this.props.statsStore.getStatsCountry(this.props.country.countryCode);
    await this.props.analyticsStore.getCountryAnalytics(
      this.props.country.countryCode,
    );
  };
  /**
   * render view
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countryOver}>
          <Text style={styles.textDeath}>
            {this.props.statsStore.statsCountry.country}
          </Text>
          {/*<Flag*/}
          {/*  id={`${this.props.country.countryCode}`}*/}
          {/*  width={40}*/}
          {/*  height={20}*/}
          {/*/>*/}
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
              <StackedBarChart
                style={{height: 200, padding: 4}}
                keys={this.state.keys}
                colors={this.state.colors}
                data={this.state.data}
                showGrid={false}
                contentInset={{top: 30, bottom: 30}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default StatsCountry;

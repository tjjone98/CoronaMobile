import React from 'react';
import {View, Text, Picker, FlatList} from 'react-native';
import styles from './TravelAlertScreenStyles';
import {inject, observer} from 'mobx-react';
@inject('travelStore')
@observer
class TravelAlertScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      data: '',
    };
  }
  async componentDidMount() {
    await this.fetchTravelAlert();
  }

  /*
   * function to fetch data
   * */
  fetchTravelAlert = async () => {
    await this.props.travelStore.getTravelAlertList();
  };
  fetchTravelAlertCountry = async country => {
    await this.props.travelStore.filterTravelAlert(country);
    this.setState({
      data: String(this.props.travelStore.travelAlert.alertMessage).split('|'),
    });
  };

  /*
   *  render view
   * */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.picker}>
          <Picker
            selectedValue={this.state.language}
            itemStyle={styles.itemStyle}
            onValueChange={async (itemValue, itemIndex) => {
              this.setState({
                language: itemValue,
              });
              await this.fetchTravelAlertCountry(itemValue);
            }}>
            {this.props.travelStore.travelList.map(e => {
              return (
                <Picker.Item
                  key={e.toString()}
                  label={e.countryName}
                  value={e.countryCode}
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.country}>
          <Text>Travel alert</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => {
              return (
                <View style={{}}>
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
export default TravelAlertScreen;

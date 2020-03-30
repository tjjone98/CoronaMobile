import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Picker,
  BackHandler,
  Alert,
} from 'react-native';
import styles from './NewScreenStyles';
import {inject, observer} from 'mobx-react';
import Item from './Component/Item';
import PushNotification from 'react-native-push-notification';
import {Actions} from 'react-native-router-flux';
@inject('statsStore')
@inject('newStore')
@observer
class NewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      isLoading: true,
      language: '',
    };
    PushNotification.configure({
      onRegister: function(token) {
        console.log('TOKEN:', token);
      },
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }
  async componentDidMount() {
    await this.fetchDataGlobal();
    await this.fetchListNews();
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    // this.testPush();
  }

  /*
   *  function support
   * */

  backAction = () => {
    if (Actions.currentScene === '_newTab') {
      Alert.alert('Exit', 'Are you sure?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp(), style: 'yes'},
      ]);
      return true;
    } else {
      return false;
    }
  };

  testPush = () => {
    setTimeout(
      PushNotification.localNotification({
        ticker: 'My Notification Ticker', // (optional)
        autoCancel: true, // (optional) default: true
        largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
        smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
        bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
        subText: 'This is a subText', // (optional) default: none
        color: 'red', // (optional) default: system default
        vibrate: true, // (optional) default: true
        vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      }),
      2000,
    );
  };
  fetchDataGlobal = async () => {
    await this.props.statsStore.getStats();
  };
  fetchListNews = async () => {
    await this.props.newStore.getListNews(0);
    this.setState({
      data: this.props.newStore.listNews,
      isLoading: false,
    });
  };
  loadMoreData = async () => {
    this.setState({
      isLoading: true,
      offset: this.state.offset + 9,
    });
    await this.props.newStore.getListNewsNext(this.state.offset);
    this.setState({
      data: this.state.data.concat(this.props.newStore.listNewsNext),
      isLoading: false,
    });
  };
  renderFooter = () => {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <View>
        <ActivityIndicator style={{color: '#000'}} />
        <Text style={{textAlign: 'center'}}>Đang tải</Text>
      </View>
    );
  };

  /*
   *  render view
   * */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stats}>
          <View style={styles.select}>
            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.language}
                itemStyle={styles.itemStyle}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    language: itemValue,
                  });
                }}>
                <Picker.Item label="Global" value="global" />
                <Picker.Item label="Viet Nam" value="vn" />
              </Picker>
            </View>
          </View>
          <View style={styles.statsDetail}>
            <View style={styles.card}>
              <Text style={styles.confirmText}>Confirmed</Text>
              <View style={styles.confirmView} />
              <Text style={styles.confirm}>
                {this.props.statsStore.stats.totalConfirmed}
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.deathText}>Deaths</Text>
              <View style={styles.deathView} />
              <Text style={styles.death}>
                {this.props.statsStore.stats.totalDeaths}
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.recoverText}>Recovered</Text>
              <View style={styles.recoverView} />
              <Text style={styles.recover}>
                {this.props.statsStore.stats.totalRecovered}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <FlatList
            data={this.state.data}
            numColumns={1}
            onEndReachedThreshold={2}
            onEndReached={this.loadMoreData}
            ListFooterComponent={this.renderFooter}
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
export default NewScreen;

import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Picker} from 'react-native';
import styles from './NewScreenStyles';
import {inject, observer} from 'mobx-react';
import Item from './Component/Item';
@inject('statsStore')
@inject('newStore')
@observer
class NewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 1,
      data: [],
      isLoading: true,
      language: '',
    };
  }
  async componentDidMount() {
    await this.fetchDataGlobal();
    await this.props.newStore.getListNews(this.state.offset);
    this.setState({
      data: this.props.newStore.listNews,
      isLoading: false,
    });
  }

  /*
   *  function support
   * */
  loadMoreData = async () => {
    this.setState({
      isLoading: true,
      offset: this.state.offset + 10,
    });
    await this.props.newStore.getListNewsNext(this.state.offset);
    this.setState({
      data: this.state.data.concat(this.props.newStore.listNewsNext),
      isLoading: false,
    });
  };
  fetchDataCountry = async () => {
    await this.props.statsStore.getStatsCountry();
  };
  fetchDataGlobal = async () => {
    await this.props.statsStore.getStats();
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
                onValueChange={async (itemValue, itemIndex) => {
                  this.setState({
                    language: itemValue,
                  });
                  if (itemValue === 'global') {
                    this.fetchDataGlobal();
                  } else {
                    this.fetchDataCountry();
                  }
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

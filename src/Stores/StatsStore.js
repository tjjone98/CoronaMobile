import {action, observable} from 'mobx';
import apiCorona from '../Services/ApiCorona';
class StatsStore {
  @observable stats = {};
  @observable statsTop = [];
  @observable statsCountry = [];

  // get stats of global
  @action async getStats() {
    try {
      const response = await apiCorona.getStats();
      if (response.status === 200 && response.data) {
        this.stats = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  // get stats of country
  @action async getStatsCountry() {
    try {
      const response = await apiCorona.getStatsCountry();
      if (response.status === 200 && response.data) {
        this.stats = response.data[0];
      }
    } catch (e) {
      console.log(e);
    }
  }
}
const statsStore = new StatsStore();
export default statsStore;

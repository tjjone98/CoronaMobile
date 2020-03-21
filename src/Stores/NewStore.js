import {action, observable} from 'mobx';
import apiCorona from '../Services/ApiCorona';
class NewStore {
  @observable listNews = [];
  @observable stats = {};
  @observable statsTop = [];
  @observable statsCountry = [];
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
  @action async getStatsTop() {
    try {
      const response = await apiCorona.getStatsTop();
      if (response.status === 200 && response.data) {
        this.statsTop = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
  @action async getStatsCountry() {
    try {
      const response = await apiCorona.getStatsCountry();
      if (response.status === 200 && response.data) {
        this.statsCountry = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
  @action async getListNews() {
    try {
      const response = await apiCorona.getListNews();
      if (response.status === 200 && response.data) {
        this.listNews = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
const newStore = new NewStore();
export default newStore;

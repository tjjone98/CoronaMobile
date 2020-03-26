import {action, observable} from 'mobx';
import apiCorona from '../Services/ApiCorona';
class AnalyticsStore {
  @observable listAnalytics = [];
  @observable countryAnalytics = [];
  // get analytics list
  @action async getListAnalytics() {
    try {
      const response = await apiCorona.getAnalytics();
      if (response.status === 200 && response.data) {
        this.listAnalytics = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
  @action async getCountryAnalytics(countryCode) {
    try {
      const response = await apiCorona.getCountryAnalytics(countryCode);
      if (response.status === 200 && response.data) {
        this.countryAnalytics = response.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
const analyticsStore = new AnalyticsStore();
export default analyticsStore;

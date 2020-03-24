import apiCorona from '../Services/ApiCorona';
import {action, observable} from 'mobx';
class TravelStore {
  @observable travelList = [];
  @observable travelAlert = {};

  // get travel alert list
  @action async getTravelAlertList() {
    try {
      const response = await apiCorona.getTravelAlert();
      if (response.status === 200 && response.data) {
        this.travelList = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // filter travel alert
  @action async filterTravelAlert(country) {
    await Promise.all(
      this.travelList.filter(element => {
        if (element.countryCode === country) {
          this.travelAlert = element;
        }
      }),
    );
  }
}
const travelStore = new TravelStore();
export default travelStore;

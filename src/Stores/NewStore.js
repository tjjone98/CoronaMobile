import {action, observable} from 'mobx';
import apiCorona from '../Services/ApiCorona';
class NewStore {
  @observable listNews = [];
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

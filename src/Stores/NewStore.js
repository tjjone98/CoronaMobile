import {action, observable} from 'mobx';
import apiCorona from '../Services/ApiCorona';

class NewStore {
  @observable listNews = [];
  @observable listNewsNext = [];

  // get list news
  @action async getListNews(offset) {
    try {
      const response = await apiCorona.getListNews(offset);
      if (response.status === 200 && response.data) {
        this.listNews = response.data.items;
      }
    } catch (e) {
      console.log(e);
    }
  }

  // get list news next
  @action async getListNewsNext(offset) {
    try {
      const response = await apiCorona.getListNews(offset);
      if (response.status === 200 && response.data) {
        this.listNewsNext = response.data.items;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
const newStore = new NewStore();
export default newStore;

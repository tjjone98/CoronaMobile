import axios from 'axios';
class ApiCorona {
  async getListNews() {
    return axios.get('');
  }
}
export default new ApiCorona();

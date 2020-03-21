import axios from 'axios';
class ApiCorona {
  async getListNews() {
    return axios.get('');
  }

  /*
   *  return the stats of all country
   * */
  async getStats() {
    return axios.get('http://api.coronatracker.com/v2/stats');
  }

  /*
   *  return country stats
   * */
  async getStatsCountry() {
    return axios.get('http://api.coronatracker.com/v2/stats/custom');
  }

  /*
   *  return top stats
   * */
  async getStatsTop() {
    return axios.get('http://api.coronatracker.com/v2/stats/top');
  }
}
export default new ApiCorona();

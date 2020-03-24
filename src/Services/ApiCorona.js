import axios from 'axios';
class ApiCorona {
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
    return axios.get(
      'http://api.coronatracker.com/v3/stats/bno/total_daily_cases/country?countryCode=vn',
    );
  }

  /*
   *  return list news of country
   * */
  async getListNews(offset) {
    return axios.get(
      `http://api.coronatracker.com/news/trending?limit=9&language=vi&offset=${offset}`,
    );
  }
  /*
   *  return list analytics
   * */
  async getAnalytics() {
    return axios.get('http://api.coronatracker.com/v3/stats/latest');
  }
  /*
   * travel alert
   * */
  async getTravelAlert() {
    return axios.get('http://api.coronatracker.com/v1/travel-alert');
  }
}
export default new ApiCorona();

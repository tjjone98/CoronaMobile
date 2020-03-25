import axios from 'axios';
class ApiCorona {
  /*
   *  return the stats of all country
   * */
  async getStats() {
    return axios.get(
      'https://api.coronatracker.com/v3/stats/worldometer/global',
    );
  }

  /*
   *  return country stats
   * */
  async getStatsCountry(countryCode) {
    return axios.get(
      `https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${countryCode}`,
    );
  }

  /*
   *  return list news of country
   * */
  async getListNews(offset) {
    return axios.get(
      `https://api.coronatracker.com/news/trending?limit=9&offset=${offset}&countryCode=VN&country=Vietnam&language=vi`,
    );
  }
  /*
   *  return list analytics
   * */
  async getAnalytics() {
    return axios.get('https://api.coronatracker.com/v3/analytics/country');
  }
  /*
   * travel alert
   * */
  async getTravelAlert() {
    return axios.get('http://api.coronatracker.com/v1/travel-alert');
  }
}
export default new ApiCorona();

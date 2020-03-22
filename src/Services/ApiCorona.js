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
   *  return top stats
   * */
  async getStatsTop() {
    return axios.get('http://api.coronatracker.com/v2/stats/top');
  }

  /*
   *  return list new of country
   * */

  async getListNews(offset) {
    return axios.get(
      `http://api.coronatracker.com/news/trending?limit=9&language=vi&offset=${offset}`,
    );
  }
}
export default new ApiCorona();

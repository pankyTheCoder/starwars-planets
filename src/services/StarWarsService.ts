import axios from "axios";

export default class StarWarsService {
  /**
   * StarWarsService
   * @returns {Promise}
   */
  static discoverPlanets(pageNum: number) {
    const baseUrl = process.env.VUE_APP_BASE_URL;

    return axios.get(`${baseUrl}planets/?page=${pageNum}`);
  }
}

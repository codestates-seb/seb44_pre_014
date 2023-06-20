import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000',
});

axiosClient.defaults.withCredentials = true;

class API {
  async CALL({ method, url, data = null }) {
    try {
      const response = await axiosClient({
        url,
        method,
        data,
      });

      return response;
    } catch (error) {
      if (error.response && error.response.status === 401) {
      }

      console.error('# client-error-axios: ', error);
      return error.response;
    }
  }

  GET(url: string) {
    return this.CALL({
      method: 'GET',
      url,
    });
  }

  POST({ url, ...params }) {
    return this.CALL({
      method: 'POST',
      url,
      ...params,
    });
  }

  PUT({ url, ...params }) {
    return this.CALL({
      method: 'PUT',
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }) {
    return this.CALL({
      method: 'DELETE',
      url,
      ...params,
    });
  }

  PATCH({ url, ...params }) {
    return this.CALL({
      method: 'PATCH',
      url,
      ...params,
    });
  }
}

export default new API();

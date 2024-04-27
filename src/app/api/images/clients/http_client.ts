import axios, { AxiosInstance } from 'axios';
// import axiosCurlirize from 'axios-curlirize'; activate on debugging

export default interface HTTPClientI {
  get(url: string, params?: any): Promise<any>;
}

export class HTTPClient implements HTTPClientI {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL: baseURL, timeout: 1000 });
  }

  public async get(url: string, params?: any): Promise<any> {
    // axiosCurlirize(this.client); activate on debugging

    return this.client.get(url, { params: params });
  }
}

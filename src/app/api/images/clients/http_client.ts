import axios, {Axios, AxiosInstance, AxiosResponse} from 'axios';

export default interface HTTPClientI {
    get(url: string, params?: any): Promise<any>
}

export class HTTPClient implements HTTPClientI {
    private client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({baseURL: baseURL, timeout: 1000})
    }

    public async get(url: string, params?: any): Promise<any> {
        return this.client.get(url, {params: params})
    }
}
import HTTPClientI from '@/app/api/images/clients/http_client';
import { ImagesAPIResponse } from '@/app/api/images/models/images-api-response';

export class NasaAPIHTTPRepository {
  httpClient: HTTPClientI;

  constructor(httpClient: HTTPClientI) {
    this.httpClient = httpClient;
  }

  async getWelcomePageImageInfo(): Promise<ImagesAPIResponse> {
    try {
      const response = await this.httpClient.get('/planetary/apod', {
        api_key: process.env.NASA_API_KEY,
      });

      const { data } = response;

      const { url, title, copyright } = data;

      return new ImagesAPIResponse(url, title, copyright);
    } catch (e) {
      return new ImagesAPIResponse(
        'https://apod.nasa.gov/apod/image/2308/ngc1360_v2_1024.jpg',
        "The Robin's Egg Nebula",
        'Dong Liang'
      );
    }
  }
}

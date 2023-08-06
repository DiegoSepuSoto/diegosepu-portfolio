import HTTPClientI from "@/app/api/images/clients/http_client";

export class NasaAPIHTTPRepository {
    httpClient: HTTPClientI;

    constructor(httpClient: HTTPClientI) {
        this.httpClient = httpClient;
    }

    async getWelcomePageImageURL(): Promise<string> {
        try {
            const response = await this.httpClient.get("/planetary/apod",
                { api_key: process.env.NASA_API_KEY });

            const {data} = response;

            return data.url;
        } catch (e) {
            return 'https://apod.nasa.gov/apod/image/2308/ngc1360_v2_1024.jpg';
        }
    }
}
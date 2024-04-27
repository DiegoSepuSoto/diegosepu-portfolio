import { NextResponse } from 'next/server';
import { HTTPClient } from '@/app/api/images/clients/http_client';
import { NasaAPIHTTPRepository } from '@/app/api/images/infrastructure/http/nasa_api/nasa_api_http_repository';
import { ImagesAPIResponse } from '@/app/api/images/models/images-api-response';

export async function GET() {
  const nasaAPIHTTPClient = new HTTPClient('https://api.nasa.gov');
  const imageRepository = new NasaAPIHTTPRepository(nasaAPIHTTPClient);

  const imageInfo: ImagesAPIResponse =
    await imageRepository.getWelcomePageImageInfo();

  return NextResponse.json(imageInfo);
}

import { NextResponse } from 'next/server'
import {HTTPClient} from "@/app/api/images/clients/http_client";
import {NasaAPIHTTPRepository} from "@/app/api/images/infrastructure/http/nasa_api/nasa_api_http_repository";

export async function GET() {
    const nasaAPIHTTPClient = new HTTPClient('https://api.nasa.gov')
    const imageRepository = new NasaAPIHTTPRepository(nasaAPIHTTPClient)

    const imageURL = await imageRepository.getWelcomePageImageURL()

    return NextResponse.json({ imageURL })
}
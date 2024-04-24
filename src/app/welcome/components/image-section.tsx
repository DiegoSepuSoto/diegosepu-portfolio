"use client";

import {useEffect, useState} from "react";
import Image from 'next/image'

import {NasaAPIHTTPRepository} from "@/app/api/images/infrastructure/http/nasa_api/nasa_api_http_repository";
import {HTTPClient} from "@/app/api/images/clients/http_client";

export default function ImageSection() {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        (async function () {
            const response = await fetch("/api/images")
            const data = await response.json()
            setImageURL(data.imageURL)
        })();
    }, [])

    return (
        <div className="h-screen flex flex-col gap-16 items-center justify-center col-start-3 col-end-7 bg-gray-700
        shadow-[-10px_0_5px_0_rgb(156,163,175,0.28)]">
            <h1 className="text-3xl text-white font-black">
                Look at this awesome picture!
            </h1>
            {
                imageURL && <Image src={imageURL}
                                   alt="Random image"
                                   width={400} height={300}
                />
            }
        </div>
    )
}

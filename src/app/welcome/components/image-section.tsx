"use client";

import {useEffect, useState} from 'react'
import {Window, WindowHeader, Button, WindowContent} from 'react95';
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
        <div className="h-screen flex flex-col gap-16 items-center justify-center col-start-3 col-end-7 bg-w95-wp">
            <h1 className="text-3xl text-white font-black">
                Look at this awesome picture!
            </h1>
            {
                imageURL && <Window className='window'>
                    <WindowHeader className='window-title'>
                        <span>NASA API Component</span>
                    </WindowHeader>
                    <WindowContent>
                        <Image src={imageURL}
                               alt="Random image"
                               width={400} height={300}
                        />
                    </WindowContent>
                </Window>
            }
        </div>
    )
}

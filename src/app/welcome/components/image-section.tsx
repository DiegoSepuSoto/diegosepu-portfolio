'use client';

import { useEffect, useState } from 'react';
import { Window, WindowHeader, Button, WindowContent } from 'react95';
import Image from 'next/image';

export default function ImageSection() {
  const [imageURL, setImageURL] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageCopyright, setImageCopyright] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch('/api/images');

      const data = await response.json();

      setImageURL(data.url);
      setImageTitle(data.imageTitle);
      setImageCopyright(data.copyright);
    })();
  }, []);

  return (
    <div className='col-start-3 col-end-7 flex h-screen flex-col items-center justify-center gap-16 bg-w95-wp'>
      <h1 className='text-white text-3xl font-black'>
        Look at this awesome picture from NASA!
      </h1>
      {imageURL && (
        <Window className='window'>
          <WindowHeader className='window-title'>
            <span>{imageTitle}</span>
          </WindowHeader>
          <WindowContent>
            <Image src={imageURL} alt='Random image' width={400} height={300} />

            <p className='float-right pt-8'>&copy; {imageCopyright}</p>
          </WindowContent>
        </Window>
      )}
    </div>
  );
}

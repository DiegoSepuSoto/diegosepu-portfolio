'use client';
// @ts-ignore
import useSound from 'use-sound';

import Title from '@/app/welcome/components/title';
import ImageSection from '@/app/welcome/components/image-section';
import { useKonami } from 'react-konami-code';

export default function WelcomePage() {
  const [play] = useSound('/sounds/sound.mp3');

  useKonami(play);

  return (
    <main className='grid grid-cols-6'>
      {Title()}

      {ImageSection()}
    </main>
  );
}

import { Frame, Separator } from 'react95';

export default function Title() {
  return (
    <div className='col-start-1 col-end-3 flex h-screen flex-col items-center justify-center gap-16 bg-bsod p-12'>
      <Frame variant={'outside'} shadow className={'p-10'}>
        <h1 className='pb-6 text-4xl font-black'>
          Hi! My name is Diego Sepúlveda
        </h1>
        <Separator />
        <h4 className='pt-6 text-xl'>
          I&apos;m a Fullstack Software Engineer looking forward to learn more
          about Observability, DevOps Culture and Web Development in general.
        </h4>
      </Frame>
    </div>
  );
}

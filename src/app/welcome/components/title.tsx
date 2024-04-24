import {Frame, Separator} from 'react95';

export default function Title() {
    return (
        <div
            className="h-screen flex flex-col items-center gap-16 p-12 justify-center col-start-1 col-end-3 bg-bsod">
            <Frame variant={'outside'} shadow className={'p-10'}>
                <h1 className="text-4xl font-black pb-6">Hi! My name is Diego Sepúlveda</h1>
                <Separator />
                <h4 className="text-xl pt-6">I&apos;m a Fullstack Software Engineer looking forward to learn more about
                    Observability, DevOps Culture and Web Development in general.</h4>
            </Frame>
        </div>
    )
}

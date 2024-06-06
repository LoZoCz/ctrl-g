import { FC } from 'react'

const HeroSection: FC = () => {
    return (
        <section className="mx-auto flex min-h-screen max-w-screen-xl items-center justify-between gap-6 pt-[var(--header-size)]">
            <div className="space-y-8">
                <h1 className="max-w-screen-md text-5xl font-semibold">
                    Ctrl-G: Your gateway to the gaming world
                </h1>
                <div className="space-y-4">
                    <p className="max-w-screen-sm text-lg">
                        Looking for a game that will captivate you for hours on
                        end? Don&apos;t know what to play on your new PC,
                        console or phone? Ctrl-G is the perfect place for you!
                    </p>
                    <p className="max-w-screen-sm text-lg">
                        We offer a vast database of games for all platforms,
                        from the latest hits to classic gems. You&apos;ll find
                        games for everyone - from hardcore gamers to casual
                        players.
                    </p>
                </div>
                <button className="btn btn-primary btn-lg text-2xl">
                    Start playing!
                </button>
            </div>
            <div className="grid aspect-[9/14] w-[30rem] place-items-center rounded-md bg-slate-600">
                <p>Popular game character - list on load</p>
            </div>
        </section>
    )
}

export default HeroSection

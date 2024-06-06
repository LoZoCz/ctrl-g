import { FC } from 'react'

const RecoSection: FC = () => {
    return (
        <section className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-6 pt-[var(--header-size)]">
            <div className="space-y-4">
                <h2 className="text-center text-5xl font-semibold">
                    Top 10 games this week
                </h2>
                <p className="text-center text-sm">
                    See what other players are playing! Here is a list of the 10
                    most popular games this week.
                </p>
            </div>
            <div className="flex flex-wrap justify-evenly gap-8">
                {Array.from({ length: 10 }).map((_, id) => (
                    <div
                        key={id}
                        className="grid aspect-video w-60 place-items-center rounded-md bg-slate-600 [&:nth-child(-n+3)]:w-80 [&:nth-child(-n+3)]:odd:mt-8"
                    >
                        <p className="text-center">
                            Popular game - info about and link
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecoSection

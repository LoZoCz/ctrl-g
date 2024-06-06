import { FC } from 'react'

const CateSection: FC = () => {
    return (
        <section className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-6 pt-[var(--header-size)]">
            <div className="space-y-4">
                <h2 className="text-center text-5xl font-semibold">
                    Browse by category
                </h2>
                <p className="text-center text-sm">
                    Choose a category that interests you and discover games
                    you&apos;ll love!
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {Array.from({ length: 12 }).map((_, id) => (
                    <div
                        key={id}
                        className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600"
                    >
                        <p>Game categorie</p>
                    </div>
                ))}
            </div>
            <button className="btn btn-solid-primary">See more</button>
        </section>
    )
}

export default CateSection

export default function Home() {
    return (
        <main className="grid gap-8">
            <section className="mx-auto flex min-h-screen max-w-screen-xl items-center justify-between gap-6 pt-[var(--header-size)]">
                <div className="space-y-8">
                    <h1 className="text-5xl font-semibold">Hero main title</h1>
                    <p className="max-w-screen-sm text-xl">
                        Hero subtitle - Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam rem molestias omnis quas
                        possimus eum iure laborum, repellendus iusto facere.
                    </p>
                    <div className="flex gap-6">
                        <button className="btn btn-primary">Hot takes</button>
                        <button className="btn btn-outline-secondary">
                            Categories
                        </button>
                    </div>
                </div>
                <div className="grid aspect-[9/14] w-[30rem] place-items-center rounded-md bg-slate-600">
                    <p>Popular game character - list on load</p>
                </div>
            </section>
            <section className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-6 pt-[var(--header-size)]">
                <h1 className="text-5xl font-semibold">
                    Hot takes - last week
                </h1>
                <div className="flex justify-evenly gap-8">
                    <div className="grid aspect-[9/14] w-[20rem] place-items-center rounded-md bg-slate-600">
                        <p>Popular game character - list on load</p>
                    </div>
                    <div className="grid aspect-[9/14] w-[20rem] place-items-center rounded-md bg-slate-600">
                        <p>Popular game character - list on load</p>
                    </div>
                    <div className="grid aspect-[9/14] w-[20rem] place-items-center rounded-md bg-slate-600">
                        <p>Popular game character - list on load</p>
                    </div>
                </div>
            </section>
            <section className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center gap-6 pt-[var(--header-size)]">
                <h1 className="text-5xl font-semibold">Hero main title</h1>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                    <div className="grid aspect-video w-[16rem] place-items-center rounded-md bg-slate-600">
                        <p>Game categorie</p>
                    </div>
                </div>
                <button className="btn btn-solid-primary">View more</button>
            </section>
        </main>
    )
}

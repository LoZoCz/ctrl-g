import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CTRL-G - 🎮',
    description:
        'Looking for a game that will captivate you for hours on end? Don&apos;t know what to play on your new PC, console or phone? Ctrl-G is the perfect place for you! We offer a vast database of games for all platforms,from the latest hits to classic gems. You&apos;llfind games for everyone - from hardcore gamers tocasual players.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border border-transparent border-b-slate-500 bg-backgroundPrimary px-6 py-4">
                    <h1 className="text-5xl font-bold">CTRL-G</h1>
                    <div className="flex gap-6">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-secondary">Sign up</button>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}

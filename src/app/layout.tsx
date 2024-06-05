import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'CTRL-G - 🎮',
    description:
        'Site that can help you with choosing the game with the best price possible on the market',
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
                    <h1 className="text-6xl">Title</h1>
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

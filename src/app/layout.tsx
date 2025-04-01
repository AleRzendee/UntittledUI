import { ReactNode } from 'react'
import next from 'next';

import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="relative min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
                    <Sidebar />

                    <main className="max-w-screen px-4 pb-12 pt-24 lg:col-start-2 lg:w-auto lg:px-8 lg:pt-8">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
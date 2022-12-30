import Head from "next/head"
import Navbar from "./navbar"

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
    <div>
        <Head>
            <title>Mindful</title>
            <meta name="description" content="Mindful App SEO Things/Home" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar></Navbar>
        </header>
        <main>{children}</main>
    </div>
    )
}
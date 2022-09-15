import Head from "next/head";
import React, { FC, PropsWithChildren } from "react"
import { Navbar } from "../ui";

interface LayoutProps {
    title?: string
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="JesusMH" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keyword" content={`${title} pokemon, pokemones, pokedex`} />
                <meta property="og:title" content={`Información sobre pokemon ${title} `} />
                <meta property="og:description" content={`En ésta pagina encontrarás una breve información sobre el pokemon ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>

            <Navbar />
            <main style={{
                padding: "0px 20px"
            }}>
                {children}
            </main>
        </>
    );
}


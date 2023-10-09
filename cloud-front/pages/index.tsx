import Head from "next/head";
import '../app/globals.css'
export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <h1>Hello World</h1>
            </main>
        </>
    );
}
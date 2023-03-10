import Head from 'next/head'
import Header from '../components/Header'

export default function Home({ data, error }: { data: string; error?: string }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Next TS Prettier app</title>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/candles/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/candles/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/candles/favicon-16x16.png" />
        <link rel="manifest" href="/candles/site.webmanifest" />
        <link rel="mask-icon" href="/candles/safari-pinned-tab.svg" color="#003382" />
        <link rel="shortcut icon" href="/candles/favicon.ico" />
        <meta name="msapplication-TileColor" content="#fafcff" />
        <meta name="msapplication-config" content="/candles/browserconfig.xml" />
        <meta name="theme-color" content="#fafcff" /> */}
      </Head>
      <Header />
      {error || <div>Some data from the server: {data}</div>}
    </div>
  )
}

//
// Fetch all the data on the server
//

export async function getServerSideProps(): Promise<{ props: { data: string; error?: string } }> {
  const data: string = await new Promise((resolve) => {
    setTimeout(() => resolve(`Hello world!`), 400)
  })
  return { props: { data } }
}

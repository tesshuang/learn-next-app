import Layout from '../components/layout'
import Head from 'next/head'
// import Link from 'next/link'

const Trips = () => {
  return (
    <div>
    <Head>
        <title>Trips</title>
        <meta name="description" content="Want to travel to Canada? Come and browse all our trips picked by the Canadian insider." />
        <meta name="keywords" content="Canada, Canadian, Travel to Canada" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Layout>
        <h1>This is trip page with all trips</h1>
      </Layout>
    </div>
  )
}

export default Trips;
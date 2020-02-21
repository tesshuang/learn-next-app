import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const regex = /&amp;/gi;

const Trips = (props) => {
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
        <ul>
          {props.trips.map(trip => (
            <li key={trip.id}>
              <Link href={`/trips/${trip.slug}`}>
                <a>{trip.name.indexOf('&amp;') ? trip.name.replace(regex, '&'): trip.name}</a>
              </Link>
            </li>
          )) }
        </ul>
      </Layout>
    </div>
  )
}

// use getInitialProps to pre-fetch data from API

Trips.getInitialProps = async () => {
  const res = await fetch('https://uat1.canadavacations.com/wp-json/wp/v2/trips-archive/');
  const data = await res.json();
  
  console.log(`data fetch. Count: ${data.length}`);

  return {
    trips: data
  }
}
export default Trips;